import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import  { fetchFlickr } from '../actions/index';
import Paginator from './paginator';
import Image from '../components/image';

const INITIAL_PAGE = 1;

class ImageGallery extends Component {

  componentDidMount(){
    this.props.fetchFlickr(INITIAL_PAGE);
  }

  renderList() {
    return this.props.imagesPage.images.map((image) => {
      return (
        <Image key={image.url} title={image.title} url={image.url} owner={image.owner} />
      )
    });
  }

  render () {
    var imagesPage = this.props.imagesPage;
    if(_.isEmpty(imagesPage)) {
      return <div>loading images ...</div>
    }
    return (
      <div>
        { this.renderList() }
        <Paginator page={imagesPage.page} pages={imagesPage.pages} />
      </div>
    )
  }
}

function mapStateToProps({ imagesPage }){
  return { imagesPage };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators( { fetchFlickr }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageGallery);
