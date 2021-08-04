import {Component} from 'react'
import Header from '../Header'

import './index.css'

class Movie extends Component {
  state = {movieDetails: [], like: []}

  componentDidMount() {
    this.Movies()
    this.Like()
  }

  Like = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const options = {
      method: 'GET',
    }
    const url = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=11f10afd62f65559f5880e6e9146afdc&language=en-US&page=3`
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    const updatedData = data.results.map(each => ({
      posterPath: `https://image.tmdb.org/t/p/w500${each.poster_path}`,
      id: each.id,
    }))
    this.setState({like: updatedData})
  }

  Movies = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const options = {
      method: 'GET',
    }
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=11f10afd62f65559f5880e6e9146afdc&language=en-US`
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    const updatedData = {
      id: data.id,
      homePage: data.homepage,
      posterPath: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
      backDrop: `https://image.tmdb.org/t/p/w500${data.backdrop_path}`,
      Revenue: data.revenue,
      ratingAverage: data.vote_average,
      ratingCount: data.vote_count,
    }

    this.setState({movieDetails: updatedData})

    console.log(updatedData)
  }

  render() {
    const {movieDetails, like} = this.state
    const {
      homePage,
      posterPath,
      backDrop,
      genres,
      Revenue,
      ratingAverage,
      ratingCount,
    } = movieDetails
    return (
      <div className="background">
        <Header />
        <div className="top-section">
          <img src={posterPath} className="top-image" alt={movieDetails.id} />
          <div className="margin-movie">
            <p className="color1">Rating Average</p>
            <p className="color4">{ratingAverage}</p>

            <p className="color1">Rating Count</p>
            <p className="color4">{ratingCount}</p>

            <p className="color1">Revenue</p>
            <p className="color4">{Revenue}</p>
          </div>
        </div>
        <h1 className="color2">Movies like this</h1>
        <div className="trending-images-flex color">
          {like.map(each => (
            <div key={each.id}>
              <img
                src={each.posterPath}
                alt={each.id}
                className="trending-images"
              />
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Movie
