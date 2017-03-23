import React, { Component } from 'react';
import Lightbox from 'react-images';

class Sample extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lightboxIsOpen: false
    };
  }

  closeLightbox() {

  }

  render() {

    return (
      <Lightbox
        images={[
          { src: 'http://cdn.playbuzz.com/cdn/198ec1e8-8193-4933-aa24-5ded04d68d0b/389ec9b6-9623-414e-894e-f197cf6f2374.jpg' },
          { src: 'https://farm3.staticflickr.com/2819/32765875954_71e25c9489_q.jpg' }
        ]}
        isOpen={this.state.lightboxIsOpen}
        onClickPrev={this.gotoPrevious}
        onClickNext={this.gotoNext}
        onClose={this.closeLightbox}
        />
    );
  }
}

export default Sample;
