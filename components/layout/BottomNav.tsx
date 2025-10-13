'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Store, Briefcase, MessageSquare, Heart, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Início', icon: Home },
  { href: '/comercio', label: 'Comércio', icon: Store },
  { href: '/servicos', label: 'Serviços', icon: Briefcase },
  { href: '/mural', label: 'Mural', icon: MessageSquare },
  { href: '/solidaria', label: 'Solidária', icon: Heart },
  { href: '/seguranca', label: 'Segurança', icon: Shield },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 bg-white shadow-soft z-50">
      <div className="flex justify-around items-center h-full max-w-lg mx-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.href} href={item.href} className="flex flex-col items-center justify-center w-full h-full">
              <item.icon
                className={cn(
                  'w-6 h-6 mb-1 transition-colors',
                  isActive ? 'text-primary' : 'text-gray-400'
                )}
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span
                className={cn(
                  'text-xs font-medium transition-colors',
                  isActive ? 'text-primary' : 'text-gray-500'
                )}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
