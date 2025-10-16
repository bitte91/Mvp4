export default function ServicosPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-display font-bold text-primary mb-4">Serviços no Bairro</h1>
      {/* Placeholder para a barra de busca e filtros */}
      <div className="h-12 bg-white rounded-lg shadow-soft mb-4 flex items-center justify-center">
        <p className="text-gray-400 text-sm">Busca e Filtros...</p>
      </div>
      {/* Placeholder para a lista de cards */}
      <div className="space-y-4">
        <div className="h-32 bg-white rounded-lg shadow-soft p-4 flex items-center justify-center">
          <p className="text-gray-400 text-sm">Card de Serviço...</p>
        </div>
      </div>
    </div>
  );
}
