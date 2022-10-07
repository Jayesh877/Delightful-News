import React, { Component } from 'react'

export class NewsItem extends Component {
  // constructor()
  // {
  //   super();
  //   console.log("My cunstructor");
  // }
  render() {
    let {title,description,myurl,url}= this.props;
    return (
        <div >
        <div className="card" style={{width: "18rem"}}>
  <img src={myurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <a href={url} target="_blank" rel="noreferrer" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
      
    )
  }
}

export default NewsItem