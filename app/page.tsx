import Link from 'next/link';
import { Search, Store, Briefcase, MessageSquare, Heart, Shield, Map, ChevronRight, Building, Sparkles, Newspaper } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

const shortcuts = [
  { href: '/comercio', label: 'Comércio', icon: Store, color: 'bg-secondary/20 text-secondary-dark' },
  { href: '/servicos', label: 'Serviços', icon: Briefcase, color: 'bg-accent/20 text-accent-dark' },
  { href: '/mural', label: 'Mural', icon: MessageSquare, color: 'bg-primary/10 text-primary-dark' },
  { href: '/solidaria', label: 'Ajudar', icon: Heart, color: 'bg-danger/10 text-danger' },
  { href: '/mapa', label: 'Mapa', icon: Map, color: 'bg-neutral-200 text-neutral-800' },
];

const highlights = [
  { title: 'Novo Café na Praça', description: 'Venha conhecer o novo point do bairro!', icon: Sparkles, category: 'Comércio' },
  { title: 'Vagas de Emprego', description: 'Oportunidades na padaria da esquina.', icon: Briefcase, category: 'Serviços' },
  { title: 'Festa Junina', description: 'Participe da nossa tradicional festa.', icon: Newspaper, category: 'Mural' }
]

export default function Home() {
  return (
    <div className="pb-24 bg-neutral-100">
      {/* Header de boas-vindas */}
      <header className="bg-primary text-white p-6 rounded-b-3xl shadow-lg mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-display font-bold">Olá, Vizinho!</h1>
            <p className="text-primary-foreground/80">Bem-vindo(a) ao Conecta Bairro.</p>
          </div>
          <div className="w-14 h-14 bg-primary-light rounded-full border-2 border-white"></div>
        </div>

        {/* Barra de Busca */}
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar no bairro..."
            className="w-full h-14 pl-14 pr-4 rounded-xl border-none bg-primary-light text-white placeholder-primary-foreground/70 focus:ring-2 focus:ring-accent focus:outline-none"
          />
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-primary-foreground/70" />
        </div>
      </header>

      <main className="px-5">
        {/* Atalhos Rápidos */}
        <section className="mb-10">
          <h2 className="text-xl font-display font-bold text-neutral-800 mb-4">Acesso Rápido</h2>
          <div className="grid grid-cols-5 gap-3 text-center">
            {shortcuts.map((shortcut) => (
              <Link key={shortcut.href} href={shortcut.href} className="flex flex-col items-center justify-center p-2 group">
                <div className={`w-16 h-16 mb-2 flex items-center justify-center ${shortcut.color} rounded-2xl transform transition-transform duration-300 group-hover:scale-110`}>
                  <shortcut.icon className="w-8 h-8" />
                </div>
                <span className="text-xs font-semibold text-neutral-700">{shortcut.label}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Destaques do Bairro */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-display font-bold text-neutral-800">Destaques</h2>
            <Link href="/destaques" className="flex items-center text-sm font-bold text-primary">
              Ver todos <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="flex space-x-4 overflow-x-auto pb-4 -mx-5 px-5">
            {highlights.map((item, index) => (
              <div key={index} className="min-w-[280px] flex-shrink-0">
                <Card className="overflow-hidden">
                  <CardHeader className="p-0">
                    <div className="h-32 bg-secondary flex items-center justify-center">
                      <item.icon className="w-12 h-12 text-white" />
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <p className="text-xs font-bold text-primary mb-1">{item.category}</p>
                    <h3 className="font-bold font-display text-lg text-neutral-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-neutral-600">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
