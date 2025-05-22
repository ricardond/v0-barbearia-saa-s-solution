"use client"

import { useState } from "react"
import { z } from "zod"

const formSchema = z.object({
  name: z.string().min(3, {
    message: "O nome deve ter pelo menos 3 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, insira um e-mail válido.",
  }),
  phone: z.string().min(10, {
    message: "Por favor, insira um telefone válido.",
  }),
  notes: z.string().optional(),
  notifications: z.boolean().default(true),
})

interface BookingFormProps {
  onSubmit: (data: z.infer<typeof formSchema>) => void
}

export function BookingForm({ onSubmit }: BookingFormProps) {
  const [isLoading, setIsLoading] = useState(false)
