import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { fetchFlickr } from '../actions/index';
import { bindActionCreators } from 'redux';

const NUMBER_OF_ITEMS = 3;

class Paginator extends Component {

  generatePaginationLinks(){

    var currentPage = this.props.page;
    var totalPages = this.props.pages;

    //@TODO delete
    console.log("currentPage: ", currentPage);
    console.log("totalPages: ", totalPages);

    var links = [];
    var numberOfItems = 3;
    var paginationDownLimit = 1;
    var paginationUpperLimit = totalPages-NUMBER_OF_ITEMS;

    if(currentPage <= paginationUpperLimit) {
      for(let i = currentPage; numberOfItems > 0 ; i++) {
        //@TODO if i > paginationDownLimit, create previous link for navigation purpose
        //@TODO if i = currentPage change style to highlight current selected page
        links.push(<div key={i} onClick={()=> this.props.fetchFlickr(i)}><a href="#">{i}</a></div>);
        numberOfItems--;
      }
      links.push(<div key={totalPages} onClick={()=> this.props.fetchFlickr(totalPages)}><a href="#">{totalPages}</a></div>);
    } else {
      for( let i= paginationUpperLimit; i <= totalPages; i++){
        //@TODO if i = currentPage change style to highlight current selected page
        links.push(<div key={i} onClick={()=> this.props.fetchFlickr(i)}><a href="#">{i}</a></div>);
      }
    }
    return links;
  }

  render () {
    return (
      <div className="paginator">
        { this.generatePaginationLinks() }
      </div>
    )
  }

}

function mapDispatchToProps(dispatch){
  return bindActionCreators( { fetchFlickr }, dispatch);
}

export default connect(null, mapDispatchToProps)(Paginator);
