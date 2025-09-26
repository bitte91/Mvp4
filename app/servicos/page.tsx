import Link from 'next/link'
import { Servico } from '@/types'
import { Plus, Star, CheckCircle } from 'lucide-react'

async function getServicos() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/data/servicos.json`, { cache: 'no-store' })
  if (!res.ok) return []
  return res.json()
}

export default async function ServicosPage() {
  const servicos: Servico[] = await getServicos()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Serviços do Bairro</h1>
          <p className="text-gray-600">Profissionais da nossa comunidade</p>
        </div>
        <Link
          href="/servicos/cadastrar"
          className="inline-flex items-center px-4 py-2 bg-secondary-600 text-white rounded-lg hover:bg-secondary-700 transition-colors" // Alterado para usar a nova cor secondary
        >
          <Plus className="w-5 h-5 mr-2" />
          Cadastrar Serviço
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicos.map((servico) => (
          <Link key={servico.id} href={`/servicos/${servico.id}`}>
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100 h-full">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-gray-900 line-clamp-1">
                  {servico.nome}
                </h3>
                {servico.verificado && (
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                )}
              </div>
              
              <p className="text-purple-600 font-semibold mb-3">
                {servico.tipo_servico}
              </p>
              
              <p className="text-gray-600 mb-4 line-clamp-3">
                {servico.descricao}
              </p>
              
              <div className="flex items-center text-yellow-500 mt-auto pt-4 border-t border-gray-100">
                <Star className="w-5 h-5 fill-current" />
                <span className="ml-2 text-lg font-bold text-gray-900">{servico.avaliacao.toFixed(1)}</span>
                <span className="ml-1 text-sm text-gray-500">/ 5.0</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {servicos.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Nenhum serviço cadastrado ainda</p>
        </div>
      )}
    </div>
  )
}