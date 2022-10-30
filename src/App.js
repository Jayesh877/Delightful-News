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
import AboutUs from './component/AboutUs';




export default function App() {
  const [progress, setProgress] = useState(0)
    let pageSize=5,apiKey=process.env.REACT_APP_NEWS_API;
    let [color, setcolor] = useState('dark');
    const toggle=()=>
    {
      if(color==='dark')
      {
        setcolor('light');
        // document.body.style.backgroundColor='rgb(2,0,36)';
        // document.body.style.backgroundColor='#0d0160'
               // background: rgb(2,0,36);
// background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(35,9,121,1) 35%, rgba(0,212,255,1) 100%);
// background-image: linear-gradient(to right, #0a184d, #041a62, #011b77, #061a8c, #1616a1);
// background-image: radial-gradient(circle, #0a184d, #041a62, #011b77, #061a8c, #1616a1);
// background-image: linear-gradient(to left top, #000000, #16000d, #1f021b, #20072c, #130f40);
        document.body.style.backgroundImage=`linear-gradient(to left top, #000000, #16000d, #1f021b, #20072c, #130f40)`;
      }
      else
      {
        setcolor('dark'); 
        // background-image: linear-gradient(to left top, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff);
        document.body.style.backgroundImage=`linear-gradient(to left top, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff)`;
      }
    }
    
    return (
      <div>
      <Router>
      <Navbar color={color} toggle={toggle}/>
      <LoadingBar
        color='#f11946'
        progress={progress}
        // onLoaderFinished={() => setProgress()}
      />
      <Routes>
          <Route exact path="/" element={<News color={color} setProgress={setProgress}  id="1" key="m" apikey={apiKey} pageSize={pageSize} country="in" category="general"/>}></Route>
          <Route exact path="/business" element={<News color={color} setProgress={setProgress}  id="2" key="business" apikey={apiKey} pageSize={pageSize} country="in" category="business"/>}></Route>
          <Route exact path="/entertainment" element={<News color={color} setProgress={setProgress}  id="3" key="entertainment" apikey={apiKey} pageSize={pageSize} country="in" category="entertainment"/>}></Route>
          <Route exact path="/general" element={<News color={color} setProgress={setProgress}  id="4" key="general" apikey={apiKey} pageSize={pageSize} country="in" category="general"/>}></Route>
          <Route exact path="/health" element={<News color={color} setProgress={setProgress}  id="5" key="health" apikey={apiKey} pageSize={pageSize} country="in" category="health"/>}></Route>
          <Route exact path="/science" element={<News color={color} setProgress={setProgress}  id="6" key="science" apikey={apiKey} pageSize={pageSize} country="in" category="science"/>}></Route>
          <Route exact path="/sports" element={<News color={color} setProgress={setProgress}  id="7" key="sports" apikey={apiKey} pageSize={pageSize} country="in" category="sports"/>}></Route>
          <Route exact path="/technology" element={<News color={color} setProgress={setProgress}  id="8" key="technology" apikey={apiKey} pageSize={pageSize} country="in" category="technology"/>}></Route>
          <Route exact path="/about" element={<AboutUs color={color}/>}/>
        </Routes>
        
      
      </Router>
      </div>
    )
  }



