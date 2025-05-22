"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Pencil, Trash2 } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

interface BarberCardProps {
  barber: {
    id: string
    name: string
    avatar: string
    description: string
    services?: string[]
  }
}

export function BarberCard({ barber }: BarberCardProps) {
  const { toast } = useToast()
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [editedBarber, setEditedBarber] = useState(barber)

  const handleEditBarber = () => {
    // Aqui seria feita a integração com a API para atualizar o barbeiro
    toast({
      title: "Barbeiro atualizado",
      description: `As informações de ${editedBarber.name} foram atualizadas com sucesso.`,
    })
    setIsEditDialogOpen(false)
  }

  const handleDeleteBarber = () => {
    // Aqui seria feita a integração com a API para excluir o barbeiro
    toast({
      title: "Barbeiro excluído",
      description: `${barber.name} foi removido com sucesso.`,
    })
    setIsDeleteDialogOpen(false)
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{barber.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-center">
          <div className="h-24 w-24 overflow-hidden rounded-full">
            <img src={barber.avatar || "/placeholder.svg"} alt={barber.name} className="h-full w-full object-cover" />
          </div>
        </div>
        <p className="text-sm text-muted-foreground text-center">{barber.description}</p>
        {barber.services && barber.services.length > 0 && (
          <div className="flex flex-wrap gap-1 justify-center">
            {barber.services.map((service, index) => (
              <span
                key={index}
                className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
              >
                {service}
              </span>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">
              <Pencil className="mr-2 h-4 w-4" />
              Editar
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Editar Barbeiro</DialogTitle>
              <DialogDescription>Atualize as informações do barbeiro abaixo.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Nome</Label>
                <Input
                  id="name"
                  value={editedBarber.name}
                  onChange={(e) => setEditedBarber({ ...editedBarber, name: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Descrição</Label>
                <Textarea
                  id="description"
                  value={editedBarber.description}
                  onChange={(e) => setEditedBarber({ ...editedBarber, description: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="avatar">URL da Foto</Label>
                <Input
                  id="avatar"
                  value={editedBarber.avatar}
                  onChange={(e) => setEditedBarber({ ...editedBarber, avatar: e.target.value })}
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                Cancelar
              </Button>
              <Button onClick={handleEditBarber}>Salvar</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="destructive" size="sm">
              <Trash2 className="mr-2 h-4 w-4" />
              Excluir
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Excluir Barbeiro</DialogTitle>
              <DialogDescription>
                Tem certeza que deseja excluir {barber.name}? Esta ação não pode ser desfeita.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
                Cancelar
              </Button>
              <Button variant="destructive" onClick={handleDeleteBarber}>
                Excluir
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  )
}
