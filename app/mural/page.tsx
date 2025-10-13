import { Plus } from 'lucide-react';

export default function MuralPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-display font-bold text-primary mb-4">Mural de Avisos</h1>
      {/* Placeholder para a lista de posts */}
      <div className="space-y-4">
        <div className="h-40 bg-white rounded-lg shadow-soft p-4 flex items-center justify-center">
          <p className="text-gray-400 text-sm">Post do Mural...</p>
        </div>
      </div>
      {/* Botão de Ação Flutuante (FAB) */}
      <button className="fixed bottom-20 right-4 w-14 h-14 bg-accent text-primary rounded-full shadow-lg flex items-center justify-center">
        <Plus className="w-8 h-8" />
      </button>
    </div>
  );
}
