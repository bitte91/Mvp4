'use client';

import 'leaflet/dist/leaflet.css';
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { Alerta } from '@/types';
import Link from 'next/link';

// Importar os ícones do Leaflet para corrigir o problema de caminho
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Configurar o L.Icon.Default para usar os ícones importados
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
});

// Definir uma interface para as props do mapa
interface MapProps {
  alertas: Alerta[];
}

const Map: React.FC<MapProps> = ({ alertas }) => {
  return (
    <MapContainer center={[-22.9040, -43.2100]} zoom={15} scrollWheelZoom={false} className="h-[600px] w-full rounded-lg shadow-lg">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
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
  );
};

export default Map;
