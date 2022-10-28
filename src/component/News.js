import React, { useEffect,useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner.js';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const News =(props)=>{


  const [articles,setArticles]=useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);

  const update=async()=>
  {
    props.setProgress(0);
    let url=`https://newsapi.org/v2/top-headlines?&country=${props.country}&category=${props.category}&apikey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    props.setProgress(30);
    let data= await fetch(url);
    let parsedData=  await data.json();
    props.setProgress(50);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);

      props.setProgress(100);
  }
  useEffect(() => {
    update();
    // eslint-disable-next-line
  }, []);
  

  
  // next =async()=>   //these two methods below are not in use now
  // {
  //   setState(
  //     {
  //       page:page +1
  //     }
  //     )
  //     update();
  // }
  // prev =async()=>
  // {
  //   setState(
  //     {
  //       page:page - 1
  //     }
  //   )
  //   update();
  // }

  const fetchMoreData = async() => {
    // setState({page:page+1}); 
    // the above set state was not updating my page so I updated my page with setstate firstly in componentDidMount you can check it in that method and secondly in fetchMoreData method setState line number 138
    setLoading(true)
   
    let url=`https://newsapi.org/v2/top-headlines?&country=${props.country}&category=${props.category}&apikey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1);
    let data= await fetch(url);
    
    let parsedData=  await data.json();  
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);

    
  }
 
  
    return (
      <>

        <h2 className="text-center" style={{marginTop: "90px"}}>Delightful News -Top HeadLines </h2>
          {loading && <Spinner/>}
        <InfiniteScroll
            dataLength={articles.length} //This is important field to render the next data
            next={fetchMoreData}
            hasMore={articles.length!==totalResults}
            loader={
              // page + 1 >Math.ceil(totalResults / props.pageSize) ? "" :<Spinner />
              
              loading && <Spinner/>
                }
              
            >
              <div className="container">

      <div className="row my-3">
      {articles.map((element,index)=>{ // what is index this parameter is used to get index value of an array which is provied by map method
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
News.defaultProps={
  country:'in',
  pageSize:6
}
News.propTypes={
  country :PropTypes.string,
  pageSize:PropTypes.number
}
export default News