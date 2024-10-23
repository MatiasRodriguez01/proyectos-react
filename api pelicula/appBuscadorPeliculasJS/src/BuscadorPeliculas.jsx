import { useState } from "react"

export const BuscadorPeliculas = () => {

    const urlBase = 'https://api.themoviedb.org/3/search/movie'
    const API_KEY = '853d1bd54514a48ece46d75a8447e8e8'

    const [busqueda, setBusqueda] = useState("");
    const [peliculas, setPeliculas] = useState([]);

    const handleInputChange = (e) => {
        setBusqueda(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchPeliculas()
    }

    const fetchPeliculas = async () => {
        try {
            const response = await fetch(`${urlBase}?query=${busqueda}&api_key=${API_KEY}`)
            const data = await response.json()
            console.log(data)
            setPeliculas(data.results)
        } catch (err) {
            console.error(err);
        }
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
                {peliculas.map((pelicula) => (
                        <div key={pelicula.id} className="movie-card">
                            <img 
                            src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
                            alt={pelicula.title}
                            />
                            <h2>{pelicula.title}</h2>
                            <p>{pelicula.overview}</p>
                        </div>
                    ))}
            </div>
        </>
    )
}
