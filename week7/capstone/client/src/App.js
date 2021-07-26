import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Movies from './components/Movies';
import MovieHandler from './components/MovieHandler';
import Cartoons from './components/Cartoons';
import CartoonHandler from './components/CartoonHandler';
import AnimeFeatures from './components/AnimeFeatures';
import AnimeHandler from './components/AnimeHandler';

function App() {
  const [animes, setAnimes] = useState([])
  const [cartoons, setCartoons] = useState([])
  const [movies, setMovies] = useState([])

  //Anime-------------------------------
  const getAnime = () => {
    axios.get('http://localhost:4000/anime')
      .then(res => setAnimes(res.data))
      .catch(err => console.log(err.response.data.errMsg))
  }

  useEffect(() => {
    getAnime()
  }, [])

  const addAnime = (newAnime) => {
    axios.post('http://localhost:4000/anime', newAnime)
      .then(res => {
        setAnimes(prevAnime => [...prevAnime, res.data])
      })
      .catch(err => console.log(err))
  }

  const editAnime = (updates, animeId) => {
    axios.put(`http://localhost:4000/anime/${animeId}`, updates)
      .then(res => {
        setAnimes(prevAnime => prevAnime.map(ani => ani._id !== animeId ? ani : res.data))
      })
      .catch(err => console.log(err))
  }

  const deleteAnime = (animeId) => {
    axios.delete(`http://localhost:4000/anime/${animeId}`)
      .then(res => {
        setAnimes(prevAnime => prevAnime.filter(ani => ani._id !== animeId))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

  //Cartoons-------------------------------
  const getCartoons = () => {
    axios.get('http://localhost:4000/cartoons')
      .then(res => setCartoons(res.data))
      .catch(err => console.log(err.response.data.errMsg))
  }

  useEffect(() => {
    getCartoons()
  }, [])

  const addCartoons = (newCartoon) => {
    axios.post('http://localhost:4000/cartoons', newCartoon)
      .then(res => {
        setCartoons(prevCartoon => [...prevCartoon, res.data])
      })
      .catch(err => console.log(err))
  }

  const editCartoons = (updates, cartoonId) => {
    axios.put(`http://localhost:4000/cartoons/${cartoonId}`, updates)
      .then(res => {
        setCartoons(prevCartoon => prevCartoon.map(cartoon => cartoon._id !== cartoonId ? cartoon : res.data))
      })
      .catch(err => console.log(err))
  }

  const deleteCartoons = (cartoonId) => {
    axios.delete(`http://localhost:4000/cartoons/${cartoonId}`)
      .then(res => {
        setCartoons(prevCartoon => prevCartoon.filter(cartoon => cartoon._id !== cartoonId))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }
  
  //Movies-------------------------------
  const getMovies = () => {
    axios.get('http://localhost:4000/movies')
      .then(res => setMovies(res.data))
      .catch(err => console.log(err.response.data.errMsg))
  }

  useEffect(() => {
    getMovies()
  }, [])

  const addMovies = (newMovie) => {
    axios.post('http://localhost:4000/movies', newMovie)
      .then(res => {
        setMovies(prevMovie => [...prevMovie, res.data])
      })
      .catch(err => console.log(err))
  }

  const editMovies = (updates, movieId) => {
    axios.put(`http://localhost:4000/movies/${movieId}`, updates)
      .then(res => {
        setMovies(prevMovie => prevMovie.map(movie => movie._id !== movieId ? movie : res.data))
      })
      .catch(err => console.log(err))
  }

  const deleteMovies = (movieId) => {
    axios.delete(`http://localhost:4000/movies/${movieId}`)
      .then(res => {
        setMovies(prevMovie => prevMovie.filter(movie => movie._id !== movieId))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

  //------------------------------------
  const animeList = animes.map(ani => <AnimeFeatures {...ani} deleteAnime={deleteAnime} editAnime={editAnime} key={ani.name} />)

  const cartoonList = cartoons.map(cartoon => <Cartoons {...cartoon} deleteCartoons={deleteCartoons} editCartoons={editCartoons} key={cartoon.name} />)

  const movieList = movies.map(movie => <Movies {...movie} deleteMovies={deleteMovies} editMovies={editMovies} key={movie.name} />)


  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path = "/anime" render = {() => <div>
            <AnimeHandler btnText='Add Anime' submit={addAnime} />
            <div id='wrapper' className='box'>{animeList}</div>
          </div>} />

          <Route exact path = "/cartoons" render = {() => <div>
              <CartoonHandler btnText='Add Cartoon' submit={addCartoons} />
              <div id='wrapper' className='box'>{cartoonList}</div>
          </div>} />

          <Route exact path = "/movies" render = {() => <div>
            <MovieHandler btnText='Add Movie' submit={addMovies} />
            <div id='wrapper' className='box'>{movieList}</div>
          </div>} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
