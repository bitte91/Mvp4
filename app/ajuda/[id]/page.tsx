import Link from 'next/link'
import { Ajuda } from '@/types'
import { ArrowLeft, Phone, MessageCircle } from 'lucide-react'
import { notFound } from 'next/navigation'

async function getAjuda(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/data/ajuda.json`, { cache: 'no-store' })
  if (!res.ok) return null
  const ajudas: Ajuda[] = await res.json()
  return ajudas.find(a => a.id === id)
}

const prioridadeColors: Record<string, string> = {
  baixa: 'bg-gray-100 text-gray-800',
  media: 'bg-yellow-100 text-yellow-800',
  alta: 'bg-orange-100 text-orange-800',
  urgente: 'bg-red-100 text-red-800',
}

const statusColors: Record<string, string> = {
  aberto: 'bg-blue-100 text-blue-800',
  em_andamento: 'bg-purple-100 text-purple-800',
  concluido: 'bg-green-100 text-green-800',
  cancelado: 'bg-gray-100 text-gray-800',
}

const statusLabels: Record<string, string> = {
  aberto: 'Aberto',
  em_andamento: 'Em Andamento',
  concluido: 'Concluído',
  cancelado: 'Cancelado',
}

export default async function AjudaDetalhe({ params }: { params: { id: string } }) {
  const ajuda = await getAjuda(params.id)

  if (!ajuda) {
    notFound()
  }

  const whatsappNumber = ajuda.telefone.replace(/\D/g, '')

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link
        href="/ajuda"
        className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Voltar para pedidos de ajuda
      </Link>

      <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-2">
            <span className={`px-4 py-2 rounded-full text-sm font-semibold ${prioridadeColors[ajuda.prioridade]}`}>
              Prioridade: {ajuda.prioridade.charAt(0).toUpperCase() + ajuda.prioridade.slice(1)}
            </span>
            <span className={`px-4 py-2 rounded-full text-sm font-semibold ${statusColors[ajuda.status]}`}>
              {statusLabels[ajuda.status]}
            </span>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          {ajuda.titulo}
        </h1>

        <div className="prose max-w-none mb-8">
          <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-wrap">
            {ajuda.descricao}
          </p>
        </div>

        <div className="border-t border-gray-200 pt-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Informações de Contato</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center text-gray-600">
              <Phone className="w-5 h-5 mr-3 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Solicitante</p>
                <p className="font-semibold">{ajuda.solicitante}</p>
              </div>
            </div>
            <div className="flex items-center text-gray-600">
              <MessageCircle className="w-5 h-5 mr-3 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Telefone</p>
                <p className="font-semibold">{ajuda.telefone}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          
            href={`https://wa.me/55${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-semibold text-center flex items-center justify-center"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Conversar no WhatsApp
          </a>
          
            href={`tel:${ajuda.telefone}`}
            className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-center flex items-center justify-center"
          >
            <Phone className="w-5 h-5 mr-2" />
            Ligar
          </a>
        </div>
      </div>
    </div>
  )
}