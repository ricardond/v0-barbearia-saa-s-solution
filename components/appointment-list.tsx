import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Check, X } from "lucide-react"

// Dados de exemplo para agendamentos
const appointments = [
  {
    id: "1",
    time: "09:00",
    customer: {
      name: "João Paulo",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    service: "Corte de Cabelo",
    barber: "João Silva",
  },
  {
    id: "2",
    time: "10:00",
    customer: {
      name: "Ricardo Souza",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    service: "Barba",
    barber: "Carlos Oliveira",
  },
  {
    id: "3",
    time: "11:30",
    customer: {
      name: "Marcos Oliveira",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    service: "Corte + Barba",
    barber: "João Silva",
  },
  {
    id: "4",
    time: "13:00",
    customer: {
      name: "Felipe Santos",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    service: "Corte de Cabelo",
    barber: "Carlos Oliveira",
  },
]

export function AppointmentList() {
  return (
    <div className="space-y-4">
      {appointments.map((appointment, index) => (
        <div key={appointment.id}>
          <div className="flex items-center">
            <div className="w-12 text-sm font-medium">{appointment.time}</div>
            <Card className="flex-1">
              <CardContent className="p-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src={appointment.customer.avatar || "/placeholder.svg"}
                        alt={appointment.customer.name}
                      />
                      <AvatarFallback>{appointment.customer.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{appointment.customer.name}</p>
                      <p className="text-xs text-muted-foreground">{appointment.service}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="sr-only">Confirmar</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <X className="h-4 w-4 text-red-500" />
                      <span className="sr-only">Cancelar</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          {index < appointments.length - 1 && <Separator className="my-2" />}
        </div>
      ))}
    </div>
  )
}
