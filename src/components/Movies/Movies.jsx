import { Outlet, link, NavLink, useSearchParams } from 'react-router-dom';
import { GetFetchFilmByName } from 'components/Server/Server';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { MovieDetails } from '../MovieDetails/MovieDetails';
import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  // const [search, setSearch] = useState('');
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  useEffect(() => {
    GetFetchFilmByName(query).then(movi => {
      setMovies(movi);
    });
  }, [query]);

  const hendleSubmit = e => {
    e.preventDefault();
    setSearchParams(searchParams);
  };

  const updateQueryString = evt => {
    const inp = evt.target.value;
    if (inp === '') {
      return setSearchParams({});
    }
    setSearchParams({
      query: inp,
    });
  };

  return (
    <div>
      <form onSubmit={hendleSubmit}>
        <input type="text" value={query} onChange={updateQueryString} />
        <button onClick={() => setSearchParams({})}>Search</button>
      </form>

      <ul>
        {movies.map(film => {
          console.log(film);
          return (
            <li key={film.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`}
                alt=""
              />
              <Link to={`${film.id}`} state={{ from: location }}>
                {film.title}{' '}
              </Link>
            </li>
          );
        })}
      </ul>
      <Routes>
        {/* <Route path="/movies/:movieId" element={<MovieDetails />}> */}
        {/* <Route path="/cast" element={<Cast />} />
          <Route path="/reviews" element={<Reviews />} /> */}
        {/* </Route> */}
      </Routes>
    </div>
  );
};
export default Movies;
