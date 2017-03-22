import React, { Component } from 'react';

import ImageGallery from './containers/image-gallery';

class App extends Component {

  render() {
    return (
      <div>
        <header className="page-row">
          <h2>SPA Image Gallery</h2>
        </header>
        <main className="page-row page-row-expanded">
          <ImageGallery/>
        </main>
        <footer className="page-row">
          <div className="inner-footer">
            <a href='https://github.com/emilioponce/'>emilioponce's github</a>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
