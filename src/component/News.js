import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles=[
];
  constructor()
  {
    super();
    this.state=
  {    
    articles:this.articles,
    page:1,
    totalResult:0
  }
  };
  async componentDidMount()
  {
      let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e2483041be8d415bab21708537c62960&pageSize=21";
      let data= await fetch(url);
      
      let parsedData=  await data.json()
      console.log(this.state.page);
      this.setState({
        articles:parsedData.articles,
        page:1,
        totalResult:parsedData.totalResult
      })
  }
  next =async()=>
  {
    if(this.state.page+1>Math.ceil(this.state.totalResult/21))
    {

    }
    else
    {
      let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e2483041be8d415bab21708537c62960&pageSize=21&page=${this.state.page+1}`;
      let data= await fetch(url);
      
      let parsedData=  await data.json()
      // console.log(parsedData);
    this.setState(
      {
        articles:parsedData.articles,
        page:this.state.page +1
      }
    )
    }
      
    console.log("next"+this.totalResult)

  }
  prev =async()=>
  {
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e2483041be8d415bab21708537c62960&pageSize=21&page=${this.state.page-1}`;
      let data= await fetch(url);
      
      let parsedData=  await data.json()
      // console.log(parsedData);
    this.setState(
      {
        articles:parsedData.articles,
        page:this.state.page - 1
      }
    )
    console.log("prev")
  }
  
  render() {
  
    return (
      <>
      <div className="container my-4" >
        <h2>This a news app</h2>
      <div className="row my-3 mx-2">
      { this.state.articles.map((element)=>{
        return <div className="col-md-3 mx-2 my-2" key={element.url}>
            <NewsItem title={element.title} description={element.description} myurl={element.urlToImage} url={element.url}/>
        </div>}
        ) 
      }    
      <div className="container d-flex justify-content-between">
      <button onClick={this.prev} disabled={this.state.page<=1} type="button" className="btn btn-warning">&#8592; Previous</button>
      <button onClick={this.next} disabled={this.state.page>=4}type="button" className="btn btn-info">Next &#8594;	</button>
      </div>
      </div>
      </div>
      </>
         )
  }
}

export default News