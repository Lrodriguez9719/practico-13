import { useParams, Link } from 'react-router';
import { useEffect, useState } from 'react';
import './MovieDetail.css';

const OMDB_API_KEY = "86b0539e";

const MovieDetail = () => {
  const { idPelicula } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      const res = await fetch(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${idPelicula}`);
      const data = await res.json();
      setMovie(data);
      setLoading(false);
    };
    fetchMovie();
  }, [idPelicula]);

  if (loading) {
    return (
      <div className="movie-detail-loading">
        <div className="spinner"></div>
        <div className="loading-text">Cargando detalles de la película...</div>
      </div>
    );
  }

  if (!movie || movie.Response === "False") {
    return (
      <div className="movie-detail-error">
        <p>No se encontró la película.</p>
        <Link to="/catalogo" className="back-catalog-link">← Volver al catálogo</Link>
      </div>
    );
  }

  return (
    <div className="movie-detail-container">
      <Link to="/catalogo" className="back-catalog-link">← Volver al catálogo</Link>
      <div className="movie-detail-card">
        <img src={movie.Poster} alt={movie.Title} className="movie-detail-poster" />
        <div className="movie-detail-info">
          <h1>{movie.Title}</h1>
          <p><strong>Género:</strong> {movie.Genre}</p>
          <p><strong>Duración:</strong> {movie.Runtime}</p>
          <p><strong>Sinopsis:</strong> {movie.Plot}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;