import './App.css';
import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
export default class App extends Component {
  state={
    progress:0
  }
  setProgress=(progress)=>
  {
    this.setState({
      progress:progress 
    })
  }
  render() {
    
    let pageSize=5,apiKey="08399ba7b951483ab52e8762d57fadf1"
    return (
      <div>
      <Router>
      <Navbar/>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress()}
      />
      <Routes>
          <Route exact path="/" element={<News setProgress={this.setProgress}  id="1" key="m" apikey={apiKey} pageSize={pageSize} country="in" category="general"/>}></Route>
          <Route exact path="/business" element={<News setProgress={this.setProgress}  id="2" key="business" apikey={apiKey} pageSize={pageSize} country="in" category="business"/>}></Route>
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress}  id="3" key="entertainment" apikey={apiKey} pageSize={pageSize} country="in" category="entertainment"/>}></Route>
          <Route exact path="/general" element={<News setProgress={this.setProgress}  id="4" key="general" apikey={apiKey} pageSize={pageSize} country="in" category="general"/>}></Route>
          <Route exact path="/health" element={<News setProgress={this.setProgress}  id="5" key="health" apikey={apiKey} pageSize={pageSize} country="in" category="health"/>}></Route>
          <Route exact path="/science" element={<News setProgress={this.setProgress}  id="6" key="science" apikey={apiKey} pageSize={pageSize} country="in" category="science"/>}></Route>
          <Route exact path="/sports" element={<News setProgress={this.setProgress}  id="7" key="sports" apikey={apiKey} pageSize={pageSize} country="in" category="sports"/>}></Route>
          <Route exact path="/technology" element={<News setProgress={this.setProgress}  id="8" key="technology" apikey={apiKey} pageSize={pageSize} country="in" category="technology"/>}></Route>
        </Routes>
        
      
      </Router>
      </div>
    )
  }
}


