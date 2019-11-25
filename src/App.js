import React from 'react';
import axios from 'axios'
import Movies from './Movies'

class App extends React.Component {
  state={
    isLoading: true,
    movies: []
  }


  getmovies= async()=>{
    const {
      data:{
        data: {movies}
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json")
    this.setState({movies})
    this.setState({isLoading:false})
  }

  componentDidMount() {
    this.getmovies()

  }


  render(){
    const {isLoading,movies} = this.state
    return (
      <section class="container">

      {this.state.isLoading?
        (<div class="loader">
          <span class="loader__text">Loading...</span>
        </div>)
        :(<div class="movies">
        {movies.map(movies=>{
        return <Movies
          id={movies.id}
          year={movies.year}
          title={movies.title}
          summary={movies.summary}
          poster={movies.poster}
          key = {movies.id}/>})}
        </div>)}

    </section>
  )
  }
}



export default App;
