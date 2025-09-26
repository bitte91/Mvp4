import Link from 'next/link'
import { Alerta } from '@/types'
import { ArrowLeft, MapPin, Calendar, AlertTriangle } from 'lucide-react'
import { notFound } from 'next/navigation'

async function getAlerta(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/data/alertas.json`, { cache: 'no-store' })
  if (!res.ok) return null
  const alertas: Alerta[] = await res.json()
  return alertas.find(a => a.id === id)
}

const nivelColors: Record<string, string> = {
  info: 'bg-blue-100 text-blue-800 border-blue-200',
  atencao: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  alerta: 'bg-orange-100 text-orange-800 border-orange-200',
  urgente: 'bg-red-100 text-red-800 border-red-200',
}

const tipoLabels: Record<string, string> = {
  seguranca: 'Segurança',
  transito: 'Trânsito',
  utilidade_publica: 'Utilidade Pública',
  meio_ambiente: 'Meio Ambiente',
}

export default async function AlertaDetalhe({ params }: { params: { id: string } }) {
  const alerta = await getAlerta(params.id)

  if (!alerta) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link
        href="/alertas"
        className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Voltar para alertas
      </Link>

      <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
        <div className={`flex items-center justify-between p-4 rounded-lg border-2 mb-6 ${nivelColors[alerta.nivel]}`}>
          <div className="flex items-center">
            <AlertTriangle className="w-6 h-6 mr-3" />
            <span className="font-bold text-lg">
              Nível: {alerta.nivel.charAt(0).toUpperCase() + alerta.nivel.slice(1)}
            </span>
          </div>
          <span className="font-semibold">
            {tipoLabels[alerta.tipo]}
          </span>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          {alerta.titulo}
        </h1>

        <div className="prose max-w-none mb-8">
          <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-wrap">
            {alerta.descricao}
          </p>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Informações</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start text-gray-600">
              <MapPin className="w-5 h-5 mr-3 text-gray-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm text-gray-500">Localização</p>
                <p className="font-semibold">{alerta.localizacao.descricao}</p>
              </div>
            </div>
            <div className="flex items-center text-gray-600">
              <Calendar className="w-5 h-5 mr-3 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Data</p>
                <p className="font-semibold">
                  {new Date(alerta.data).toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric'
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <Link
            href={`/mapa?alerta=${alerta.id}`}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            <MapPin className="w-5 h-5 mr-2" />
            Ver no Mapa
          </Link>
        </div>
      </div>
    </div>
  )
}