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

interface AddBarberDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onAddBarber: (barber: any) => void
}

export function AddBarberDialog({ open, onOpenChange, onAddBarber }: AddBarberDialogProps) {
  const [barber, setBarber] = useState({
    name: "",
    avatar: "/placeholder.svg?height=100&width=100",
    description: "",
    services: [],
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAddBarber(barber)
    setBarber({
      name: "",
      avatar: "/placeholder.svg?height=100&width=100",
      description: "",
      services: [],
    })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicionar Barbeiro</DialogTitle>
          <DialogDescription>Preencha as informações do novo barbeiro abaixo.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                value={barber.name}
                onChange={(e) => setBarber({ ...barber, name: e.target.value })}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Descrição</Label>
              <Textarea
                id="description"
                value={barber.description}
                onChange={(e) => setBarber({ ...barber, description: e.target.value })}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="avatar">URL da Foto</Label>
              <Input
                id="avatar"
                value={barber.avatar}
                onChange={(e) => setBarber({ ...barber, avatar: e.target.value })}
              />
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
