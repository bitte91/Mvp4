import { getLocalData } from '@/lib/data'
import { Alerta } from '@/types'
import MapClient from '@/components/map/MapClient'

async function getAlertas() {
  const allAlertas = await getLocalData<Alerta[]>('alertas.json');
  return allAlertas.filter((a: Alerta) => a.status === 'ativo');
}

export default async function MapaPage() {
  const alertas = await getAlertas()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Mapa da Comunidade</h1>
        <p className="text-gray-600">Alertas ativos no bairro</p>
      </div>
      <MapClient alertas={alertas} />
      {alertas.length === 0 && (
        <div className="mt-6 text-center">
          <p className="text-gray-500">Nenhum alerta ativo no mapa no momento</p>
        </div>
      )}
    </div>
  )
}