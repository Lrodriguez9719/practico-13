import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import './Catalog.css';

const MOVIE_IDS = [
  "tt0111161", "tt0068646", "tt0071562", "tt0468569", "tt0050083",
  "tt0108052", "tt0167260", "tt0110912", "tt0060196", "tt0137523",
  "tt0120737", "tt0109830", "tt1375666", "tt0167261", "tt0080684",
  "tt0133093", "tt0099685", "tt0073486", "tt0047478", "tt0114369",
  "tt0317248", "tt0102926", "tt0038650", "tt0118799", "tt0120815"
];

const OMDB_API_KEY = "86b0539e"; // Replace with your OMDb API key

const Catalog = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      const fetchedMovies = await Promise.all(
        MOVIE_IDS.map(async (id) => {
          const res = await fetch(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}`);
          const data = await res.json();
          return {
            title: data.Title,
            poster: data.Poster,
            imdbID: data.imdbID,
            metascore: data.Metascore
          };
        })
      );
      // Sort by metascore descending
      fetchedMovies.sort((a, b) => parseInt(b.metascore) - parseInt(a.metascore));
      setMovies(fetchedMovies);
      setLoading(false);
    };
    fetchMovies();
  }, []);

  if (loading) {
    return (
      <div className="catalog-loading">
        <div className="spinner"></div>
        <div className="loading-text">Cargando películas...</div>
      </div>
    );
  }

  return (
    <div className="catalog-container">
      <Link to="/" className="back-home-link">← Volver al inicio</Link>
      <h1>Nuestras mejores peliculas disponibles</h1>
      <div className="movie-list">
        {movies.map(movie => (
          <div className="movie-card" key={movie.imdbID}>
            <img src={movie.poster} alt={movie.title} className="movie-poster" />
            <h2>{movie.title}</h2>
            <Link
              to={`/detalles-pelicula/${movie.imdbID}`}
              className="details-link"
            >
              Ver detalles
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;