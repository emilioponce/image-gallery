import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { fetchFlickr } from '../actions/index';
import { bindActionCreators } from 'redux';


class ImageDetail extends Component {

  componentDidMount(){
    this.props.fetchFlickr();
  }

  render () {
    // testing only one image
    var image = this.props.images[0];
    if(!image){
      return <div>loading image ...</div>
    }

    return (
      <div>
        <div>
          <img src={image.url} alt={image.caption}/>
          <div>Author: {image.author}</div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ images }){
  return { images };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators( { fetchFlickr }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageDetail);
