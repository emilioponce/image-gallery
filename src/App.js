import React, { Component } from 'react';

import ImageGallery from './containers/image-gallery';

class App extends Component {

  render() {
    return (
      <div>
        <header>
          <h1>SPA Image Gallery</h1>
        </header>
        <main>
          <ImageGallery/>
        </main>
        <footer>
          <div>
            <a href='https://github.com/emilioponce/'>emilioponce's github</a>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
