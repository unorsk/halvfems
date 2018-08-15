import React, { Component } from 'react'
import Collection from './Collection.js'
import './css/App.css'

import img from './data/images/fuerteventura/DSC01477.jpg'
import img1 from './data/images/fuerteventura/DSC01683.jpg'
import img2 from './data/images/fuerteventura/DSC01832.jpg'
import img3 from './data/images/fuerteventura/DSC01869.jpg'
import img4 from './data/images/fuerteventura/DSC01456.jpg'

import img11 from './data/images/rotterdam/DSC05603.jpg'
import img12 from './data/images/rotterdam/DSC05609.jpg'
import img13 from './data/images/rotterdam/DSC05629.jpg'
import img14 from './data/images/rotterdam/DSC05638.jpg'

import img21 from './data/images/sicily/DSC05678.jpg'
import img22 from './data/images/sicily/DSC05726.jpg'
import img23 from './data/images/sicily/DSC05832.jpg'
import img24 from './data/images/sicily/DSC05838.jpg'
import img25 from './data/images/sicily/DSC05850.jpg'
import img26 from './data/images/sicily/DSC05886.jpg'
import img27 from './data/images/sicily/DSC05934.jpg'

class App extends Component {
  componentWillMount() {
    fetch("http://127.0.0.1:4200")
      .then(r => console.log(r))
  }

  render() {
    const fuerte = [img, img1, img2, img3, img4];
    const rotterdam = [img11, img12, img13, img14];
    const sicily = [img21, img22, img23, img24, img25, img26, img27];
    return (
      <div className="App">
        <h2><span className='h2'>Hello, this is a collection of my moments</span></h2>

        <Collection title='Fuerteventura' tags={['fuerteventura', 'spain']} imgs={fuerte} />
        <Collection title='Sicily' tags={['sicily', 'italy']} imgs={sicily} />
        <Collection title='Rotterdam' tags={['rottterdam', 'netherlands']} imgs={rotterdam} />

        <div className='footer'>
          You can reach me at <a className='twitter' href='https://twitter.com/un0rsk'>un0rsk</a>
        </div>
      </div>
    );
  }
}

export default App;
