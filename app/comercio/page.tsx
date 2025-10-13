import { SearchBar } from '@/components/ui/SearchBar';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge'; // Assuming a Badge component exists or will be created
import { Phone } from 'lucide-react';

// Mock data for local businesses
const businesses = [
  {
    name: 'Padaria Pão Quentinho',
    category: 'Alimentação',
    imageUrl: 'https://via.placeholder.com/150',
    whatsapp: '5511999999999',
  },
  {
    name: 'Salão da Maria',
    category: 'Beleza',
    imageUrl: 'https://via.placeholder.com/150',
    whatsapp: '5511988888888',
  },
  {
    name: 'Mercadinho do Zé',
    category: 'Mercado',
    imageUrl: 'https://via.placeholder.com/150',
    whatsapp: '5511977777777',
  },
];

export default function ComercioPage() {
  return (
    <div className="p-4">
      <header className="mb-6">
        <h1 className="text-2xl font-display font-bold text-primary">Comércio Local</h1>
        <p className="text-gray-500">Apoie os negócios do seu bairro.</p>
      </header>

      <div className="mb-6">
        <SearchBar placeholder="Buscar por nome ou categoria..." />
      </div>

      {/* TODO: Implementar filtros de categoria */}
      <div className="flex space-x-2 mb-6">
        <Button size="sm" variant="secondary">Todos</Button>
        <Button size="sm" variant="outline">Alimentação</Button>
        <Button size="sm" variant="outline">Beleza</Button>
      </div>

      <div className="space-y-4">
        {businesses.map((business) => (
          <Card key={business.name} className="overflow-hidden">
            <CardHeader className="p-0">
              <img src={business.imageUrl} alt={business.name} className="w-full h-32 object-cover" />
            </CardHeader>
            <CardContent className="pt-4">
              <CardTitle className="mb-1">{business.name}</CardTitle>
              {/* Using a simple div for badge for now */}
              <div className="inline-block bg-secondary text-secondary-foreground text-xs font-semibold px-2 py-1 rounded-full">
                {business.category}
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <a href={`https://wa.me/${business.whatsapp}`} target="_blank" rel="noopener noreferrer">
                  <Phone className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
