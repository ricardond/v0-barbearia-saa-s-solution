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
import { Clock, Pencil, Trash2 } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

interface ServiceCardProps {
  service: {
    id: string
    name: string
    description: string
    price: number
    duration: number
  }
}

export function ServiceCard({ service }: ServiceCardProps) {
  const { toast } = useToast()
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [editedService, setEditedService] = useState(service)

  const handleEditService = () => {
    // Aqui seria feita a integração com a API para atualizar o serviço
    toast({
      title: "Serviço atualizado",
      description: `${editedService.name} foi atualizado com sucesso.`,
    })
    setIsEditDialogOpen(false)
  }

  const handleDeleteService = () => {
    // Aqui seria feita a integração com a API para excluir o serviço
    toast({
      title: "Serviço excluído",
      description: `${service.name} foi removido com sucesso.`,
    })
    setIsDeleteDialogOpen(false)
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{service.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-sm text-muted-foreground">{service.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span>{service.duration} min</span>
          </div>
          <div className="font-medium">R$ {service.price.toFixed(2)}</div>
        </div>
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
              <DialogTitle>Editar Serviço</DialogTitle>
              <DialogDescription>Atualize as informações do serviço abaixo.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Nome</Label>
                <Input
                  id="name"
                  value={editedService.name}
                  onChange={(e) => setEditedService({ ...editedService, name: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Descrição</Label>
                <Textarea
                  id="description"
                  value={editedService.description}
                  onChange={(e) => setEditedService({ ...editedService, description: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="price">Preço (R$)</Label>
                  <Input
                    id="price"
                    type="number"
                    value={editedService.price}
                    onChange={(e) => setEditedService({ ...editedService, price: Number.parseFloat(e.target.value) })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="duration">Duração (min)</Label>
                  <Input
                    id="duration"
                    type="number"
                    value={editedService.duration}
                    onChange={(e) => setEditedService({ ...editedService, duration: Number.parseInt(e.target.value) })}
                  />
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                Cancelar
              </Button>
              <Button onClick={handleEditService}>Salvar</Button>
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
              <DialogTitle>Excluir Serviço</DialogTitle>
              <DialogDescription>
                Tem certeza que deseja excluir {service.name}? Esta ação não pode ser desfeita.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
                Cancelar
              </Button>
              <Button variant="destructive" onClick={handleDeleteService}>
                Excluir
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  )
}
