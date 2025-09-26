'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function NovaAjuda() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    titulo: '',
    descricao: '',
    solicitante: '',
    telefone: '',
    categoria: 'diversos' as 'reparo' | 'mudanca' | 'idosos' | 'cuidados' | 'diversos',
    prioridade: 'media' as 'baixa' | 'media' | 'alta' | 'urgente',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.titulo || !formData.descricao || !formData.solicitante || !formData.telefone) {
      alert('Por favor, preencha todos os campos obrigatórios')
      return
    }

    alert('Dados enviados! Em breve será processado')
    router.push('/ajuda')
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <Link
        href="/ajuda"
        className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Voltar para pedidos de ajuda
      </Link>

      <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Pedir Ajuda</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="titulo" className="block text-sm font-semibold text-gray-700 mb-2">
              Título do Pedido *
            </label>
            <input
              type="text"
              id="titulo"
              value={formData.titulo}
              onChange={(e) => setFormData({ ...formData, titulo: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Ex: Preciso de ajuda para trocar lâmpada"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="categoria" className="block text-sm font-semibold text-gray-700 mb-2">
                Categoria *
              </label>
              <select
                id="categoria"
                value={formData.categoria}
                onChange={(e) => setFormData({ ...formData, categoria: e.target.value as any })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="diversos">Diversos</option>
                <option value="reparo">Reparo</option>
                <option value="mudanca">Mudança</option>
                <option value="idosos">Idosos</option>
                <option value="cuidados">Cuidados</option>
              </select>
            </div>

            <div>
              <label htmlFor="prioridade" className="block text-sm font-semibold text-gray-700 mb-2">
                Prioridade *
              </label>
              <select
                id="prioridade"
                value={formData.prioridade}
                onChange={(e) => setFormData({ ...formData, prioridade: e.target.value as any })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="baixa">Baixa</option>
                <option value="media">Média</option>
                <option value="alta">Alta</option>
                <option value="urgente">Urgente</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="descricao" className="block text-sm font-semibold text-gray-700 mb-2">
              Descrição *
            </label>
            <textarea
              id="descricao"
              value={formData.descricao}
              onChange={(e) => setFormData({ ...formData, descricao: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={6}
              placeholder="Descreva o que você precisa..."
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="solicitante" className="block text-sm font-semibold text-gray-700 mb-2">
                Seu Nome *
              </label>
              <input
                type="text"
                id="solicitante"
                value={formData.solicitante}
                onChange={(e) => setFormData({ ...formData, solicitante: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Ex: João Silva - Ap 203"
                required
              />
            </div>

            <div>
              <label htmlFor="telefone" className="block text-sm font-semibold text-gray-700 mb-2">
                Telefone/WhatsApp *
              </label>
              <input
                type="tel"
                id="telefone"
                value={formData.telefone}
                onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="(19) 99999-9999"
                required
              />
            </div>
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-semibold"
            >
              Publicar Pedido
            </button>
            <Link
              href="/ajuda"
              className="flex-1 bg-gray-200 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors font-semibold text-center"
            >
              Cancelar
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}