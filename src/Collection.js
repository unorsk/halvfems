import React, { Component } from 'react'
import './css/Collection.css'

class Collection extends Component {
  render() {
    return (
      <div className="Collection">
        <h3><span className='h3'>{this.props.title}</span></h3>
        {this.props.tags.map(t => (<span key={t} className='tag'>{t}</span>))}
      </div>
    );
  }
}

export default Collection;
