import React from 'react';
import { getLocalData } from '@/lib/data';
import { Alerta } from '@/types';
import MapPageClient from '@/components/map/MapPageClient';

async function getAlertas(): Promise<Alerta[]> {
  const allAlertas = await getLocalData<Alerta[]>('alertas.json');
  return allAlertas.filter((a) => a.status === 'ativo');
}

export default async function MapaPage() {
  const alertas = await getAlertas();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 text-center">
        <h1 className="text-4xl font-display font-bold text-primary mb-2">Mapa Interativo</h1>
        <p className="text-neutral-600 max-w-2xl mx-auto">
          Explore os pontos de interesse, comércios, serviços e alertas importantes em nossa comunidade.
        </p>
      </div>
      <MapPageClient alertas={alertas} />
    </div>
  );
}
