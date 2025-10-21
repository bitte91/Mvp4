import Link from 'next/link';
import { Search, Store, Briefcase, MessageSquare, Heart, Shield, Map, ChevronRight, Building, Sparkles, Newspaper, Bell, HandHeart, Wrench, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { HeroIllustration } from '@/components/ui/HeroIllustration';

const shortcuts = [
  { href: '/avisos', label: 'Avisos', icon: Bell, color: 'bg-blue-100 text-blue-800' },
  { href: '/ajuda', label: 'Ajuda', icon: HandHeart, color: 'bg-green-100 text-green-800' },
  { href: '/servicos', label: 'Serviços', icon: Wrench, color: 'bg-yellow-100 text-yellow-800' },
  { href: '/alertas', label: 'Alertas', icon: AlertTriangle, color: 'bg-orange-100 text-orange-800' },
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
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 text-center py-12 px-5 mb-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:text-left">
            <h1 className="text-4xl font-display font-bold text-neutral-900 mb-4">Conectando vizinhos, <br /> fortalecendo a comunidade.</h1>
            <p className="text-lg text-neutral-600 mb-8">Sua plataforma completa para ficar por dentro de tudo que acontece no seu bairro.</p>
            <div className="flex justify-center md:justify-start space-x-4">
              <Link href="/explorar" className="bg-primary text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-primary/90 transition-colors" aria-label="Explorar a comunidade">
                Explorar Comunidade
              </Link>
              <Link href="/sobre" className="bg-white text-primary font-bold py-3 px-6 rounded-lg shadow-md hover:bg-neutral-200 transition-colors" aria-label="Saiba mais sobre o projeto">
                Saiba Mais
              </Link>
            </div>
          </div>
          <div className="mt-8 md:mt-0">
            <HeroIllustration />
          </div>
        </div>
      </section>

      <main id="main-content" className="px-5">
        {/* Atalhos Rápidos */}
        <section className="mb-10">
          <h2 className="text-xl font-display font-bold text-neutral-800 mb-4">Acesso Rápido</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {shortcuts.map((shortcut) => (
              <Link key={shortcut.href} href={shortcut.href} className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 group" aria-label={`Acessar ${shortcut.label}`}>
                <div className={`w-12 h-12 flex items-center justify-center ${shortcut.color} rounded-lg mr-4`}>
                  <shortcut.icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-neutral-800">{shortcut.label}</h3>
                  <Badge variant="numeral">comunidade • 3 itens</Badge>
                </div>
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
