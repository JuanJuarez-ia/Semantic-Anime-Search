'use client'

import { Play } from 'lucide-react'
import type { Anime } from '@/lib/anime-data'

interface AnimeDiscoveryCardProps {
  anime: Anime
  onClick: () => void
}

export function AnimeDiscoveryCard({ anime, onClick }: AnimeDiscoveryCardProps) {
  return (
    <div
      onClick={onClick}
      className="group relative flex-shrink-0 w-[140px] cursor-pointer"
    >
      {/* Poster image */}
      <div className="relative aspect-[2/3] rounded-lg overflow-hidden bg-card">
        <img
          src={anime.coverUrl}
          alt={anime.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Hover overlay with play icon */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-accent/90 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
            <Play className="w-4 h-4 text-accent-foreground fill-accent-foreground ml-0.5" />
          </div>
        </div>

        {/* Border */}
        <div className="absolute inset-0 rounded-lg border border-border/20 group-hover:border-primary/40 transition-colors" />
      </div>

      {/* Title */}
      <h4 className="text-sm font-medium text-foreground mt-2 line-clamp-2 leading-tight group-hover:text-primary transition-colors">
        {anime.title}
      </h4>
      <p className="text-[10px] text-muted-foreground mt-0.5">{anime.year}</p>
    </div>
  )
}
