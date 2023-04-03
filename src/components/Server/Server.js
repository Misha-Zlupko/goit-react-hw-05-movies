import { logDOM } from '@testing-library/react';
import axios from 'axios';
const KEY = `465b4aa22561626299c60e60f8601e8f`;
const URL_TRENDING = `https://api.themoviedb.org/3/trending/all/day?`;
const URL_MOVIE = `
https://api.themoviedb.org/3/movie/`;
const URL_FETCHBYNAME = `
https://api.themoviedb.org/3/search/movie`;
const URL_ACTORS = `
https://api.themoviedb.org/3/movie/`;
const URL_WATCHES = `https://api.themoviedb.org/3/movie/`;
export const GetFilmTrending = async page => {
  const url = `${URL_TRENDING}page=${(page = 1)}&api_key=${KEY}`;
  try {
    const response = await axios.get(`${url}`);
    const movie = response.data.results;
    // console.log(movie);
    return movie;
  } catch (error) {
    console.log(error.message);
  }
};

export const GetFetchFilmByName = async query => {
  const url = `${URL_FETCHBYNAME}?api_key=${KEY}&query=${query}&language=en`;
  try {
    const response = await axios.get(`${url}`);
    const name = response.data.results;
    // console.log(name);
    return name;
  } catch (error) {
    console.log(error.message);
  }
};
GetFetchFilmByName();
export async function GetFilmInfo(movie_id) {
  const url = `${URL_MOVIE}${movie_id}?api_key=${KEY}&language=en-US`;
  console.log(url);
  try {
    const response = await axios.get(`${url}`);
    const nameById = response.data;
    return nameById;
  } catch (error) {
    console.log(error.message);
  }
}

export const GetActors = async movie_id => {
  const url = `
    ${URL_ACTORS}${movie_id}/credits?api_key=${KEY}&language=en-US`;
  try {
    const response = await axios.get(`${url}`);
    const SearchActorsById = response.data.cast;
    return SearchActorsById;
  } catch (error) {
    // console.log(error.message);
  }
};

export const GetFilmWatches = async movie_id => {
  const url = `
        ${URL_WATCHES}${movie_id}/reviews?api_key=${KEY}&language=en-US
      `;
  try {
    const response = await axios.get(`${url}`);
    const watchesFilm = response.data.results;
    return watchesFilm;
    // console.log(watchesFilm);
  } catch (error) {
    console.log(error.message);
  }
};
