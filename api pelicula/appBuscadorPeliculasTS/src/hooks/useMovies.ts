import { useState } from "react";
import { Pelicula } from "../types/interface";

export const useMovies = (url: string, busqueda: string, api: string) => {

    const [peliculas, setPeliculas] = useState<Pelicula[]>([]);


    const fetchPeliculas = async () => {
        try {
            const response = await fetch(`${url}?query=${busqueda}&api_key=${api}`)
            const data = await response.json()
            console.log(data)
            setPeliculas(data.results)
        } catch (err) {
            console.error(err);
        }
    }

    return {
        peliculas, 
        fetchPeliculas
    }
}
