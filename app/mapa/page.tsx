'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { Alerta } from '@/types'
import Link from 'next/link'

// Importar Leaflet dinamicamente para evitar problemas de SSR
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
)
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
)
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
)
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
)

export default function MapaPage() {
  const [alertas, setAlertas] = useState<Alerta[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/data/alertas.json')
      .then((res) => res.json())
      .then((data) => {
        setAlertas(data.filter((a: Alerta) => a.status === 'ativo'))
        setLoading(false)
      })
      .catch((err) => {
        console.error('Erro ao carregar alertas:', err)
        setLoading(false)
      })

    // Importar CSS do Leaflet
    import('leaflet/dist/leaflet.css')
  }, [])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Mapa da Comunidade</h1>
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <p className="text-gray-600">Carregando mapa...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Mapa da Comunidade</h1>
        <p className="text-gray-600">Alertas ativos no bairro</p>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
        <div style={{ height: '600px', width: '100%' }}>
          <MapContainer
            center={[-22.9040, -43.2100]}
            zoom={15}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {alertas.map((alerta) => (
              <Marker
                key={alerta.id}
                position={[alerta.localizacao.lat, alerta.localizacao.lng]}
              >
                <Popup>
                  <div className="p-2">
                    <h3 className="font-bold text-lg mb-2">{alerta.titulo}</h3>
                    <p className="text-sm text-gray-600 mb-3">{alerta.localizacao.descricao}</p>
                    <Link
                      href={`/alertas/${alerta.id}`}
                      className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors"
                    >
                      Ver detalhes
                    </Link>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>

      {alertas.length === 0 && (
        <div className="mt-6 text-center">
          <p className="text-gray-500">Nenhum alerta ativo no mapa no momento</p>
        </div>
      )}
    </div>
  )
}