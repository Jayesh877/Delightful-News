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
  <img src={!myurl?"https://image.cnbcfm.com/api/v1/image/107132885-1665523655070-gettyimages-1243437689-ad_r1_07141.jpeg?v=1665572401&w=1920&h=1080":myurl} className="card-img-top" alt="..."/>
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