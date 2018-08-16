import React, { Component } from 'react'
import Collection from './Collection.js'
import './css/App.css'
import images from './data/images/images'

class App extends Component {
  render() {
    return (
      <div className="App" id="App">
        <h2><span className='h2'>Hello, this is a collection of my moments</span></h2>

        {images.map(i => <Collection title={i.title} tags={i.tags} imgs={i.images} key={i.title} />)}

        <div className='footer'>
          You can reach me at <a className='twitter' href='https://twitter.com/un0rsk'>un0rsk</a>
        </div>
      </div>
    );
  }
}

export default App
