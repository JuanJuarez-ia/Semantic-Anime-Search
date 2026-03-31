'use client'

import { AnimeResultCard } from './anime-result-card'
import type { Anime } from '@/lib/anime-data'

interface ResultsSectionProps {
  results: Anime[]
  onSelectAnime: (anime: Anime) => void
}

export function ResultsSection({ results, onSelectAnime }: ResultsSectionProps) {
  return (
    <section className="py-8">
      {/* Section header */}
      <div className="flex items-center gap-3 mb-8">
        <h2 className="text-2xl font-semibold text-foreground">Results</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
      </div>
      
      {/* Grid of cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
        {results.map((anime) => (
          <AnimeResultCard
            key={anime.id}
            anime={anime}
            onClick={() => onSelectAnime(anime)}
          />
        ))}
      </div>
    </section>
  )
}
