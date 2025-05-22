import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Scissors, Calendar, Clock, BarChart3, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Scissors className="h-6 w-6" />
            <span>BarberHub</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">
              Funcionalidades
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:underline underline-offset-4">
              Preços
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:underline underline-offset-4">
              Depoimentos
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline">Entrar</Button>
            </Link>
            <Link href="/register">
              <Button>Cadastrar</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Gerencie sua barbearia com facilidade
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Sistema completo para gerenciamento de barbearias, agendamentos online e controle financeiro.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/register">
                    <Button size="lg" className="w-full">
                      Começar agora
                    </Button>
                  </Link>
                  <Link href="#demo">
                    <Button size="lg" variant="outline" className="w-full">
                      Ver demonstração
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[500px] aspect-video overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
                <img
                  src="/placeholder.svg?height=500&width=800"
                  alt="Dashboard da barbearia"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Funcionalidades</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Tudo o que você precisa para gerenciar sua barbearia em um só lugar
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Calendar className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Agendamentos Online</h3>
                <p className="text-sm text-gray-500 text-center dark:text-gray-400">
                  Seus clientes podem agendar horários diretamente pelo sistema, escolhendo barbeiro e serviço.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Users className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Gestão de Barbeiros</h3>
                <p className="text-sm text-gray-500 text-center dark:text-gray-400">
                  Cadastre seus barbeiros, defina suas especialidades e controle seus horários.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Clock className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Horários Flexíveis</h3>
                <p className="text-sm text-gray-500 text-center dark:text-gray-400">
                  Configure os dias e horários de funcionamento da sua barbearia com total flexibilidade.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <BarChart3 className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Controle Financeiro</h3>
                <p className="text-sm text-gray-500 text-center dark:text-gray-400">
                  Acompanhe o faturamento por barbeiro, por dia e por mês com relatórios detalhados.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-12 w-12 text-primary"
                >
                  <path d="M18 3v4c0 2-2 4-4 4H2"></path>
                  <path d="M18 3a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></path>
                  <path d="M6 21v-4c0-2 2-4 4-4h12"></path>
                  <path d="M6 21a2 2 0 1 1-4 0a2 2 0 0 1 4 0z"></path>
                </svg>
                <h3 className="text-xl font-bold">Google Calendar</h3>
                <p className="text-sm text-gray-500 text-center dark:text-gray-400">
                  Sincronize os agendamentos com o Google Calendar dos seus barbeiros automaticamente.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-12 w-12 text-primary"
                >
                  <rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect>
                  <path d="M9 22v-4h6v4"></path>
                  <path d="M8 6h.01"></path>
                  <path d="M16 6h.01"></path>
                  <path d="M12 6h.01"></path>
                  <path d="M12 10h.01"></path>
                  <path d="M12 14h.01"></path>
                  <path d="M16 10h.01"></path>
                  <path d="M16 14h.01"></path>
                  <path d="M8 10h.01"></path>
                  <path d="M8 14h.01"></path>
                </svg>
                <h3 className="text-xl font-bold">Responsivo</h3>
                <p className="text-sm text-gray-500 text-center dark:text-gray-400">
                  Acesse o sistema de qualquer dispositivo, seja computador, tablet ou smartphone.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Planos e Preços</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Escolha o plano ideal para o tamanho da sua barbearia
                </p>
              </div>
            </div>
            <div className="grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 mx-auto mt-8">
              <div className="flex flex-col rounded-lg border shadow-sm">
                <div className="p-6">
                  <h3 className="text-xl font-bold">Iniciante</h3>
                  <div className="mt-4 text-3xl font-bold">
                    R$ 99<span className="text-sm font-normal text-gray-500">/mês</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Para barbearias pequenas com até 2 barbeiros
                  </p>
                  <ul className="mt-6 space-y-2 text-sm">
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Até 2 barbeiros
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Agendamentos ilimitados
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Relatórios básicos
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Suporte por e-mail
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col p-6 border-t">
                  <Link href="/register?plan=iniciante">
                    <Button className="w-full">Começar agora</Button>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col rounded-lg border shadow-sm bg-primary/5 border-primary/20">
                <div className="p-6">
                  <h3 className="text-xl font-bold">Profissional</h3>
                  <div className="mt-4 text-3xl font-bold">
                    R$ 199<span className="text-sm font-normal text-gray-500">/mês</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Para barbearias médias com até 5 barbeiros
                  </p>
                  <ul className="mt-6 space-y-2 text-sm">
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Até 5 barbeiros
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Agendamentos ilimitados
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Relatórios avançados
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Integração com Google Calendar
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Suporte prioritário
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col p-6 border-t">
                  <Link href="/register?plan=profissional">
                    <Button className="w-full">Começar agora</Button>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col rounded-lg border shadow-sm">
                <div className="p-6">
                  <h3 className="text-xl font-bold">Premium</h3>
                  <div className="mt-4 text-3xl font-bold">
                    R$ 299<span className="text-sm font-normal text-gray-500">/mês</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Para barbearias grandes com até 10 barbeiros
                  </p>
                  <ul className="mt-6 space-y-2 text-sm">
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Até 10 barbeiros
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Agendamentos ilimitados
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Relatórios completos
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Integração com Google Calendar
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Suporte 24/7
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Personalização avançada
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col p-6 border-t">
                  <Link href="/register?plan=premium">
                    <Button className="w-full">Começar agora</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 text-center">
          <div className="flex items-center gap-2 font-bold">
            <Scissors className="h-6 w-6" />
            <span>BarberHub</span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} BarberHub. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
