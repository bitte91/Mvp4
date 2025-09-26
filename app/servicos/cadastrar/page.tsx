'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function CadastrarServico() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    nome: '',
    tipo_servico: '',
    descricao: '',
    telefone: '',
    whatsapp: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.nome || !formData.tipo_servico || !formData.descricao || !formData.telefone) {
      alert('Por favor, preencha todos os campos obrigatórios')
      return
    }

    alert('Dados enviados! Em breve será processado')
    router.push('/servicos')
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <Link
        href="/servicos"
        className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Voltar para serviços
      </Link>

      <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Cadastrar Serviço</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="nome" className="block text-sm font-semibold text-gray-700 mb-2">
              Nome / Título *
            </label>
            <input
              type="text"
              id="nome"
              value={formData.nome}
              onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Ex: Carlos Silva - Eletricista"
              required
            />
          </div>

          <div>
            <label htmlFor="tipo_servico" className="block text-sm font-semibold text-gray-700 mb-2">
              Tipo de Serviço *
            </label>
            <input
              type="text"
              id="tipo_servico"
              value={formData.tipo_servico}
              onChange={(e) => setFormData({ ...formData, tipo_servico: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Ex: Elétrica Residencial"
              required
            />
          </div>

          <div>
            <label htmlFor="descricao" className="block text-sm font-semibold text-gray-700 mb-2">
              Descrição do Serviço *
            </label>
            <textarea
              id="descricao"
              value={formData.descricao}
              onChange={(e) => setFormData({ ...formData, descricao: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={6}
              placeholder="Descreva os serviços que você oferece..."
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="telefone" className="block text-sm font-semibold text-gray-700 mb-2">
                Telefone *
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

            <div>
              <label htmlFor="whatsapp" className="block text-sm font-semibold text-gray-700 mb-2">
                WhatsApp (opcional)
              </label>
              <input
                type="tel"
                id="whatsapp"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="5519999999999"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors font-semibold"
            >
              Cadastrar Serviço
            </button>
            <Link
              href="/servicos"
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