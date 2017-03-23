import React, { Component } from 'react';
import { connect } from 'react-redux';

class ImageDetail extends Component {

  render () {

    if(!this.props.image){
      return <div>loading image...</div>
    }

    var image = this.props.image;

    return (
      <div> id:  {image.id} </div>
    )
  }
}

function mapStateToProps(state) {
  return  {
    image: state.activeImage
  };
}

export default connect(mapStateToProps)(ImageDetail);
