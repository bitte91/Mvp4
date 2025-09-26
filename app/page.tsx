import Link from 'next/link'
import { Bell, HandHelping, Briefcase, AlertTriangle } from 'lucide-react'

async function getData() {
  const avisos = await fetch(`${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/data/avisos.json`, { cache: 'no-store' }).then(r => r.json()).catch(() => [])
  const ajuda = await fetch(`${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/data/ajuda.json`, { cache: 'no-store' }).then(r => r.json()).catch(() => [])
  const servicos = await fetch(`${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/data/servicos.json`, { cache: 'no-store' }).then(r => r.json()).catch(() => [])
  const alertas = await fetch(`${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/data/alertas.json`, { cache: 'no-store' }).then(r => r.json()).catch(() => [])
  
  return { avisos, ajuda, servicos, alertas }
}

export default async function Home() {
  const { avisos, ajuda, servicos, alertas } = await getData()

  const cards = [
    {
      title: 'Avisos',
      description: 'Comunicados e informações da comunidade',
      icon: Bell,
      href: '/avisos',
      count: avisos.length,
      color: 'bg-primary-500', // Alterado para usar a nova cor primary
      hoverColor: 'hover:bg-primary-600' // Alterado para usar a nova cor primary
    },
    {
      title: 'Ajuda',
      description: 'Pedidos de ajuda entre vizinhos',
      icon: HandHelping,
      href: '/ajuda',
      count: ajuda.length,
      color: 'bg-success-500', // Alterado para usar a nova cor success
      hoverColor: 'hover:bg-success-600' // Alterado para usar a nova cor success
    },
    {
      title: 'Serviços',
      description: 'Profissionais do bairro',
      icon: Briefcase,
      href: '/servicos',
      count: servicos.length,
      color: 'bg-secondary-500', // Alterado para usar a nova cor secondary
      hoverColor: 'hover:bg-secondary-600' // Alterado para usar a nova cor secondary
    },
    {
      title: 'Alertas',
      description: 'Avisos importantes de segurança',
      icon: AlertTriangle,
      href: '/alertas',
      count: alertas.length,
      color: 'bg-danger-500', // Alterado para usar a nova cor danger
      hoverColor: 'hover:bg-danger-600' // Alterado para usar a nova cor danger
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Bem-vindo ao Conecta Bairro
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Conectando vizinhos e fortalecendo nossa comunidade
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="group"
          >
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border border-gray-100">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className={`inline-flex p-3 rounded-lg ${card.color} ${card.hoverColor} transition-colors mb-4`}>
                    <card.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {card.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {card.description}
                  </p>
                  <div className="flex items-center space-x-2">
                    <span className="text-3xl font-bold text-blue-600">
                      {card.count}
                    </span>
                    <span className="text-gray-500">
                      {card.count === 1 ? 'item' : 'itens'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-12 text-center">
        <Link
          href="/mapa"
          className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-lg font-semibold" // Alterado para usar a nova cor primary
        >
          Ver Mapa da Comunidade
        </Link>
      </div>
    </div>
  )
}