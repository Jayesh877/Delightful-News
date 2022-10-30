import React from 'react'
import {
  Link
} from "react-router-dom";
const Navbar =(props)=>{
 
    return (
        <nav className={`navbar fixed-top navbar-expand-lg bg-${props.color==='dark'?'light ':'dark'}`}>
        <div className="container-fluid">
          <Link style={{color:props.color==='dark'?'black':'white'}} className="navbar-brand" to="/">Delightful News</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent" >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
              <li className="nav-item" >
                <Link style={{color:props.color==='dark'?'black':'white'}}className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item"><Link style={{color:props.color==='dark'?'black':'white'}} className="nav-link active" aria-current="page" to="/Business">Business</Link></li>
              <li className="nav-item"><Link style={{color:props.color==='dark'?'black':'white'}} className="nav-link active" aria-current="page" to="/Entertainment">Entertainment</Link></li>
              <li className="nav-item"><Link style={{color:props.color==='dark'?'black':'white'}} className="nav-link active" aria-current="page" to="/General">General</Link></li>
              <li className="nav-item"><Link style={{color:props.color==='dark'?'black':'white'}} className="nav-link active" aria-current="page" to="/Health">Health</Link></li>
              <li className="nav-item"><Link style={{color:props.color==='dark'?'black':'white'}} className="nav-link active" aria-current="page" to="/Science">Science</Link></li>
              <li className="nav-item"><Link style={{color:props.color==='dark'?'black':'white'}} className="nav-link active" aria-current="page" to="/Sports">Sports</Link></li>
              <li className="nav-item"><Link style={{color:props.color==='dark'?'black':'white'}} className="nav-link active" aria-current="page" to="/Technology">Technology</Link></li>
             <li className="nav-item">
                <Link style={{color:props.color==='dark'?'black':'white'}} className="nav-link active" aria-current="page" to="/about">About Us</Link>
              </li>
            </ul>
            <div className="form-check form-switch" >
            <input className="form-check-input" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" style={{color:props.color==='dark'?'black':'white'}}  htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            {console.log(props.color,props.color==='white'?'black':'white')}
          </div>
          </div>
        </div>
      </nav>
    )
  
}

export default Navbar