import React, { Component } from 'react';
import { connect } from 'react-redux';
import Lightbox from 'react-images';
import { bindActionCreators } from 'redux';

import  { closeLightBox } from '../actions/index';

class ImageDetail extends Component {

  constructor(props){
    super(props);
    this.closeLB = this.closeLB.bind(this);
  }

  closeLB(event) {
    this.props.closeLightBox();
  }

  // DISCLAIMER: react-images Lightbox package only supports 1 text field 'caption' beyond the image!
  getCaptionContent(){
    var image = this.props.image;
    var captionContent = [];
    captionContent.push(image.title._content);
    return captionContent;
    /*
    ownerUsername={image.owner.username}
    ownerRealname={image.owner.realname}
    ownerLocation={image.owner.location}
    imageMedia={image.media}
    imageDescription={image.description._content}
    takenDate={image.dates.taken}
    flickrUrl={image.urls.url._content}
    */
  }

  render() {

    var image = this.props.image;
    if(_.isEmpty(image)) {
      return <div></div>
    }

    return (
      <div>
        <Lightbox
          images={[{
            src: 'https://farm'+image.farm+'.staticflickr.com/'+image.server+'/'+image.id+'_'+image.secret+'.jpg',
            caption: this.getCaptionContent
          }]}
          isOpen={this.props.lightbox.lightboxIsOpen}
          onClose={this.closeLB}>
        </Lightbox>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return  {
    lightbox: state.lightBox,
    image: state.activeImage
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators( { closeLightBox }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageDetail);
