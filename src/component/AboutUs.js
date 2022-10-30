import React from 'react'
import Navbar from './Navbar'

export default function AboutUs(props) {
  return (
    <div>
        <Navbar/>
        <div className="cover-container d-flex h-100 p-3 mx-auto flex-column" style={{marginTop: '90px'}}>
      
      <main role="main" className="inner cover">
        <h1 className="cover-heading">Cover your page.</h1>
        <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
        <p className="lead">
          <a href="#" className="btn btn-lg btn-secondary">Learn more</a>
        </p>
      </main>

      <footer className="mastfoot mt-auto">
        <div className="inner">
          <p>Cover template for <a href="https://getbootstrap.com/">Bootstrap</a>, by <a href="https://twitter.com/mdo">@mdo</a>.</p>
        </div>
      </footer>
    </div>
    </div>
  )
}
