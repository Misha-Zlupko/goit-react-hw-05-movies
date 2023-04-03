import { Link, useLocation } from 'react-router-dom';
// import { GetFilmTrending } from '../Server/Server';
import { GetFilmTrending } from '../Server/Server';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MovieDetails } from '../MovieDetails/MovieDetails';
import { Cast } from '../Cast/Cast';
import { Reviews } from '../Reviews/Reviews';

const Home = () => {
  // const location = useLocation();
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
      {/* <Routes>
        {/* <Route path="/movies/:movieId" element={<MovieDetails />}> */}
      {/* <Route path="/cast" element={<Cast />} /> */}
      {/* <Route path="/reviews" element={<Reviews />} /> */}
      {/* </Route> */}
      {/* </Routes> */}
    </div>
  );
};
export default Home;
