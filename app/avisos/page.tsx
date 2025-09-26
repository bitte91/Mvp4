import Link from 'next/link'
import { Aviso } from '@/types'
import { Eye, Plus, Calendar } from 'lucide-react'
import { getLocalData } from '@/lib/data'

async function getAvisos() {
  return getLocalData<Aviso[]>('avisos.json');
}

const categoriaColors: Record<string, string> = {
  evento: 'bg-primary-100 text-primary-800', // Alterado para usar a nova cor primary
  informativo: 'bg-success-100 text-success-800', // Alterado para usar a nova cor success
  urgente: 'bg-danger-100 text-danger-800', // Alterado para usar a nova cor danger
  obra: 'bg-warning-100 text-warning-800', // Alterado para usar a nova cor warning
}

const categoriaLabels: Record<string, string> = {
  evento: 'Evento',
  informativo: 'Informativo',
  urgente: 'Urgente',
  obra: 'Obra',
}

export default async function AvisosPage() {
  const avisos: Aviso[] = await getAvisos()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Avisos da Comunidade</h1>
          <p className="text-gray-600">Fique por dentro das novidades do bairro</p>
        </div>
        <Link
          href="/avisos/novo"
          className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors" // Alterado para usar a nova cor primary
        >
          <Plus className="w-5 h-5 mr-2" />
          Novo Aviso
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {avisos.map((aviso) => (
          <Link key={aviso.id} href={`/avisos/${aviso.id}`}>
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100 h-full">
              <div className="flex justify-between items-start mb-3">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoriaColors[aviso.categoria]}`}>
                  {categoriaLabels[aviso.categoria]}
                </span>
                <div className="flex items-center text-gray-500 text-sm">
                  <Eye className="w-4 h-4 mr-1" />
                  {aviso.visualizacoes}
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                {aviso.titulo}
              </h3>

              <p className="text-gray-600 mb-4 line-clamp-3">
                {aviso.descricao}
              </p>

              <div className="flex justify-between items-center text-sm text-gray-500 mt-auto">
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(aviso.data).toLocaleDateString('pt-BR')}
                </span>
                <span>Por {aviso.autor}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {avisos.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Nenhum aviso no momento</p>
        </div>
      )}
    </div>
  )
}