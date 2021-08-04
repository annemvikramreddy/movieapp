import {Link} from 'react-router-dom'
import {Component} from 'react'
import Socialmedia from '../Socialmedia'
import Header from '../Header'

import './index.css'

class Home extends Component {
  state = {trending: [], topRated: [], Original: []}

  componentDidMount() {
    this.Trending()
    this.TopRated()
    this.Original()
  }

  Original = async () => {
    const options = {
      method: 'GET',
    }
    const url =
      'https://api.themoviedb.org/3/discover/tv?api_key=11f10afd62f65559f5880e6e9146afdc'
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    const updatedData = data.results.map(each => ({
      posterPath: `https://image.tmdb.org/t/p/w500${each.poster_path}`,
      id: each.id,
    }))
    this.setState({Original: updatedData})
  }

  TopRated = async () => {
    const options = {
      method: 'GET',
    }
    const url =
      'https://api.themoviedb.org/3/movie/top_rated?api_key=11f10afd62f65559f5880e6e9146afdc&language=en-US'
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    const updatedData = data.results.map(each => ({
      posterPath: `https://image.tmdb.org/t/p/w500${each.backdrop_path}`,
      id: each.id,
    }))
    this.setState({topRated: updatedData})
  }

  Trending = async () => {
    const options = {
      method: 'GET',
    }
    const url =
      'https://api.themoviedb.org/3/trending/all/week?api_key=11f10afd62f65559f5880e6e9146afdc'
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    const updatedData = data.results.map(each => ({
      posterPath: `https://image.tmdb.org/t/p/w500${each.poster_path}`,
      id: each.id,
    }))
    this.setState({trending: updatedData})
  }

  render() {
    const {trending, topRated, Original} = this.state

    return (
      <div className="total-background">
        <div className="top-background">
          <Header />
          <div className="place">
            <h1>Super Man</h1>
            <p>
              Superman is a fictional who first
              <br />
              appeared in American comic books published by
              <br />
              Dc Comics
            </p>
            <button type="button" className="home-button">
              Play
            </button>
          </div>
        </div>
        <div>
          <h1 className="color">Trending now</h1>
          <div className="trending-images-flex">
            {trending.map(each => (
              <Link to={`/movie/${each.id}`} key={each.id}>
                <img
                  src={each.posterPath}
                  alt={each.id}
                  className="trending-images"
                />
              </Link>
            ))}
          </div>
          <h1 className="color">Top rated</h1>
          <div className="trending-images-flex">
            {topRated.map(each => (
              <Link to={`/movie/${each.id}`} key={each.id}>
                <img
                  src={each.posterPath}
                  alt={each.id}
                  className="trending-images"
                />
              </Link>
            ))}
          </div>
          <h1 className="color">Original</h1>
          <div className="trending-images-flex">
            {Original.map(each => (
              <Link to={`/movie/${each.id}`} key={each.id}>
                <img
                  src={each.posterPath}
                  alt={each.id}
                  className="trending-images"
                />
              </Link>
            ))}
          </div>
        </div>
        <Socialmedia />
      </div>
    )
  }
}

export default Home
