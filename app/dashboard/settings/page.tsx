"use client"

import { SelectItem } from "@/components/ui/select"

import { SelectContent } from "@/components/ui/select"

import { SelectValue } from "@/components/ui/select"

import { SelectTrigger } from "@/components/ui/select"

import { Select } from "@/components/ui/select"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { TimeRangeSelector } from "@/components/time-range-selector"
import { useToast } from "@/components/ui/use-toast"

export default function SettingsPage() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  const handleSaveShopInfo = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulação de salvamento
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Informações salvas",
        description: "As informações da barbearia foram atualizadas com sucesso.",
      })
    }, 1000)
  }

  const handleSaveWorkingHours = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulação de salvamento
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Horários salvos",
        description: "Os horários de funcionamento foram atualizados com sucesso.",
      })
    }, 1000)
  }

  const handleConnectGoogle = () => {
    toast({
      title: "Conectando ao Google Calendar",
      description: "Você será redirecionado para autorizar o acesso.",
    })
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Configurações</h2>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">Geral</TabsTrigger>
          <TabsTrigger value="hours">Horários</TabsTrigger>
          <TabsTrigger value="integrations">Integrações</TabsTrigger>
          <TabsTrigger value="notifications">Notificações</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <Card>
            <form onSubmit={handleSaveShopInfo}>
              <CardHeader>
                <CardTitle>Informações da Barbearia</CardTitle>
                <CardDescription>Atualize as informações básicas da sua barbearia</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome da Barbearia</Label>
                  <Input id="name" defaultValue="Barbearia Exemplo" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail de Contato</Label>
                  <Input id="email" type="email" defaultValue="contato@barbearia.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input id="phone" defaultValue="(11) 99999-9999" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Endereço</Label>
                  <Textarea id="address" defaultValue="Rua Exemplo, 123 - Bairro - Cidade/UF" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Descrição</Label>
                  <Textarea id="description" defaultValue="Barbearia especializada em cortes modernos e clássicos." />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Salvando..." : "Salvar Alterações"}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>

        <TabsContent value="hours" className="space-y-4">
          <Card>
            <form onSubmit={handleSaveWorkingHours}>
              <CardHeader>
                <CardTitle>Horários de Funcionamento</CardTitle>
                <CardDescription>Configure os dias e horários de funcionamento da sua barbearia</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="monday" className="flex items-center space-x-2">
                      <Switch id="monday" defaultChecked />
                      <span>Segunda-feira</span>
                    </Label>
                    <TimeRangeSelector defaultStart="09:00" defaultEnd="19:00" />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="tuesday" className="flex items-center space-x-2">
                      <Switch id="tuesday" defaultChecked />
                      <span>Terça-feira</span>
                    </Label>
                    <TimeRangeSelector defaultStart="09:00" defaultEnd="19:00" />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="wednesday" className="flex items-center space-x-2">
                      <Switch id="wednesday" defaultChecked />
                      <span>Quarta-feira</span>
                    </Label>
                    <TimeRangeSelector defaultStart="09:00" defaultEnd="19:00" />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="thursday" className="flex items-center space-x-2">
                      <Switch id="thursday" defaultChecked />
                      <span>Quinta-feira</span>
                    </Label>
                    <TimeRangeSelector defaultStart="09:00" defaultEnd="19:00" />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="friday" className="flex items-center space-x-2">
                      <Switch id="friday" defaultChecked />
                      <span>Sexta-feira</span>
                    </Label>
                    <TimeRangeSelector defaultStart="09:00" defaultEnd="19:00" />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="saturday" className="flex items-center space-x-2">
                      <Switch id="saturday" defaultChecked />
                      <span>Sábado</span>
                    </Label>
                    <TimeRangeSelector defaultStart="09:00" defaultEnd="17:00" />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="sunday" className="flex items-center space-x-2">
                      <Switch id="sunday" />
                      <span>Domingo</span>
                    </Label>
                    <TimeRangeSelector defaultStart="09:00" defaultEnd="13:00" disabled />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interval">Intervalo entre Agendamentos (minutos)</Label>
                  <Select defaultValue="30">
                    <SelectTrigger id="interval">
                      <SelectValue placeholder="Selecione o intervalo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15">15 minutos</SelectItem>
                      <SelectItem value="30">30 minutos</SelectItem>
                      <SelectItem value="45">45 minutos</SelectItem>
                      <SelectItem value="60">60 minutos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Salvando..." : "Salvar Horários"}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>

        <TabsContent value="integrations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Integrações</CardTitle>
              <CardDescription>Conecte sua barbearia com outros serviços</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <h3 className="font-medium">Google Calendar</h3>
                  <p className="text-sm text-muted-foreground">
                    Sincronize os agendamentos com o Google Calendar dos seus barbeiros
                  </p>
                </div>
                <Button variant="outline" onClick={handleConnectGoogle}>
                  Conectar
                </Button>
              </div>

              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <h3 className="font-medium">WhatsApp</h3>
                  <p className="text-sm text-muted-foreground">
                    Envie notificações automáticas por WhatsApp para seus clientes
                  </p>
                </div>
                <Button variant="outline">Conectar</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Configurações de Notificações</CardTitle>
              <CardDescription>Configure como e quando as notificações serão enviadas</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="email-notifications">Notificações por E-mail</Label>
                  <p className="text-sm text-muted-foreground">Enviar e-mails de confirmação para os clientes</p>
                </div>
                <Switch id="email-notifications" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="reminder-notifications">Lembretes</Label>
                  <p className="text-sm text-muted-foreground">Enviar lembretes 2 horas antes do agendamento</p>
                </div>
                <Switch id="reminder-notifications" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="cancel-notifications">Cancelamentos</Label>
                  <p className="text-sm text-muted-foreground">Notificar quando um cliente cancelar um agendamento</p>
                </div>
                <Switch id="cancel-notifications" defaultChecked />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Salvar Preferências</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
