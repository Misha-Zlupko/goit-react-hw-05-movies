import { Link } from 'react-router-dom';
import { GetFilmTrending } from '../Server/Server';
import { useState, useEffect } from 'react';

const Home = () => {
  const [filmsName, setFilmsName] = useState([]);
  useEffect(() => {
    GetFilmTrending().then(data => {
      setFilmsName(data);
    });
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {filmsName.map(film => (
          <li key={film.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`}
              alt=""
            />
            <Link to={`/movies/${film.id}`}>{film.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Home;
