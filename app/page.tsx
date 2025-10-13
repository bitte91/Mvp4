import Link from 'next/link';
import { Search, Store, Briefcase, MessageSquare, Heart, Shield, Map } from 'lucide-react';

// Dados mockados para os atalhos
const shortcuts = [
  { href: '/comercio', label: 'Comércio', icon: Store },
  { href: '/servicos', label: 'Serviços', icon: Briefcase },
  { href: '/mural', label: 'Mural', icon: MessageSquare },
  { href: '/solidaria', label: 'Ajudar', icon: Heart },
  { href: '/seguranca', label: 'Segurança', icon: Shield },
  { href: '/mapa', label: 'Mapa', icon: Map, color: 'bg-accent' },
];

export default function Home() {
  return (
    <div className="p-4">
      {/* Header de boas-vindas */}
      <header className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-display font-bold text-primary">Olá, Vizinho!</h1>
          <p className="text-gray-500">O que você precisa hoje?</p>
        </div>
        {/* Placeholder para o Avatar do Usuário */}
        <div className="w-12 h-12 bg-secondary rounded-full"></div>
      </header>

      {/* Barra de Busca */}
      <div className="relative mb-8">
        <input
          type="text"
          placeholder="Buscar no bairro..."
          className="w-full h-12 pl-12 pr-4 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-primary focus:outline-none shadow-soft"
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
      </div>

      {/* Atalhos Rápidos */}
      <section className="mb-8">
        <div className="grid grid-cols-3 gap-4 text-center">
          {shortcuts.map((shortcut) => (
            <Link key={shortcut.href} href={shortcut.href} className="flex flex-col items-center p-3 bg-white rounded-lg shadow-soft hover:bg-secondary transition-colors hover:-translate-y-1 transform duration-200">
              <div className={`w-14 h-14 mb-2 flex items-center justify-center ${shortcut.color || 'bg-primary'} text-white rounded-full`}>
                <shortcut.icon className="w-7 h-7" />
              </div>
              <span className="text-sm font-semibold text-primary">{shortcut.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Feed Misto de Destaques */}
      <section>
        <h2 className="text-xl font-display font-bold text-primary mb-4">Destaques do Bairro</h2>
        <div className="space-y-4">
          {/* Placeholders para cards futuros */}
          <div className="h-28 bg-white rounded-lg shadow-soft p-4 flex items-center justify-center">
            <p className="text-gray-400 text-sm">Card de destaque (Mural)...</p>
          </div>
          <div className="h-28 bg-white rounded-lg shadow-soft p-4 flex items-center justify-center">
            <p className="text-gray-400 text-sm">Card de destaque (Comércio)...</p>
          </div>
        </div>
      </section>
    </div>
  );
}
