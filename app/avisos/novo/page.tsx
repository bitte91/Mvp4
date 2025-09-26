'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function NovoAviso() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    titulo: '',
    descricao: '',
    autor: '',
    categoria: 'informativo' as 'evento' | 'informativo' | 'urgente' | 'obra',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validação básica
    if (!formData.titulo || !formData.descricao || !formData.autor) {
      alert('Por favor, preencha todos os campos obrigatórios')
      return
    }

    // Simular envio
    alert('Dados enviados! Em breve será processado')
    router.push('/avisos')
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <Link
        href="/avisos"
        className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Voltar para avisos
      </Link>

      <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Novo Aviso</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="titulo" className="block text-sm font-semibold text-gray-700 mb-2">
              Título *
            </label>
            <input
              type="text"
              id="titulo"
              value={formData.titulo}
              onChange={(e) => setFormData({ ...formData, titulo: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Ex: Reunião da Associação de Moradores"
              required
            />
          </div>

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
              <option value="informativo">Informativo</option>
              <option value="evento">Evento</option>
              <option value="urgente">Urgente</option>
              <option value="obra">Obra</option>
            </select>
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
              placeholder="Descreva os detalhes do aviso..."
              required
            />
          </div>

          <div>
            <label htmlFor="autor" className="block text-sm font-semibold text-gray-700 mb-2">
              Seu Nome *
            </label>
            <input
              type="text"
              id="autor"
              value={formData.autor}
              onChange={(e) => setFormData({ ...formData, autor: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Ex: João Silva"
              required
            />
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Publicar Aviso
            </button>
            <Link
              href="/avisos"
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