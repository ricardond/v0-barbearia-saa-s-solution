"use client"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

interface BookingTimeSelectorProps {
  date?: Date
  barberId: string | null
  serviceId: string | null
  selectedTime: string | null
  onSelectTime: (time: string) => void
}

// Dados de exemplo para horários disponíveis
const availableTimes = [
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

// Dados de exemplo para horários ocupados
const bookedTimes = {
  "1": ["10:00", "11:30", "15:00"],
  "2": ["09:30", "14:00", "16:30"],
}

export function BookingTimeSelector({
  date,
  barberId,
  serviceId,
  selectedTime,
  onSelectTime,
}: BookingTimeSelectorProps) {
  // Verificar se o horário está disponível
  const isTimeAvailable = (time: string) => {
    if (!barberId) return true
    return !bookedTimes[barberId as keyof typeof bookedTimes]?.includes(time)
  }

  return (
    <div className="space-y-4">
      <h4 className="font-medium">Horários Disponíveis</h4>
      {!barberId || !serviceId ? (
        <p className="text-sm text-muted-foreground">
          Selecione um barbeiro e um serviço para ver os horários disponíveis.
        </p>
      ) : (
        <ScrollArea className="h-[300px]">
          <div className="grid grid-cols-3 gap-2">
            {availableTimes.map((time) => (
              <Button
                key={time}
                variant={selectedTime === time ? "default" : "outline"}
                className={`${!isTimeAvailable(time) ? "opacity-50 cursor-not-allowed" : ""}`}
                onClick={() => isTimeAvailable(time) && onSelectTime(time)}
                disabled={!isTimeAvailable(time)}
              >
                {time}
              </Button>
            ))}
          </div>
        </ScrollArea>
      )}
    </div>
  )
}
