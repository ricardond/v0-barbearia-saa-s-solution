"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useToast } from "@/components/ui/use-toast"

interface TimeGridProps {
  date?: Date
  barberId?: string
}

// Dados de exemplo para horários
const timeSlots = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
]

// Dados de exemplo para agendamentos
const bookedSlots = [
  { time: "10:00", customer: "João Paulo", service: "Corte de Cabelo", barberId: "1" },
  { time: "11:30", customer: "Marcos Oliveira", service: "Corte + Barba", barberId: "1" },
  { time: "14:00", customer: "Ricardo Souza", service: "Barba", barberId: "2" },
  { time: "16:30", customer: "Felipe Santos", service: "Corte de Cabelo", barberId: "2" },
]

export function TimeGrid({ date, barberId }: TimeGridProps) {
  const { toast } = useToast()
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const isSlotBooked = (time: string) => {
    if (barberId === "all") {
      return bookedSlots.some((slot) => slot.time === time)
    }
    return bookedSlots.some((slot) => slot.time === time && slot.barberId === barberId)
  }

  const getBookingDetails = (time: string) => {
    if (barberId === "all") {
      return bookedSlots.find((slot) => slot.time === time)
    }
    return bookedSlots.find((slot) => slot.time === time && slot.barberId === barberId)
  }

  const handleTimeClick = (time: string) => {
    const booking = getBookingDetails(time)
    if (booking) {
      setSelectedSlot(time)
      setIsDialogOpen(true)
    } else {
      toast({
        title: "Horário disponível",
        description: `O horário ${time} está disponível para agendamento.`,
      })
    }
  }

  const handleCancelBooking = () => {
    toast({
      title: "Agendamento cancelado",
      description: `O agendamento das ${selectedSlot} foi cancelado com sucesso.`,
    })
    setIsDialogOpen(false)
  }

  return (
    <>
      <ScrollArea className="h-[400px]">
        <div className="grid grid-cols-4 gap-2 p-1">
          {timeSlots.map((time) => {
            const isBooked = isSlotBooked(time)
            const booking = getBookingDetails(time)

            return (
              <Button
                key={time}
                variant={isBooked ? "default" : "outline"}
                className={`h-16 ${isBooked ? "bg-primary hover:bg-primary/90" : ""}`}
                onClick={() => handleTimeClick(time)}
              >
                <div className="flex flex-col items-center">
                  <span className="text-sm font-medium">{time}</span>
                  {isBooked && <span className="text-xs truncate max-w-full">{booking?.customer}</span>}
                </div>
              </Button>
            )
          })}
        </div>
      </ScrollArea>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Detalhes do Agendamento</DialogTitle>
            <DialogDescription>Informações sobre o agendamento selecionado.</DialogDescription>
          </DialogHeader>
          {selectedSlot && (
            <div className="py-4">
              <div className="grid grid-cols-2 gap-2">
                <div className="text-sm font-medium">Horário:</div>
                <div className="text-sm">{selectedSlot}</div>

                <div className="text-sm font-medium">Cliente:</div>
                <div className="text-sm">{getBookingDetails(selectedSlot)?.customer}</div>

                <div className="text-sm font-medium">Serviço:</div>
                <div className="text-sm">{getBookingDetails(selectedSlot)?.service}</div>

                <div className="text-sm font-medium">Barbeiro:</div>
                <div className="text-sm">
                  {getBookingDetails(selectedSlot)?.barberId === "1" ? "João Silva" : "Carlos Oliveira"}
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Fechar
            </Button>
            <Button variant="destructive" onClick={handleCancelBooking}>
              Cancelar Agendamento
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
