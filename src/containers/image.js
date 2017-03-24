import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import  { fetchImageDetail, openLightBox } from '../actions/index';

class Image extends Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.fetchImageDetail(this.props.id);
    // opening Lightbox with selected activeImage content
    this.props.openLightBox();
  }

  render () {
    return (
      <div>
        <img
          src={this.props.url}
          alt={this.props.title}
          onClick={ this.handleClick } />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators( { fetchImageDetail, openLightBox }, dispatch);
}

export default connect(null, mapDispatchToProps)(Image);
