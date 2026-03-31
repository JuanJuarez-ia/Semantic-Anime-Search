'use client'

import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface HeaderProps {
  searchQuery: string
  onSearchChange: (query: string) => void
  onSearchSubmit: () => void // Evento para buscar
}

export function Header({ searchQuery, onSearchChange, onSearchSubmit }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-center">
          <div className="w-full max-w-2xl">
            <div className="relative group">
              <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-foreground/0 via-foreground/50 to-foreground/0 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300" />

              <div className="relative flex items-center bg-card/60 backdrop-blur-sm rounded-xl border border-border/50 overflow-hidden">
                <div className="flex items-center justify-center w-12 h-12 text-muted-foreground">
                  <Search className="w-5 h-5" />
                </div>
                <Input
                  type="text"
                  placeholder="Ej: Un anime con vibra de verano"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && onSearchSubmit()} // Para poder buscar con enter
                  className="flex-1 border-0 bg-transparent h-12 text-foreground placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                <Button
                  onClick={onSearchSubmit} // Buscar al hacer click
                  className="mr-2 bg-[#BC002D] hover:bg-[#9e0024] text-primary-foreground font-medium px-6"
                >
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}