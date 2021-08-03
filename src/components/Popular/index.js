import {Component} from 'react'
import Header from '../Header'
import Socialmedia from '../Socialmedia'
import './index.css'

class Popular extends Component {
  state = {Pop: []}

  componentDidMount() {
    this.Popular()
  }

  Popular = async () => {
    const response = await fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=11f10afd62f65559f5880e6e9146afdc&language=en-US&page=2',
    )
    const data = await response.json()
    console.log(data)
    const updatedData = data.results.map(each => ({
      posterPath: `https://image.tmdb.org/t/p/w500${each.poster_path}`,
      id: each.id,
      title: each.title,
    }))
    this.setState({Pop: updatedData})
  }

  render() {
    const {Pop} = this.state

    return (
      <div className="background-Popular">
        <Header />
        <div className="flex-popular">
          <div className="Popular-images-flex">
            {Pop.map(each => (
              <div key={each.id}>
                <img
                  src={each.posterPath}
                  alt={each.id}
                  className="popular-images"
                />
              </div>
            ))}
          </div>
        </div>
        <Socialmedia />
      </div>
    )
  }
}

export default Popular
