import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { fetchFlickr } from '../actions/index';
import { bindActionCreators } from 'redux';
import Image from '../components/image';

const INITIAL_PAGE = 1;

class ImageGallery extends Component {

  componentDidMount(){
    this.props.fetchFlickr(INITIAL_PAGE);
  }

  renderList() {
    return this.props.images.map((image) => {
      return (
          <Image key={image.title} title={image.title} url={image.url} owner={image.owner} />
      )
    });
  }

  render () {
    var images = this.props.images;
    if(images.length===0) {
      return <div>loading images ...</div>
    }

    return (
      <div>
        {this.renderList()}
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

export default connect(mapStateToProps, mapDispatchToProps)(ImageGallery);
