"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PlusCircle } from "lucide-react"
import { BarberCard } from "@/components/barber-card"
import { AddBarberDialog } from "@/components/add-barber-dialog"

// Dados de exemplo para barbeiros
const initialBarbers = [
  {
    id: "1",
    name: "João Silva",
    avatar: "/placeholder.svg?height=100&width=100",
    description: "Especialista em cortes modernos e barba",
    services: ["Corte", "Barba", "Sobrancelha"],
  },
  {
    id: "2",
    name: "Carlos Oliveira",
    avatar: "/placeholder.svg?height=100&width=100",
    description: "Mestre em degradê e cortes clássicos",
    services: ["Corte", "Barba", "Pigmentação"],
  },
]

export default function BarbersPage() {
  const [barbers, setBarbers] = useState(initialBarbers)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleAddBarber = (barber: any) => {
    setBarbers([...barbers, { ...barber, id: Date.now().toString() }])
    setIsDialogOpen(false)
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Barbeiros</h2>
        <Button onClick={() => setIsDialogOpen(true)}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Adicionar Barbeiro
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Gerenciar Barbeiros</CardTitle>
          <CardDescription>Adicione, edite ou remova barbeiros da sua barbearia</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {barbers.map((barber) => (
              <BarberCard key={barber.id} barber={barber} />
            ))}
          </div>

          {barbers.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <p className="text-sm text-muted-foreground">
                Nenhum barbeiro cadastrado. Adicione seu primeiro barbeiro.
              </p>
              <Button variant="outline" className="mt-4" onClick={() => setIsDialogOpen(true)}>
                <PlusCircle className="mr-2 h-4 w-4" />
                Adicionar Barbeiro
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      <AddBarberDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} onAddBarber={handleAddBarber} />
    </div>
  )
}
