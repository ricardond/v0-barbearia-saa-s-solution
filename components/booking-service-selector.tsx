"use client"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Clock } from "lucide-react"

interface BookingServiceSelectorProps {
  services: {
    id: string
    name: string
    description: string
    price: number
    duration: number
  }[]
  selectedService: string | null
  onSelectService: (serviceId: string) => void
}

export function BookingServiceSelector({ services, selectedService, onSelectService }: BookingServiceSelectorProps) {
  return (
    <RadioGroup value={selectedService || ""} onValueChange={onSelectService}>
      <div className="grid gap-4">
        {services.map((service) => (
          <div key={service.id}>
            <RadioGroupItem value={service.id} id={`service-${service.id}`} className="peer sr-only" />
            <Label
              htmlFor={`service-${service.id}`}
              className="flex cursor-pointer flex-col rounded-lg border p-4 hover:bg-accent peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-accent"
            >
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <p className="font-medium">{service.name}</p>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">R$ {service.price.toFixed(2)}</p>
                  <div className="flex items-center justify-end gap-1 text-sm text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{service.duration} min</span>
                  </div>
                </div>
              </div>
            </Label>
          </div>
        ))}
      </div>
    </RadioGroup>
  )
}
