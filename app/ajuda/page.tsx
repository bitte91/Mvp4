import Link from 'next/link'
import { Ajuda } from '@/types'
import { Plus, Phone } from 'lucide-react'
import { getLocalData } from '@/lib/data'

async function getAjudas() {
  return getLocalData<Ajuda[]>('ajuda.json');
}

const prioridadeColors: Record<string, string> = {
  baixa: 'bg-gray-100 text-gray-800',
  media: 'bg-warning-100 text-warning-800', // Alterado para usar a nova cor warning
  alta: 'bg-orange-100 text-orange-800',
  urgente: 'bg-danger-100 text-danger-800', // Alterado para usar a nova cor danger
}

const statusColors: Record<string, string> = {
  aberto: 'bg-primary-100 text-primary-800', // Alterado para usar a nova cor primary
  em_andamento: 'bg-purple-100 text-purple-800',
  concluido: 'bg-success-100 text-success-800', // Alterado para usar a nova cor success
  cancelado: 'bg-gray-100 text-gray-800',
}

const statusLabels: Record<string, string> = {
  aberto: 'Aberto',
  em_andamento: 'Em Andamento',
  concluido: 'Concluído',
  cancelado: 'Cancelado',
}

export default async function AjudaPage() {
  const ajudas: Ajuda[] = await getAjudas()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Pedidos de Ajuda</h1>
          <p className="text-gray-600">Ajude seus vizinhos ou peça ajuda</p>
        </div>
        <Link
          href="/ajuda/nova"
          className="inline-flex items-center px-4 py-2 bg-success-600 text-white rounded-lg hover:bg-success-700 transition-colors" // Alterado para usar a nova cor success
        >
          <Plus className="w-5 h-5 mr-2" />
          Pedir Ajuda
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ajudas.map((ajuda) => (
          <Link key={ajuda.id} href={`/ajuda/${ajuda.id}`}>
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100 h-full">
              <div className="flex justify-between items-start mb-3">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${prioridadeColors[ajuda.prioridade]}`}>
                  {ajuda.prioridade.charAt(0).toUpperCase() + ajuda.prioridade.slice(1)}
                </span>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[ajuda.status]}`}>
                  {statusLabels[ajuda.status]}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                {ajuda.titulo}
              </h3>

              <p className="text-gray-600 mb-4 line-clamp-3">
                {ajuda.descricao}
              </p>

              <div className="flex items-center justify-between text-sm text-gray-500 mt-auto pt-4 border-t border-gray-100">
                <span className="font-semibold">{ajuda.solicitante}</span>
                <span className="flex items-center text-green-600">
                  <Phone className="w-4 h-4 mr-1" />
                  Contato
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {ajudas.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Nenhum pedido de ajuda no momento</p>
        </div>
      )}
    </div>
  )
}