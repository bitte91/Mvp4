import Link from 'next/link'
import { Aviso } from '@/types'
import { ArrowLeft, Eye, Calendar, User } from 'lucide-react'
import { notFound } from 'next/navigation'

async function getAviso(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/data/avisos.json`, { cache: 'no-store' })
  if (!res.ok) return null
  const avisos: Aviso[] = await res.json()
  return avisos.find(a => a.id === id)
}

const categoriaColors: Record<string, string> = {
  evento: 'bg-blue-100 text-blue-800',
  informativo: 'bg-green-100 text-green-800',
  urgente: 'bg-red-100 text-red-800',
  obra: 'bg-yellow-100 text-yellow-800',
}

const categoriaLabels: Record<string, string> = {
  evento: 'Evento',
  informativo: 'Informativo',
  urgente: 'Urgente',
  obra: 'Obra',
}

export default async function AvisoDetalhe({ params }: { params: { id: string } }) {
  const aviso = await getAviso(params.id)

  if (!aviso) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link
        href="/avisos"
        className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Voltar para avisos
      </Link>

      <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <span className={`px-4 py-2 rounded-full text-sm font-semibold ${categoriaColors[aviso.categoria]}`}>
            {categoriaLabels[aviso.categoria]}
          </span>
          <div className="flex items-center text-gray-500">
            <Eye className="w-5 h-5 mr-2" />
            <span>{aviso.visualizacoes} visualizações</span>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          {aviso.titulo}
        </h1>

        <div className="prose max-w-none mb-8">
          <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-wrap">
            {aviso.descricao}
          </p>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center text-gray-600">
              <User className="w-5 h-5 mr-3 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Publicado por</p>
                <p className="font-semibold">{aviso.autor}</p>
              </div>
            </div>
            <div className="flex items-center text-gray-600">
              <Calendar className="w-5 h-5 mr-3 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Data</p>
                <p className="font-semibold">
                  {new Date(aviso.data).toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric'
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}