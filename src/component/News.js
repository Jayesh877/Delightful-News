import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner.js';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
  // static load=0;
  mount=false;
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
    loading:false,
    totalResults:0,
    totalload:0
  }
  };
  async update()
  {
    this.props.setProgress(0);
    let url=`https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading:true
    })
    this.props.setProgress(30);
    let data= await fetch(url);
    
    let parsedData=  await data.json();
    this.props.setProgress(50);
    this.setState(
      {
        articles:parsedData.articles,
        totalResults:parsedData.totalResults,
        loading:false
      }
      )
      this.props.setProgress(100);
  }
  async componentDidMount()
  {
      this.update();
  //     this.mount=true;
  //     if(this.mount)
  //     {
  //     let url=`https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  //   this.setState({
  //     loading:true
  //   })
  //   let data= await fetch(url);
  //   let parsedData=  await data.json();
  //   console.log(parsedData);
  //   this.setState({
  //     articles:[]
  //   })
  // this.setState(
  //   {
  //     articles:parsedData.articles,
  //     totalResults:parsedData.totalResults,
  //     loading:false
  //   }
  // )
  //     }
  }
  // next =async()=>
  // {
  //   this.setState(
  //     {
  //       page:this.state.page +1
  //     }
  //     )
  //     this.update();
  // }
  // prev =async()=>
  // {
  //   this.setState(
  //     {
  //       page:this.state.page - 1
  //     }
  //   )
  //   this.update();
  // }
  componentWillUnmount() {
    // clearInterval(this.interval);
    this.mount = false;
    console.log("unmounted")
  }
  fetchMoreData = async() => {
    console.log(this.state.page)
    this.setState({page:this.state.page+1});
    console.log(this.state.page)
    this.setState({
      loading:true
    })
    let url=`https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data= await fetch(url);
    
    let parsedData=  await data.json();  
    
    console.log(this.state.articles)
    // this.setState(function(state, props) {
    //   return {
    //     articles:state.articles.concat(parsedData.articles),
    //     totalResults:parsedData.totalResults, 
    //     loading:false
    //   };
    // });
    console.log(parsedData);
    console.log(this.state.loading)
    // this.setState((previousState) => 
    // (
    //   { articles:this.state.articles.concat(parsedData.articles),
    //     totalResults:parsedData.totalResults, 
    //     loading:false}
    //   )
    //   );
  this.setState(
    {
      articles:this.state.articles.concat(parsedData.articles),
      totalResults:parsedData.totalResults, 
      loading:false
      // totalload:this.state
    }
    )
    
  }
  render() {
  
    return (
      <>

        <h2 className="text-center">Delightful News -Top HeadLines </h2>
        {/* <h5 className="text-center"> */}
          {this.state.loading && <Spinner/>}
        {/* </h5> */}
        <InfiniteScroll
            dataLength={this.state.articles.length} //This is important field to render the next data
            next={this.fetchMoreData}
            hasMore={this.state.articles.length!==this.state.totalResults}
            loader={
              // this.state.page + 1 >Math.ceil(this.state.totalResults / this.props.pageSize) ? "" :<Spinner />
              
              this.state.loading && <Spinner/>
                }
              // ${console.log((!this.state.loading) || <Spinner/>)}
              // ${console.log("ho")}
              
            >
              <div className="container">

      <div className="row my-3">
      {this.state.articles.map((element,index)=>{
        return <div className="col-md-4 my-2 " key={index}>
            <NewsItem title={element.title} description={element.description} myurl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} name={element.source.name}/>
        </div>}
        ) 
      }    
     
      </div>
      </div>
      </InfiniteScroll>
      </>
      
         )
  }
}

export default News