import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import  { fetchFlickr } from '../actions/index';
import Paginator from './paginator';
import Image from '../components/image';
import { Grid, Row, Col } from 'react-flexbox-grid';


const INITIAL_PAGE = 1;
const IMAGES_PER_ROW = 4;

class ImageGallery extends Component {

  componentDidMount(){
    this.props.fetchFlickr(INITIAL_PAGE);
  }

  renderColumns() {
    var images = this.props.imagesPage.images;
    return images.map((image) => {
      return (
        <Col key={image.url} className="col" xs={3} sm={2} md={2} lg={2}>
          <Image title={image.title} url={image.url} owner={image.owner} />
        </Col>)
      });
    }

    render () {

      var imagesPage = this.props.imagesPage;
      if(_.isEmpty(imagesPage)) {
        return <div>loading images ...</div>
      }

      return (
        <div>
          <Grid fluid>
            <Row>
            { this.renderColumns() }
            </Row>
          </Grid>
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
