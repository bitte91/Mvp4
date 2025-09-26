'use client'

import Link from 'next/link'
import { Menu, X, Home, Bell, HandHelping, Briefcase, AlertTriangle, Map } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/avisos', label: 'Avisos', icon: Bell },
    { href: '/ajuda', label: 'Ajuda', icon: HandHelping },
    { href: '/servicos', label: 'Serviços', icon: Briefcase },
    { href: '/alertas', label: 'Alertas', icon: AlertTriangle },
    { href: '/mapa', label: 'Mapa', icon: Map },
  ]

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center"> // Alterado para usar a nova cor primary
              <span className="text-white text-xl font-bold">CB</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Conecta Bairro</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center space-x-1 px-3 py-2 rounded-md text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors" // Alterado para usar a nova cor primary
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors" // Alterado para usar a nova cor primary
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}