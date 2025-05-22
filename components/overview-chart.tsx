"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTheme } from "next-themes"
import { Line, Bar } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  type ChartOptions,
} from "chart.js"

// Registrar componentes do Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend)

// Dados de exemplo para o gráfico
const weeklyData = {
  labels: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"],
  datasets: [
    {
      label: "Faturamento (R$)",
      data: [580, 490, 620, 510, 700, 850, 0],
      borderColor: "hsl(var(--primary))",
      backgroundColor: "hsl(var(--primary) / 0.1)",
      tension: 0.3,
    },
  ],
}

const monthlyData = {
  labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
  datasets: [
    {
      label: "Faturamento (R$)",
      data: [12500, 13200, 14800, 13900, 15200, 16500, 17800, 18200, 19100, 20500, 21800, 23000],
      borderColor: "hsl(var(--primary))",
      backgroundColor: "hsl(var(--primary) / 0.1)",
      tension: 0.3,
    },
  ],
}

const servicesData = {
  labels: ["Corte", "Barba", "Corte + Barba", "Sobrancelha", "Outros"],
  datasets: [
    {
      label: "Serviços",
      data: [42, 28, 35, 15, 10],
      backgroundColor: [
        "hsl(var(--primary) / 0.8)",
        "hsl(var(--primary) / 0.6)",
        "hsl(var(--primary) / 0.4)",
        "hsl(var(--primary) / 0.3)",
        "hsl(var(--primary) / 0.2)",
      ],
    },
  ],
}

export function OverviewChart() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          color: isDark ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)",
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
        },
        ticks: {
          color: isDark ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)",
        },
      },
      x: {
        grid: {
          color: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
        },
        ticks: {
          color: isDark ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)",
        },
      },
    },
  }

  const barOptions: ChartOptions<"bar"> = {
    ...options,
    indexAxis: "y" as const,
  }

  return (
    <Tabs defaultValue="weekly" className="w-full">
      <TabsList className="mb-4">
        <TabsTrigger value="weekly">Semanal</TabsTrigger>
        <TabsTrigger value="monthly">Mensal</TabsTrigger>
        <TabsTrigger value="services">Serviços</TabsTrigger>
      </TabsList>
      <TabsContent value="weekly" className="h-[300px]">
        <Line data={weeklyData} options={options} />
      </TabsContent>
      <TabsContent value="monthly" className="h-[300px]">
        <Line data={monthlyData} options={options} />
      </TabsContent>
      <TabsContent value="services" className="h-[300px]">
        <Bar data={servicesData} options={barOptions} />
      </TabsContent>
    </Tabs>
  )
}
