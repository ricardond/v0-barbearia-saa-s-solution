import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface TimeRangeSelectorProps {
  defaultStart?: string
  defaultEnd?: string
  disabled?: boolean
}

export function TimeRangeSelector({
  defaultStart = "09:00",
  defaultEnd = "18:00",
  disabled = false,
}: TimeRangeSelectorProps) {
  // Gerar opções de horário de 30 em 30 minutos
  const generateTimeOptions = () => {
    const options = []
    for (let hour = 6; hour < 23; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const formattedHour = hour.toString().padStart(2, "0")
        const formattedMinute = minute.toString().padStart(2, "0")
        options.push(`${formattedHour}:${formattedMinute}`)
      }
    }
    return options
  }

  const timeOptions = generateTimeOptions()

  return (
    <div className="flex items-center gap-2">
      <Select defaultValue={defaultStart} disabled={disabled}>
        <SelectTrigger className="w-[100px]">
          <SelectValue placeholder="Início" />
        </SelectTrigger>
        <SelectContent>
          {timeOptions.map((time) => (
            <SelectItem key={`start-${time}`} value={time}>
              {time}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <span>até</span>
      <Select defaultValue={defaultEnd} disabled={disabled}>
        <SelectTrigger className="w-[100px]">
          <SelectValue placeholder="Fim" />
        </SelectTrigger>
        <SelectContent>
          {timeOptions.map((time) => (
            <SelectItem key={`end-${time}`} value={time}>
              {time}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
