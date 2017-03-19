import React, { Component } from 'react';

import ImageGallery from './containers/image-gallery';

class App extends Component {

  render() {
    return (
      <div>
        <div className="header">
          <h1>SPA Image Gallery</h1>
        </div>
        <div className="container">
          <ImageGallery/>
        </div>
        <div className="footer">
          <a href='https://github.com/emilioponce/'>emilioponce's github</a>
        </div>
      </div>
    );
  }
}

export default App;
