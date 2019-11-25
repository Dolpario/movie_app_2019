import React from 'react'

export default class Movies extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    const {id,year,title,summary,poster} = this.props

    return <div class="movie">
      <img src={poster} alt={title} title={title}/>
      <div class="movie__data">
        <h3 class="movie__title">{title}</h3>
        <h5 class="movie__year">{year}</h5>
        <p class='movie__summary'>{summary}</p>
      </div>
    </div>
  }
}
