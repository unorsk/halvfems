import React, { Component } from 'react'
import Collection from './Collection.js'
import './css/App.css'

class App extends Component {
  componentWillMount() {
    fetch("http://127.0.0.1:4200")
      .then(r => console.log(r))
  }

  render() {
    return (
      <div className="App">
        <h2><span className='h2'>Hello, this is a collection of my moments</span></h2>

        <Collection title='Mallorca' tags={['mallorca', 'spain']} />
        <Collection title='Tenerife' tags={['tenerife', 'spain']} />
        <Collection title='Rotterdam' tags={['rottterdam', 'netherlands']} />

        <div className='footer'>
          You can reach me at <a className='twitter' href='https://twitter.com/un0rsk'>un0rsk</a>
        </div>
      </div>
    );
  }
}

export default App;
