import React from 'react'

const NewsItem =(props)=> {
  let {title,description,myurl,url,author,date,name}= props;
  return (
        <div >
        <div className="card" style={{backgroundColor:props.color==='dark'?'white':'rgb(12 8 40)'}} >
        <a href={url} style={{backgroundColor:props.color==='dark'?'#0d6efd':'black'}} target="_blank" rel="noreferrer" className="btn btn-primary position-relative">
  News by {name}
  <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
  </span>
</a>
  <img src={!myurl?"https://image.cnbcfm.com/api/v1/image/107132885-1665523655070-gettyimages-1243437689-ad_r1_07141.jpeg?v=1665572401&w=1920&h=1080":myurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 style={{color:props.color==='dark'?'black':'white'}} className="card-title">{title}...</h5>
    <p style={{color:props.color==='dark'?'black':'white'}} className="card-text">{description}...</p>
    <p className="card-text"><small style={{color:props.color==='dark'?'black':'white'}} className="text-muted">{!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a style={{color:'white',backgroundColor:props.color==='dark'?"#0d6efd":'black'}} href={url} target="_blank" rel="noreferrer" className="btn btn-primary">Read More</a>
  </div>
</div>
</div>
      
  )
  
}

export default NewsItem