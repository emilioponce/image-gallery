import React, { Component } from 'react';

import ImageDetail from './containers/image-detail';

class App extends Component {

  render() {
    return (
      <div>
        <div className="header">
          <h1>SPA Image Gallery</h1>
        </div>
        <div className="container">
          <ImageDetail/>
        </div>
        <div className="footer">
          <a href='https://github.com/emilioponce/'>emilioponce's github</a>
        </div>
      </div>
    );
  }
}

export default App;
