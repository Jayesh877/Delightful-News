import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner.js';
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps={
    country:'in',
    pageSize:6
  }
  static propTypes={
    country :PropTypes.string,
    pageSize:PropTypes.number
  }
  articles=[];
  constructor()
  {
    super();
    this.state=
  {    
    page:1,
    articles:this.articles,
    loading:false
  }
  };
  async update()
  {
    let url=`https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.category}&apiKey=e2483041be8d415bab21708537c62960&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading:true
    })
    let data= await fetch(url);
    
    let parsedData=  await data.json();
  this.setState(
    {
      articles:parsedData.articles,
      loading:false
    }
  )
  }
  async componentDidMount()
  {
      this.update();
  }
  next =async()=>
  {
    this.setState(
      {
        page:this.state.page +1
      }
      )
      this.update();
  }
  prev =async()=>
  {
    this.setState(
      {
        page:this.state.page - 1
      }
    )
    this.update();
  }
  
  render() {
  
    return (
      
      <div className="container" >
        <h2 className="text-center">Delightful News -Top HeadLines </h2>
        <h5 className="text-center">
        {this.state.loading && <Spinner/>}
        </h5>
      <div className="row my-3">
      { !this.state.loading&&this.state.articles.map((element)=>{
        return <div className="col-md-4 my-2 " key={element.url}>
            <NewsItem title={element.title} description={element.description} myurl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} name={element.source.name}/>
        </div>}
        ) 
      }    
      <div className="container d-flex justify-content-between">
      <button onClick={this.prev} disabled={this.state.page<=1} type="button" className="btn btn-warning">&#8592; Previous</button>
      <button onClick={this.next} disabled={this.state.page+1>Math.ceil(this.state.totalResult/this.props.pageSize)}type="button" className="btn btn-info">Next &#8594;	</button>
      </div>
      </div>
      </div>
      
         )
  }
}

export default News