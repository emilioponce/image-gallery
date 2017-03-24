# SPA IMAGE GALLERY

A Single-Page Application showing a responsive image gallery, using Flickr API.

### Stack
React + Redux + Jest + Nodejs (v6.9.4 LTS) + Expressjs + Webpack + FlickrAPI client

---

### Install instructions
```shell
> git clone https://github.com/emilioponce/image-gallery.git
> npm install
```

### Starting express server (listening at localhost:3000)
```shell
> npm start
```
*Important: this is dev environment so webpack-dev-middleware and webpack-hot-middleware are enabled!*


### Build (manual)
```shell
> npm run build
```

### Test with Jest
```shell
> npm run test
```
---

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
