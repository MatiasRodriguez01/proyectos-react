import { ChangeEvent } from "react";
import { useSearch } from "./hooks/useSearch";
import { useMovies } from "./hooks/useMovies";

export const SearchMovies = () => {

    const urlBase = 'https://api.themoviedb.org/3/search/movie'
    const API_KEY = '853d1bd54514a48ece46d75a8447e8e8'

    const { busqueda, handleInputChange } = useSearch()

    const { peliculas, fetchPeliculas } = useMovies(urlBase, busqueda, API_KEY);
    
    const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
        event.preventDefault()
        fetchPeliculas()
    }

    return (
        <>
            <div className="container">
                <h1 className="title">Buscador de Peliculas</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text"
                        placeholder="Escribi una pelicula"
                        value={busqueda}
                        onChange={handleInputChange}
                    />
                </form>
            </div>
            <div className="movie-list">
                {
                    peliculas.map((pelicula) => (
                        <div key={pelicula.id} className="movie-card">
                            <img 
                            src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
                            alt={pelicula.title}
                            />
                            <h2>{pelicula.title}</h2>
                            <p>{pelicula.overview}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

