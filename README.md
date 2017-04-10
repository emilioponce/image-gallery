# SPA IMAGE GALLERY

A Single-Page Application showing a responsive Flickr image gallery.
[Flickr API](https://www.flickr.com/services/api/).

## Stack
* React + Redux
* Jest
* Nodejs (v6.9.4 LTS) + Expressjs
* Webpack bundler
* FlickrAPI client

---

## Install instructions
```shell
> git clone https://github.com/emilioponce/image-gallery.git
> npm install (or yarn)
```

## Development environment
*Important: this is DEV environment, so webpack-dev-middleware and webpack-hot-middleware are enabled!*
#### Build BIG bundle.js
```shell
> npm run build:dev
```
#### Starting dev express server (listening at localhost:3000)
```shell
> npm start:dev
```
#### Test with Jest
```shell
> npm run test
```

## Production environment
#### Build optimized bundle.js
```shell
> npm run build
```
#### Starting express server (listening at localhost:3000)
```shell
> npm start
```


---

### Future improvements
* SSR - Server Side Rendering.
* More tests. Snapshots.
* Async image loading.
* LightBox. State deletion when close action is dispatched.
* LightBox. Unlimited caption text.
* Improve responsive behaviour. Better Flexbox integration.
* ES6 import of CSS. Webpack loader VS inline CSS.
* Improve CSS. Add Flickr Logo.
