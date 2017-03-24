## SPA IMAGE GALLERY

A Single-Page Application showing a responsive image gallery, using Flickr API.

### Stack
React + Redux + Jest + Nodejs (v6.9.4 LTS) + Expressjs + Webpack + FlickrAPI client


### Install instructions
> git clone https://github.com/emilioponce/image-gallery.git
> npm install

### Build
> npm run build

### Starting express server (listening at localhost:3000)
> npm run start

### Test with Jest
> npm run test


### Future improvements
* SSR - Server Side Rendering.
* More tests with Jest. Unit, Integration, Snapshots.
* Redux-Promise/axios => Redux-Thunk.
* Async image loading.
* LightBox. State deletion when close action is dispatched.
* LightBox. Unlimited caption text.
* New pagination container.
* Improve responsive behaviour. Better Flexbox integration.
* Environment profiles. Minification in production. Bundle size.
* ES6 import of CSS. Webpack loader VS inline CSS.
* Improve design. Add FLickr Logo.
* Image hover will show title.
