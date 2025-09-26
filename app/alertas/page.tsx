import Link from 'next/link'
import { Alerta } from '@/types'
import { Plus, MapPin, Calendar } from 'lucide-react'
import { getLocalData } from '@/lib/data'

async function getAlertas() {
  return getLocalData<Alerta[]>('alertas.json');
}

const nivelColors: Record<string, string> = {
  info: 'bg-primary-100 text-primary-800', // Alterado para usar a nova cor primary
  atencao: 'bg-warning-100 text-warning-800', // Alterado para usar a nova cor warning
  alerta: 'bg-orange-100 text-orange-800',
  urgente: 'bg-danger-100 text-danger-800', // Alterado para usar a nova cor danger
}

const tipoLabels: Record<string, string> = {
  seguranca: 'Segurança',
  transito: 'Trânsito',
  utilidade_publica: 'Utilidade Pública',
  meio_ambiente: 'Meio Ambiente',
}

export default async function AlertasPage() {
  const alertas: Alerta[] = await getAlertas()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Alertas da Comunidade</h1>
          <p className="text-gray-600">Mantenha-se informado sobre o bairro</p>
        </div>
        <Link
          href="/alertas/reportar"
          className="inline-flex items-center px-4 py-2 bg-danger-600 text-white rounded-lg hover:bg-danger-700 transition-colors" // Alterado para usar a nova cor danger
        >
          <Plus className="w-5 h-5 mr-2" />
          Reportar Alerta
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {alertas.map((alerta) => (
          <Link key={alerta.id} href={`/alertas/${alerta.id}`}>
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100 h-full">
              <div className="flex justify-between items-start mb-3">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${nivelColors[alerta.nivel]}`}>
                  {alerta.nivel.charAt(0).toUpperCase() + alerta.nivel.slice(1)}
                </span>
                <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                  {tipoLabels[alerta.tipo]}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                {alerta.titulo}
              </h3>

              <p className="text-gray-600 mb-4 line-clamp-3">
                {alerta.descricao}
              </p>

              <div className="space-y-2 text-sm text-gray-500 mt-auto pt-4 border-t border-gray-100">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="line-clamp-1">{alerta.localizacao.descricao}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{new Date(alerta.data).toLocaleDateString('pt-BR')}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {alertas.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Nenhum alerta no momento</p>
        </div>
      )}
    </div>
  )
}