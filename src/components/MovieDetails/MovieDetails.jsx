import axios from 'axios';
import { GetFilmInfo } from 'components/Server/Server';
import { useState, useEffect, useRef, Suspense } from 'react';
import {
  NavLink,
  Routes,
  Route,
  useParams,
  useLocation,
  Link,
  Outlet,
} from 'react-router-dom';
import { GetActors } from 'components/Server/Server';
import { Cast } from '../Cast/Cast';
import { Reviews } from '../Reviews/Reviews';

const KEY = `465b4aa22561626299c60e60f8601e8f`;
const URL_MOVIE = `
https://api.themoviedb.org/3/movie/`;

const MovieDetails = () => {
  const id = useParams(); // get id from the route params
  const [informations, setInformations] = useState({});
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? '/movies');
  useEffect(() => {
    GetFilmInfo(id.movieId).then(info => setInformations(info));
  }, [id.movieId]);
  return (
    <div>
      <Link to={backLinkLocation.current}>Назад</Link>
      <ul>
        <li>
          <img
            src={`https://image.tmdb.org/t/p/w500${informations.poster_path}`}
            alt={`${informations.original_title}`}
          />
        </li>
        <li>
          <span>{informations.title}</span>
        </li>
        <li>
          <p></p>
        </li>
        <li>
          Overview
          <span>{informations.overview}</span>
        </li>
        <li>
          Genres
          <span>{informations.genres?.map(item => item.name)}</span>;
        </li>
      </ul>
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      {/* <Routes> */}
      {/* <Route path="/cast" element={<Cast />} /> */}
      {/* <Route path="/reviews" element={<Reviews />} /> */}
      {/* </Routes> */};
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default MovieDetails;
