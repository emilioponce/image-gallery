import React, { Component } from 'react';

class Image extends Component {

  render () {
    return (
      <div>
        <div>
          <h3>{this.props.title}</h3>
          <img width='300px' src={this.props.url} alt={this.props.title}/>
          <div>Owner: {this.props.owner}</div>
        </div>
      </div>
    )
  }
}

export default Image;
