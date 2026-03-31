'use client'

import { AnimeDiscoveryCard } from './anime-discovery-card'
import type { Anime } from '@/lib/anime-data'

interface DiscoverySectionProps {
  discoveries: Anime[]
  onSelectAnime: (anime: Anime) => void
}

export function DiscoverySection({ discoveries, onSelectAnime }: DiscoverySectionProps) {
  return (
    <section className="py-8">
      {/* Section header */}
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-xl font-semibold text-foreground">More Discoveries</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
      </div>
      
      {/* Horizontal scrolling cards */}
      <div className="relative">
        {/* Gradient fade on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-border hover:scrollbar-thumb-muted-foreground/30 px-2">
          {discoveries.map((anime) => (
            <AnimeDiscoveryCard
              key={anime.id}
              anime={anime}
              onClick={() => onSelectAnime(anime)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
