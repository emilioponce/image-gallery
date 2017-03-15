import {FETCH_DATA} from '../actions/index';

export default function(state= [], action) {

  switch(action.type) {
    case FETCH_DATA:
    // action.payload.data etc... resulting promise
    console.log(action.payload.data);
    return getDomainImages();
    default:
    return state;
  }
}

// constructs domain objects using info from API
function getDomainImages(){

// mocking Flickr API
  return [
    {
      url: 'http://dogtowndogtraining.com/wp-content/uploads/2012/06/300x300-061-e1340955308953.jpg',
      author: 'Joselito',
      caption: 'bla bla bla'
    }
  ];
}
