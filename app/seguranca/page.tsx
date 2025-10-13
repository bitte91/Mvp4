import { Plus } from 'lucide-react';

export default function SegurancaPage() {
  return (
    <div className="h-full">
      <h1 className="absolute top-4 left-4 z-10 text-2xl font-display font-bold text-primary bg-white/80 backdrop-blur-sm px-3 py-1 rounded-lg">Segurança</h1>
      {/* Placeholder para o Mapa Interativo */}
      <div className="w-full h-[calc(100vh-4rem)] bg-gray-200 flex items-center justify-center">
        <p className="text-gray-500">Mapa Interativo (similar ao Google Maps)...</p>
      </div>
      {/* Botão de Ação Flutuante (FAB) */}
      <button className="fixed bottom-20 right-4 w-14 h-14 bg-accent text-primary rounded-full shadow-lg flex items-center justify-center">
        <Plus className="w-8 h-8" />
      </button>
    </div>
  );
}
