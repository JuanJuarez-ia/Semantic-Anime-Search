export interface Anime {
  id: string
  title: string
  rating: number | string
  genres: string[]
  description: string
  year: number | string
  episodes: number | string
  studio: string
  coverUrl: string
}

export async function buscarAnimeBackend(query: string): Promise<Anime[]> { // Funcion para buscar en hugging face
  const endpoint = "https://juanjuarez14-semantic-anime-search.hf.space/buscar";

  try {
    const respuesta = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pregunta: query })
    });

    if (!respuesta.ok) {
      const errorBody = await respuesta.json().catch(() => ({ detail: respuesta.statusText }));
      throw new Error(`Error conectando a la API: ${errorBody.detail || 'Error desconocido'}`);
    }

    const datos = await respuesta.json();

    // Transformamos el JSON de Python para que React lo entienda
    return datos.resultados.map((item: any, index: number) => {

      // Limpiamos los generos porque desde Python vienen como un texto: "['Action', 'Sci-Fi']"
      let generosLimpios = [];
      try {
        // Reemplaza las comillas simples de Python por dobles y lo convierte a Array real
        generosLimpios = JSON.parse(item.generos.replace(/'/g, '"'));
      } catch (e) {
        // Si falla, al menos ponemos el texto crudo en una lista
        generosLimpios = [item.generos];
      }

      return {
        id: String(index), // React necesita un ID único por tarjeta
        title: item.titulo || "Título no disponible",
        rating: item.calificacion || "N/A",
        genres: generosLimpios || [],
        description: item.descripcion || "Descripción no disponible.",
        year: item.anio_salida || "N/A",
        episodes: item.episodios || "N/A",
        studio: item.estudio || "Desconocido",
        coverUrl: item.imagen || "/placeholder.svg"
      };
    });

  } catch (error) {
    console.error("Error buscando anime:", error);
    return [];
  }
}
