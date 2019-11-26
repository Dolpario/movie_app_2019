import React from 'react'


export default class Movies extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    const {id,year,title,summary,poster,genres } = this.props

    return <div className="movie">
      <img src={poster} alt={title} title={title}/>
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="genres">{genres.map((genre,index)=><li className="genres__genre" key={index}>{genre}</li>)}</ul>
        <p className='movie__summary'>{summary.slice(0,180)}...</p>
      </div>
    </div>
  }
}
