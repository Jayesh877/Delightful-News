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
    // this.setState({
    //   loading:true
    // })
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
      this.setState({
        page:this.state.page+1
      })
  }
  
  // next =async()=>   //these two methods below are not in use now
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

  fetchMoreData = async() => {
    console.log(this.state.page)
    // this.setState({page:this.state.page+1}); 
    // the above set state was not updating my page so I updated my page with setstate firstly in componentDidMount you can check it in that method and secondly in fetchMoreData method setState line number 138
    console.log(this.state.page)
    this.setState({
      loading:true
    })
    let url=`https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data= await fetch(url);
    
    let parsedData=  await data.json();  
  this.setState(
    {
      articles:this.state.articles.concat(parsedData.articles),
      totalResults:parsedData.totalResults, 
      loading:false,
      page:this.state.page+1
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
      {this.state.articles.map((element,index)=>{ // what is index this parameter is used to get index value of an array which is provied by map method
         //here occured an error in which my code was calling page 1 in fetchMoreData to know about it goto fetchMoreData function api agian so to sort it  out i used index here but i got the problem and updated it so that's why i am not using index anymore but i am putting it here for future use so if problem occur i will use it again 
        return <div className="col-md-4 my-2 " key={element.url}>
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