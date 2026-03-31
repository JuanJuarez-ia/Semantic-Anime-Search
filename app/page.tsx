
'use client'

import { useState } from 'react'
import { Header } from '@/components/anime-search/header'
import { ResultsSection } from '@/components/anime-search/results-section'
import { AnimeDetailModal } from '@/components/anime-search/anime-detail-modal'
import { buscarAnimeBackend, Anime } from '@/lib/anime-data'

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("")
  // Aquí se guardarán los resultados que devuelva Pinecone
  const [animes, setAnimes] = useState<Anime[]>([])

  // Controles para la ventana emergente (Modal)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedAnime, setSelectedAnime] = useState<Anime | null>(null)

  // 1. La función que se dispara al darle "Enter" o clic a la lupa
  const manejarBusqueda = async () => {
    if (!searchQuery) return;

    // Opcional: Podrías poner un estado de "Cargando..." aquí en el futuro
    const resultadosIA = await buscarAnimeBackend(searchQuery);
    setAnimes(resultadosIA);
  }

  // 2. La función que se dispara cuando el usuario le da clic a la portada de un anime
  const handleSelectAnime = (anime: Anime) => {
    setSelectedAnime(anime);
    setModalOpen(true);
  }

  return (
    <div className="min-h-screen bg-background relative">
      {/* Subtle Japanese pattern background (¡NO BORRAR, ESTÁ GENIAL!) */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Seigaiha wave pattern */}
        <svg
          className="absolute -right-32 top-1/4 w-96 h-96 text-primary/[0.02] rotate-45"
          viewBox="0 0 200 200"
        >
          <defs>
            <pattern id="seigaiha-bg" width="40" height="20" patternUnits="userSpaceOnUse">
              <path
                d="M0 20 Q10 0 20 20 Q30 0 40 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="200" height="200" fill="url(#seigaiha-bg)" />
        </svg>

        {/* Asanoha pattern */}
        <svg
          className="absolute -left-32 bottom-1/4 w-96 h-96 text-primary/[0.015] -rotate-12"
          viewBox="0 0 100 100"
        >
          <defs>
            <pattern id="asanoha-bg" width="20" height="20" patternUnits="userSpaceOnUse">
              <path
                d="M10 0 L10 10 L0 10 M10 10 L20 10 M10 10 L10 20 M10 10 L0 0 M10 10 L20 0 M10 10 L0 20 M10 10 L20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.3"
              />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#asanoha-bg)" />
        </svg>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
      </div>

      {/* Fixed Header: ¡Ahora tiene el evento onSearchSubmit! */}
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onSearchSubmit={manejarBusqueda}
      />

      {/* Main Content */}
      <main className="relative pt-28 pb-16 px-4 max-w-7xl mx-auto">
        {/* Results Section: Ahora usa la variable 'animes' real */}
        <ResultsSection
          results={animes}
          onSelectAnime={handleSelectAnime}
        />
      </main>

      {/* Detail Modal */}
      {selectedAnime && (
        <AnimeDetailModal
          anime={selectedAnime}
          open={modalOpen}
          onOpenChange={setModalOpen}
        />
      )}
    </div>
  )
}