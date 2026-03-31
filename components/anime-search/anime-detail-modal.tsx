'use client'

import { Star, Calendar, Tv, Building2 } from 'lucide-react'
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ShurikenPlayIcon } from '@/components/icons/shuriken-play'
import { cn } from '@/lib/utils'
import type { Anime } from '@/lib/anime-data'

interface AnimeDetailModalProps {
  anime: Anime | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AnimeDetailModal({ anime, open, onOpenChange }: AnimeDetailModalProps) {
  if (!anime) return null

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating / 2)
    const stars = []
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          className={cn(
            'w-4 h-4',
            i < fullStars ? 'fill-primary text-primary' : 'text-muted-foreground/30'
          )}
        />
      )
    }
    return stars
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-[none] xl:max-w-[1600px] w-[98vw] h-[95vh] p-0 overflow-hidden flex flex-row border-border/50 bg-card/95 backdrop-blur-xl"
        showCloseButton={true}
      >
        {/* Left Column - Poster */}
        <div className="w-[45%] flex-shrink-0 relative">
          {/* Fondo borroso (blur) que llenará cualquier espacio sobrante */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10 blur-2xl scale-150"
            style={{ backgroundImage: `url(${anime.coverUrl})` }}
          />
          <img
            src={anime.coverUrl}
            alt={anime.title}
            // 🛠️ SOLUCIÓN AL PÓSTER: 
            // object-contain: Mantiene la imagen completa sin recortes.
            // p-6: Da un pequeño borde interno de separación.
            // drop-shadow-2xl: Hace que la imagen resalte sobre su propio fondo borroso.
            className="w-full h-full object-contain p-6 relative drop-shadow-2xl"
          />
        </div>

        {/* Right Column - Details */}
        <div className="flex flex-col w-[55%] p-8">
          <div className="overflow-y-auto flex-grow pr-6 no-scrollbar">

            {/* Title */}
            <DialogTitle asChild>
              {/* 🛠️ SOLUCIÓN AL TÍTULO: 
                  Usamos text-7xl, font-extrabold y leading-none para forzar 
                  un aumento drástico en el tamaño y presencia del texto. 
              */}
              <h2
                className="font-display font-extrabold text-foreground tracking-tighter leading-[1.1] text-balance mb-2"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
              >
                {anime.title}
              </h2>
            </DialogTitle>
            <DialogDescription className="text-base text-muted-foreground mt-4 font-medium">
              {anime.japaneseTitle}
            </DialogDescription>

            {/* Rating */}
            <div className="flex items-center gap-3 mt-8">
              {(() => {
                const ratingValue = typeof anime.rating === 'string' ? parseFloat(anime.rating) : anime.rating;
                if (isNaN(ratingValue)) {
                  return <span className="text-3xl font-bold text-muted-foreground">N/A</span>;
                }
                return (
                  <>
                    <span className="text-3xl font-bold text-primary">{ratingValue.toFixed(1)}</span>
                    <div className="flex items-center gap-1">
                      {renderStars(ratingValue)}
                    </div>
                  </>
                );
              })()}
            </div>

            {/* Metadata */}
            <div className="flex flex-wrap gap-4 mt-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>{anime.year}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Tv className="w-4 h-4" />
                <span>{anime.episodes} Episodes</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Building2 className="w-4 h-4" />
                <span>{anime.studio}</span>
              </div>
            </div>

            {/* Genres */}
            <div className="flex flex-wrap gap-2 mt-8">
              {anime.genres.map((genre) => (
                <Badge
                  key={genre}
                  variant="outline"
                  className="px-3 py-1 bg-secondary/50 border-border/50 text-foreground/80 text-xs font-semibold uppercase tracking-wider"
                >
                  {genre}
                </Badge>
              ))}
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground mt-8 leading-relaxed">
              {anime.description}
            </p>
          </div>

          {/* Play button area */}
          <div className="pt-6 mt-auto flex-shrink-0">
            <Button
              size="lg"
              className="w-full md:w-auto bg-accent hover:bg-accent/90 text-accent-foreground gap-3 text-base font-semibold px-8 py-6 shadow-lg shadow-accent/20"
            >
              <ShurikenPlayIcon size={20} />
              <span>Play Now</span>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}