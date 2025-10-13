import { Plus } from 'lucide-react';

export default function SolidariaPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-display font-bold text-primary mb-4">Ação Solidária</h1>
      {/* Abas internas (placeholder) */}
      <div className="flex space-x-4 border-b-2 border-gray-200 mb-4">
        <button className="py-2 border-b-2 border-primary text-primary font-semibold">Ajuda</button>
        <button className="py-2 text-gray-500">Voluntários</button>
        <button className="py-2 text-gray-500">Achados</button>
      </div>
      {/* Placeholder para a lista de cards */}
      <div className="space-y-4">
        <div className="h-48 bg-white rounded-lg shadow-soft p-4 flex items-center justify-center">
          <p className="text-gray-400 text-sm">Card de Pedido de Ajuda...</p>
        </div>
      </div>
      {/* Botão de Ação Flutuante (FAB) */}
      <button className="fixed bottom-20 right-4 w-14 h-14 bg-accent text-primary rounded-full shadow-lg flex items-center justify-center">
        <Plus className="w-8 h-8" />
      </button>
    </div>
  );
}
