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

  // NOTE: react-images Lightbox package only supports 1 text field called 'caption' beyond the image!
  getCaptionContent(){
    let image = this.props.image;
    let title = image.title._content ? image.title._content : 'No title';
    let ownerUserName = image.owner.username ? image.owner.username : 'anonymous';
    let ownerRealName = image.owner.realname ? image.owner.realname : 'not provided';
    let flickrUrl = image.urls.url[0]._content ? image.urls.url[0]._content : 'not provided';
    return title+' by '+ ownerUserName + ' ('+ownerRealName+'). Flickr Url: '+flickrUrl;
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
            caption: this.getCaptionContent()
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
