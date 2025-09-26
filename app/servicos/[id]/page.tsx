import Link from 'next/link'
import { Servico } from '@/types'
import { ArrowLeft, Star, CheckCircle, Phone, MessageCircle } from 'lucide-react'
import { notFound } from 'next/navigation'
import { getLocalData } from '@/lib/data'

async function getServico(id: string) {
  const servicos = await getLocalData<Servico[]>('servicos.json');
  return servicos.find(s => s.id === id)
}

export default async function ServicoDetalhe({ params }: { params: { id: string } }) {
  const servico = await getServico(params.id)

  if (!servico) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link
        href="/servicos"
        className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Voltar para serviços
      </Link>

      <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {servico.nome}
            </h1>
            <p className="text-xl text-purple-600 font-semibold">
              {servico.tipo_servico}
            </p>
          </div>
          {servico.verificado && (
            <div className="flex items-center bg-blue-50 px-4 py-2 rounded-lg">
              <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-sm font-semibold text-blue-600">Verificado</span>
            </div>
          )}
        </div>

        <div className="flex items-center mb-6">
          <Star className="w-6 h-6 text-yellow-500 fill-current" />
          <span className="ml-2 text-2xl font-bold text-gray-900">{servico.avaliacao.toFixed(1)}</span>
          <span className="ml-1 text-gray-500">/ 5.0</span>
        </div>

        <div className="prose max-w-none mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Sobre o Serviço</h3>
          <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-wrap">
            {servico.descricao}
          </p>
        </div>

        <div className="border-t border-gray-200 pt-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Informações de Contato</h3>
          <div className="flex items-center text-gray-600">
            <Phone className="w-5 h-5 mr-3 text-gray-400" />
            <div>
              <p className="text-sm text-gray-500">Telefone</p>
              <p className="font-semibold text-lg">{servico.telefone}</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <a
            href={`https://wa.me/${servico.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-semibold text-center flex items-center justify-center"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            WhatsApp
          </a>
          <a
            href={`tel:${servico.telefone}`}
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