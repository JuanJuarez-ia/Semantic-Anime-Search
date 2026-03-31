'use client'

import { Play } from 'lucide-react'
import type { Anime } from '@/lib/anime-data'

interface AnimeResultCardProps {
  anime: Anime
  onClick: () => void
}

export function AnimeResultCard({ anime, onClick }: AnimeResultCardProps) {
  return (
    <div
      onClick={onClick}
      className="group relative aspect-[2/3] rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-primary/20"
    >
      {/* Full poster image */}
      <img
        src={anime.coverUrl}
        alt={anime.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      
      {/* Gradient overlay - stronger at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
      
      {/* Border highlight on hover */}
      <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-white transition-colors duration-300" />
    </div>
  )
}
