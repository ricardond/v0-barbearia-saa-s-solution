"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Scissors } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { createClient } from "@/lib/supabase/client"

const formSchema = z.object({
  shopName: z.string().min(3, {
    message: "O nome da barbearia deve ter pelo menos 3 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, insira um e-mail válido.",
  }),
  password: z.string().min(8, {
    message: "A senha deve ter pelo menos 8 caracteres.",
  }),
})

export default function RegisterPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const plan = searchParams.get("plan") || "profissional"
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      shopName: "",
      email: "",
      password: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)

    try {
      const supabase = createClient()

      // Registrar o usuário
      const { data, error } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
        options: {
          data: {
            shop_name: values.shopName,
            plan: plan,
          },
        },
      })

      if (error) {
        throw error
      }

      // Criar registro da barbearia
      if (data.user) {
        const { error: shopError } = await supabase.from("shops").insert({
          id: data.user.id,
          name: values.shopName,
          email: values.email,
          plan: plan,
        })

        if (shopError) {
          throw shopError
        }
      }

      toast({
        title: "Cadastro realizado com sucesso!",
        description: "Verifique seu e-mail para confirmar sua conta.",
      })

      // Redirecionar para a página de login
      router.push("/login")
    } catch (error: any) {
      toast({
        title: "Erro ao cadastrar",
        description: error.message || "Ocorreu um erro ao criar sua conta.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1 flex-col justify-center items-center p-4 sm:p-8">
        <div className="mx-auto w-full max-w-md space-y-6">
          <div className="flex flex-col items-center space-y-2 text-center">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <Scissors className="h-6 w-6" />
              <span>BarberHub</span>
            </Link>
            <h1 className="text-2xl font-bold">Crie sua conta</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Preencha os dados abaixo para criar sua conta</p>
          </div>
          <div className="space-y-4">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="shopName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome da Barbearia</FormLabel>
                      <FormControl>
                        <Input placeholder="Barbearia Exemplo" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="exemplo@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Senha</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="********" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="pt-2">
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Cadastrando..." : "Cadastrar"}
                  </Button>
                </div>
              </form>
            </Form>
            <div className="text-center text-sm">
              Já tem uma conta?{" "}
              <Link href="/login" className="font-medium text-primary hover:underline">
                Faça login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
