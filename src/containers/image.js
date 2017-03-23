import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import  { fetchImageDetail } from '../actions/index';

class Image extends Component {

  render () {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <img
          src={this.props.url}
          alt={this.props.title}
          onClick={ () => this.props.fetchImageDetail(this.props.id)} />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators( { fetchImageDetail }, dispatch);
}

export default connect(null, mapDispatchToProps)(Image);
