import './Home.css';
import { Link } from 'react-router';

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>🎬 PeliMAX</h1>
        <p className="home-tagline">
          Descubre, explora y disfruta tus películas favoritas en cualquier momento y lugar.
        </p>
      </header>
      <section className="home-description">
        <p>
          PeliMAX es tu plataforma ideal para ver los últimos éxitos de taquilla y clásicos atemporales.
          <br />
          Explora nuestra gran colección de títulos seleccionados.
          <br />
          Vive el cine como nunca antes, desde la comodidad de tu hogar.
        </p>
        <Link to="/catalogo" className="home-link">
          Ir al Catálogo
        </Link>
      </section>
    </div>
  );
}

export default Home;