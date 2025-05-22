"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PlusCircle } from "lucide-react"
import { ServiceCard } from "@/components/service-card"
import { AddServiceDialog } from "@/components/add-service-dialog"

// Dados de exemplo para serviços
const initialServices = [
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

export default function ServicesPage() {
  const [services, setServices] = useState(initialServices)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleAddService = (service: any) => {
    setServices([...services, { ...service, id: Date.now().toString() }])
    setIsDialogOpen(false)
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Serviços</h2>
        <Button onClick={() => setIsDialogOpen(true)}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Adicionar Serviço
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Gerenciar Serviços</CardTitle>
          <CardDescription>Adicione, edite ou remova serviços oferecidos pela sua barbearia</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {services.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <p className="text-sm text-muted-foreground">Nenhum serviço cadastrado. Adicione seu primeiro serviço.</p>
              <Button variant="outline" className="mt-4" onClick={() => setIsDialogOpen(true)}>
                <PlusCircle className="mr-2 h-4 w-4" />
                Adicionar Serviço
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      <AddServiceDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} onAddService={handleAddService} />
    </div>
  )
}
