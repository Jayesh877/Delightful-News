import './App.css';
import React, { useState } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';




export default function App() {
  const [progress, setProgress] = useState(0)
    let pageSize=5,apiKey=process.env.REACT_APP_NEWS_API;
    
    return (
      <div>
      <Router>
      <Navbar/>
      <LoadingBar
        color='#f11946'
        progress={progress}
        // onLoaderFinished={() => setProgress()}
      />
      <Routes>
          <Route exact path="/" element={<News setProgress={setProgress}  id="1" key="m" apikey={apiKey} pageSize={pageSize} country="in" category="general"/>}></Route>
          <Route exact path="/business" element={<News setProgress={setProgress}  id="2" key="business" apikey={apiKey} pageSize={pageSize} country="in" category="business"/>}></Route>
          <Route exact path="/entertainment" element={<News setProgress={setProgress}  id="3" key="entertainment" apikey={apiKey} pageSize={pageSize} country="in" category="entertainment"/>}></Route>
          <Route exact path="/general" element={<News setProgress={setProgress}  id="4" key="general" apikey={apiKey} pageSize={pageSize} country="in" category="general"/>}></Route>
          <Route exact path="/health" element={<News setProgress={setProgress}  id="5" key="health" apikey={apiKey} pageSize={pageSize} country="in" category="health"/>}></Route>
          <Route exact path="/science" element={<News setProgress={setProgress}  id="6" key="science" apikey={apiKey} pageSize={pageSize} country="in" category="science"/>}></Route>
          <Route exact path="/sports" element={<News setProgress={setProgress}  id="7" key="sports" apikey={apiKey} pageSize={pageSize} country="in" category="sports"/>}></Route>
          <Route exact path="/technology" element={<News setProgress={setProgress}  id="8" key="technology" apikey={apiKey} pageSize={pageSize} country="in" category="technology"/>}></Route>
        </Routes>
        
      
      </Router>
      </div>
    )
  }



