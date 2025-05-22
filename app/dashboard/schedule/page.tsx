"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TimeGrid } from "@/components/time-grid"

export default function SchedulePage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [barber, setBarber] = useState("all")

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Agenda</h2>
        <div className="flex items-center gap-2">
          <Select value={barber} onValueChange={setBarber}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Selecione um barbeiro" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos os barbeiros</SelectItem>
              <SelectItem value="1">João Silva</SelectItem>
              <SelectItem value="2">Carlos Oliveira</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-[300px_1fr]">
        <Card>
          <CardHeader>
            <CardTitle>Calendário</CardTitle>
            <CardDescription>Selecione uma data para ver os agendamentos</CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>
              Agendamentos para {date?.toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "long" })}
            </CardTitle>
            <CardDescription>
              {barber === "all"
                ? "Visualizando todos os barbeiros"
                : `Visualizando agendamentos de ${barber === "1" ? "João Silva" : "Carlos Oliveira"}`}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="grid" className="space-y-4">
              <TabsList>
                <TabsTrigger value="grid">Grade de Horários</TabsTrigger>
                <TabsTrigger value="list">Lista</TabsTrigger>
              </TabsList>

              <TabsContent value="grid" className="space-y-4">
                <TimeGrid date={date} barberId={barber} />
              </TabsContent>

              <TabsContent value="list" className="space-y-4">
                <div className="rounded-md border p-4">
                  <p className="text-sm text-muted-foreground">Visualização em lista será implementada em breve.</p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
