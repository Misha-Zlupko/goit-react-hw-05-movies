import { useSearchParams } from 'react-router-dom';
import { GetFetchFilmByName } from 'components/Server/Server';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Routes } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  console.log(query);
  console.log(movies);
  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    GetFetchFilmByName(query).then(movi => setMovies(movi));
  }, [searchParams, query]);

  const handleSubmit = e => {
    e.preventDefault();

    setSearchParams(query !== '' ? { query } : {});
  };

  const updateQueryString = evt => {
    setQuery(evt.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={updateQueryString} />
        <button>Search</button>
      </form>

      <ul>
        {movies.map(film => {
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
