"use client"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface BookingBarberSelectorProps {
  barbers: {
    id: string
    name: string
    avatar: string
    description: string
  }[]
  selectedBarber: string | null
  onSelectBarber: (barberId: string) => void
}

export function BookingBarberSelector({ barbers, selectedBarber, onSelectBarber }: BookingBarberSelectorProps) {
  return (
    <RadioGroup value={selectedBarber || ""} onValueChange={onSelectBarber}>
      <div className="grid gap-4 md:grid-cols-2">
        {barbers.map((barber) => (
          <div key={barber.id}>
            <RadioGroupItem value={barber.id} id={`barber-${barber.id}`} className="peer sr-only" />
            <Label
              htmlFor={`barber-${barber.id}`}
              className="flex cursor-pointer flex-col rounded-lg border p-4 hover:bg-accent peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-accent"
            >
              <div className="flex items-start gap-4">
                <div className="h-16 w-16 overflow-hidden rounded-full">
                  <img
                    src={barber.avatar || "/placeholder.svg"}
                    alt={barber.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <p className="font-medium">{barber.name}</p>
                  <p className="text-sm text-muted-foreground">{barber.description}</p>
                </div>
              </div>
            </Label>
          </div>
        ))}
      </div>
    </RadioGroup>
  )
}
