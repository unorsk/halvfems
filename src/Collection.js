import React, { Component } from 'react'
import './css/Collection.css'

class Collection extends Component {
  render() {
    return (
      <div className="Collection">
        <h3><span className='h3'>{this.props.title}</span></h3>
        <div className='CollectionContainer'>
          {this.props.imgs.map(i => (<div style={{'backgroundImage': `url(${i})`}} className='Image' key={i} />))}
          {/* {this.props.imgs.map(i => (<img src={i} alt='img' className='Image' key={i} />))} */}
        </div>
        {this.props.tags.map(t => (<span key={t} className='tag'>{t}</span>))}
      </div>
    )
  }
}

export default Collection
