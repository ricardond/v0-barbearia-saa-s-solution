"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Separator } from "@/components/ui/separator"
import { BookingBarberSelector } from "@/components/booking-barber-selector"
import { BookingServiceSelector } from "@/components/booking-service-selector"
import { BookingTimeSelector } from "@/components/booking-time-selector"
import { BookingForm } from "@/components/booking-form"
import { Scissors } from "lucide-react"

// Dados de exemplo para a barbearia
const shopData = {
  name: "Barbearia Exemplo",
  logo: "/placeholder.svg?height=80&width=80",
  description: "Barbearia especializada em cortes modernos e clássicos.",
}

// Dados de exemplo para barbeiros
const barbers = [
  {
    id: "1",
    name: "João Silva",
    avatar: "/placeholder.svg?height=100&width=100",
    description: "Especialista em cortes modernos e barba",
  },
  {
    id: "2",
    name: "Carlos Oliveira",
    avatar: "/placeholder.svg?height=100&width=100",
    description: "Mestre em degradê e cortes clássicos",
  },
]

// Dados de exemplo para serviços
const services = [
  {
    id: "1",
    name: "Corte de Cabelo",
    description: "Corte tradicional com máquina e tesoura",
    price: 35,
    duration: 30,
  },
  {
    id: "2",
    name: "Barba",
    description: "Modelagem e hidratação da barba",
    price: 25,
    duration: 20,
  },
  {
    id: "3",
    name: "Corte + Barba",
    description: "Combo de corte de cabelo e barba",
    price: 55,
    duration: 45,
  },
  {
    id: "4",
    name: "Sobrancelha",
    description: "Modelagem de sobrancelha com navalha",
    price: 15,
    duration: 10,
  },
]

export default function BookingPage() {
  const params = useParams()
  const shopId = params.shopId as string

  const [step, setStep] = useState(1)
  const [selectedBarber, setSelectedBarber] = useState<string | null>(null)
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  const handleNextStep = () => {
    setStep(step + 1)
  }

  const handlePrevStep = () => {
    setStep(step - 1)
  }

  const handleSubmit = (customerData: any) => {
    // Aqui seria feita a integração com a API para salvar o agendamento
    console.log("Agendamento realizado:", {
      shopId,
      barberId: selectedBarber,
      serviceId: selectedService,
      date: selectedDate,
      time: selectedTime,
      customer: customerData,
    })

    // Redirecionar para página de confirmação
    setStep(5)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center px-4 md:px-6">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Scissors className="h-6 w-6" />
            <span>BarberHub</span>
          </div>
        </div>
      </header>

      <main className="flex-1 py-6 md:py-12">
        <div className="container grid gap-6 px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">{shopData.name}</h1>
              <p className="text-gray-500 dark:text-gray-400">{shopData.description}</p>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[800px]">
            <Card>
              <CardHeader>
                <CardTitle>Agendar Horário</CardTitle>
                <CardDescription>Siga os passos abaixo para agendar seu horário</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-full ${step >= 1 ? "bg-primary text-primary-foreground" : "border"}`}
                      >
                        1
                      </div>
                      <span className="text-sm font-medium">Barbeiro</span>
                    </div>
                    <Separator className="w-10 md:w-20" />
                    <div className="flex items-center space-x-2">
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-full ${step >= 2 ? "bg-primary text-primary-foreground" : "border"}`}
                      >
                        2
                      </div>
                      <span className="text-sm font-medium">Serviço</span>
                    </div>
                    <Separator className="w-10 md:w-20" />
                    <div className="flex items-center space-x-2">
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-full ${step >= 3 ? "bg-primary text-primary-foreground" : "border"}`}
                      >
                        3
                      </div>
                      <span className="text-sm font-medium">Data</span>
                    </div>
                    <Separator className="w-10 md:w-20" />
                    <div className="flex items-center space-x-2">
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-full ${step >= 4 ? "bg-primary text-primary-foreground" : "border"}`}
                      >
                        4
                      </div>
                      <span className="text-sm font-medium">Dados</span>
                    </div>
                  </div>

                  {step === 1 && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Escolha o Barbeiro</h3>
                      <BookingBarberSelector
                        barbers={barbers}
                        selectedBarber={selectedBarber}
                        onSelectBarber={setSelectedBarber}
                      />
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Escolha o Serviço</h3>
                      <BookingServiceSelector
                        services={services}
                        selectedService={selectedService}
                        onSelectService={setSelectedService}
                      />
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Escolha a Data e Horário</h3>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            className="rounded-md border"
                            disabled={(date) => {
                              // Desabilitar datas passadas e domingos
                              return date < new Date() || date.getDay() === 0
                            }}
                          />
                        </div>
                        <div>
                          <BookingTimeSelector
                            date={selectedDate}
                            barberId={selectedBarber}
                            serviceId={selectedService}
                            selectedTime={selectedTime}
                            onSelectTime={setSelectedTime}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 4 && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Seus Dados</h3>
                      <BookingForm onSubmit={handleSubmit} />
                    </div>
                  )}

                  {step === 5 && (
                    <div className="space-y-4 text-center">
                      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-10 w-10 text-green-600 dark:text-green-400"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <h3 className="text-xl font-medium">Agendamento Confirmado!</h3>
                      <p className="text-muted-foreground">
                        Seu agendamento foi confirmado com sucesso. Enviamos um e-mail com os detalhes.
                      </p>
                      <div className="pt-4">
                        <Button asChild>
                          <a href="/">Voltar para o Início</a>
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
              {step < 5 && (
                <CardFooter className="flex justify-between">
                  {step > 1 ? (
                    <Button variant="outline" onClick={handlePrevStep}>
                      Voltar
                    </Button>
                  ) : (
                    <div></div>
                  )}
                  {step < 4 && (
                    <Button
                      onClick={handleNextStep}
                      disabled={
                        (step === 1 && !selectedBarber) ||
                        (step === 2 && !selectedService) ||
                        (step === 3 && !selectedTime)
                      }
                    >
                      Próximo
                    </Button>
                  )}
                </CardFooter>
              )}
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
