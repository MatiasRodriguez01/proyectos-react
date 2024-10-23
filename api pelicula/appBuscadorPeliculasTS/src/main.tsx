import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { SearchMovies } from './SearchMovies'
import "./styles/movieSearch.css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SearchMovies/>
  </StrictMode>,
)
