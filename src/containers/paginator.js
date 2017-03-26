import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { fetchImages } from '../actions/index';
import { bindActionCreators } from 'redux';

//@TODO NOT to config file as I'm going to change full paginator component
const NUMBER_OF_ITEMS = 3;

class Paginator extends Component {

  generatePaginationLinks(){

    var currentPage = this.props.page;
    var totalPages = this.props.pages;

    var links = [];
    var numberOfItems = 3;
    var paginationDownLimit = 1;
    var paginationUpperLimit = totalPages-NUMBER_OF_ITEMS;

    if(currentPage <= paginationUpperLimit) {
      for(let i = currentPage; numberOfItems > 0 ; i++) {
        //@TODO if i > paginationDownLimit, create previous link for navigation purpose
        //@TODO if i = currentPage change style to highlight current selected page
        links.push(<div className='paginator-page' key={i} onClick={()=> this.props.fetchImages(i)}><a href="#">{i}</a></div>);
        numberOfItems--;
      }
      links.push(<div className='paginator-page' key={totalPages} onClick={()=> this.props.fetchImages(totalPages)}><a href="#">{totalPages}</a></div>);
    } else {
      for( let i= paginationUpperLimit; i <= totalPages; i++){
        //@TODO if i = currentPage change style to highlight current selected page
        links.push(<div className='paginator-page' key={i} onClick={()=> this.props.fetchImages(i)}><a href="#">{i}</a></div>);
      }
    }
    return links;
  }

  render () {
    return (
      <div className='paginator'>
        { this.generatePaginationLinks() }
      </div>
    )
  }

}

function mapDispatchToProps(dispatch){
  return bindActionCreators( { fetchImages }, dispatch);
}

export default connect(null, mapDispatchToProps)(Paginator);
