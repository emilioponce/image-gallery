import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ReactPaginate from 'react-paginate';

import  { fetchImages } from '../actions/index';
import Image from '../containers/image';
import ImageDetail from '../containers/image-detail';
import { INITIAL_PAGE } from '../config/properties';

class ImageGallery extends Component {

  constructor(props){
    super(props);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  componentDidMount(){
    this.props.fetchImages(INITIAL_PAGE);
  }

  renderColumns() {
    var images = this.props.imagesPage.images;
    return images.map((image) => {
      return (
        <Col key={image.url} className="col" xs={3} sm={2} md={2} lg={2}>
          <Image id={image.id} title={image.title} url={image.url}/>
        </Col>)
      });
    }

    handlePageClick(data) {
      let selected = data.selected+1;
      this.props.fetchImages(selected);
    };

    render () {
      var imagesPage = this.props.imagesPage;
      if(_.isEmpty(imagesPage)) {
        return <div>loading images ...</div>
      }

      return (
        <div>
          <div><ImageDetail/></div>
          <Grid fluid>
            <Row>
              { this.renderColumns() }
            </Row>
          </Grid>
          <ReactPaginate
            previousLabel='<'
            nextLabel='>'
            breakLabel='...'
            pageCount={imagesPage.pages}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            onPageChange={this.handlePageClick}
            containerClassName='paginator'
            pageClassName='paginator-page'
            previousClassName='paginator-button'
            nextClassName='paginator-button'
            breakClassName='paginator-button'
            activeClassName='paginator-page-active'
            />
        </div>
      )
    }
  }

  function mapStateToProps({ imagesPage }){
    return { imagesPage };
  }

  function mapDispatchToProps(dispatch){
    return bindActionCreators( { fetchImages }, dispatch);
  }

  export default connect(mapStateToProps, mapDispatchToProps)(ImageGallery);
