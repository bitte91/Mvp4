'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Alerta } from '@/types';

interface MapPageClientProps {
  alertas: Alerta[];
}

const MapPageClient: React.FC<MapPageClientProps> = ({ alertas }) => {
  const Map = dynamic(
    () => import('@/components/map/Map'),
    {
      ssr: false,
      loading: () => <div className="h-[600px] w-full bg-neutral-200 flex items-center justify-center rounded-lg"><p className="text-center text-gray-500">Carregando mapa...</p></div>
    }
  );

  return (
    <>
      <div className="w-full h-[600px] bg-neutral-200 rounded-xl shadow-lg overflow-hidden">
        <Map alertas={alertas} />
      </div>
      {alertas.length === 0 && (
        <div className="mt-6 text-center">
          <p className="text-gray-500">Nenhum alerta ativo no mapa no momento</p>
        </div>
      )}
    </>
  );
}

export default MapPageClient;
