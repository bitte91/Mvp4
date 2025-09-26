'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function ReportarAlerta() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    titulo: '',
    tipo: 'seguranca' as 'seguranca' | 'transito' | 'utilidade_publica' | 'meio_ambiente',
    descricao: '',
    localizacao: '',
    nivel: 'atencao' as 'info' | 'atencao' | 'alerta' | 'urgente',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.titulo || !formData.descricao || !formData.localizacao) {
      alert('Por favor, preencha todos os campos obrigatórios')
      return
    }

    alert('Dados enviados! Em breve será processado')
    router.push('/alertas')
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <Link
        href="/alertas"
        className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Voltar para alertas
      </Link>

      <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Reportar Alerta</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="titulo" className="block text-sm font-semibold text-gray-700 mb-2">
              Título do Alerta *
            </label>
            <input
              type="text"
              id="titulo"
              value={formData.titulo}
              onChange={(e) => setFormData({ ...formData, titulo: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Ex: Buraco grande na pista"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="tipo" className="block text-sm font-semibold text-gray-700 mb-2">
                Tipo *
              </label>
              <select
                id="tipo"
                value={formData.tipo}
                onChange={(e) => setFormData({ ...formData, tipo: e.target.value as any })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="seguranca">Segurança</option>
                <option value="transito">Trânsito</option>
                <option value="utilidade_publica">Utilidade Pública</option>
                <option value="meio_ambiente">Meio Ambiente</option>
              </select>
            </div>

            <div>
              <label htmlFor="nivel" className="block text-sm font-semibold text-gray-700 mb-2">
                Nível *
              </label>
              <select
                id="nivel"
                value={formData.nivel}
                onChange={(e) => setFormData({ ...formData, nivel: e.target.value as any })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="info">Informação</option>
                <option value="atencao">Atenção</option>
                <option value="alerta">Alerta</option>
                <option value="urgente">Urgente</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="localizacao" className="block text-sm font-semibold text-gray-700 mb-2">
              Localização *
            </label>
            <input
              type="text"
              id="localizacao"
              value={formData.localizacao}
              onChange={(e) => setFormData({ ...formData, localizacao: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Ex: Rua 7, próximo ao nº 250"
              required
            />
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
              placeholder="Descreva o alerta com detalhes..."
              required
            />
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition-colors font-semibold"
            >
              Reportar Alerta
            </button>
            <Link
              href="/alertas"
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