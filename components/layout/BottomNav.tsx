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
  { href: '/solidaria', label: 'Ajudar', icon: Heart },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-lg h-20 bg-primary/90 backdrop-blur-sm rounded-2xl shadow-lg z-50">
      <div className="flex justify-around items-center h-full">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center justify-center w-full h-full min-w-[44px] min-h-[44px] relative"
            >
              <div className={cn(
                "absolute top-0 w-10 h-1 bg-transparent rounded-b-full",
                isActive && "bg-accent"
              )} />
              <item.icon
                className={cn(
                  'w-7 h-7 mb-1 transition-all duration-300',
                  isActive ? 'text-accent' : 'text-primary-foreground/70'
                )}
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span
                className={cn(
                  'text-xs font-bold transition-all duration-300',
                  isActive ? 'text-white' : 'text-primary-foreground/70'
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
