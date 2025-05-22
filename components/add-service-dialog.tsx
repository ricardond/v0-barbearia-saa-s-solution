"use client"

import type React from "react"

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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface AddServiceDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onAddService: (service: any) => void
}

export function AddServiceDialog({ open, onOpenChange, onAddService }: AddServiceDialogProps) {
  const [service, setService] = useState({
    name: "",
    description: "",
    price: 0,
    duration: 30,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAddService(service)
    setService({
      name: "",
      description: "",
      price: 0,
      duration: 30,
    })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicionar Serviço</DialogTitle>
          <DialogDescription>Preencha as informações do novo serviço abaixo.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                value={service.name}
                onChange={(e) => setService({ ...service, name: e.target.value })}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Descrição</Label>
              <Textarea
                id="description"
                value={service.description}
                onChange={(e) => setService({ ...service, description: e.target.value })}
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="price">Preço (R$)</Label>
                <Input
                  id="price"
                  type="number"
                  min="0"
                  step="0.01"
                  value={service.price}
                  onChange={(e) => setService({ ...service, price: Number.parseFloat(e.target.value) })}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="duration">Duração (min)</Label>
                <Input
                  id="duration"
                  type="number"
                  min="5"
                  step="5"
                  value={service.duration}
                  onChange={(e) => setService({ ...service, duration: Number.parseInt(e.target.value) })}
                  required
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancelar
            </Button>
            <Button type="submit">Adicionar</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
