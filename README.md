# [Webpack](https://github.com/webpack/webpack) v2 by example

> Lets learn WebPack : The module bundler

**See webpack-1 branch for v1**

### Prerequisites
* node js >=6.9.1
* npm >=3.10.9

### Quick Start
* Clone this repo, checkout to desired branch
```
# Install dependencies
npm install

# Run dev server at localhost:9000
npm run dev

```
* Generate dist (production ready) files
```
npm run build
```

### Resources 
* https://webpack.js.org
* https://blog.madewithenvy.com/getting-started-with-webpack-2-ed2b86c68783#.ipfjd5f1r
* https://github.com/webpack/webpack/tree/master/examples
* https://webpack.github.io
* https://css-tricks.com/css-modules-part-2-getting-started/
* http://jamesknelson.com/webpack-made-simple-build-es6-less-with-autorefresh-in-26-lines/
* http://survivejs.com/webpack
* https://github.com/petehunt/webpack-howto
* https://github.com/ruanyf/webpack-demos
* http://angular-tips.com/blog/2015/06/using-angular-1-dot-x-with-es6-and-webpack/
* http://jamesknelson.com/writing-happy-stylesheets-with-webpack/
* http://jonnyreeves.co.uk/2016/simple-webpack-prod-and-dev-config/
* https://medium.com/@rajaraodv/webpack-the-confusing-parts-58712f8fcad9#.g7v5zj3i3
* https://medium.com/@dabit3/beginner-s-guide-to-webpack-b1f1a3638460#.hex174nxy
* https://medium.com/@khanght/optimize-webpack-production-build-ec594242b222#.xudejenij
* http://www.theodo.fr/blog/2016/07/a-comprehensive-introduction-to-webpack-the-module-bundler/
* https://medium.com/@dtothefp/why-can-t-anyone-write-a-simple-webpack-tutorial-d0b075db35ed#.vvr14ll0p

### Directory Structure 

```
├── project-name/
│   ├── dist/
│   │   ├── js/
│   │   ├── css/
│   │   └──  index.html
│   ├── node_modules/
│   ├── src/
│   │   ├── img/
│   │   ├── js/
│   │   ├── css/
│   │   ├── index.js
│   │   └──  index.html
│   ├──  .gitignore
│   ├──  webpack.config.js
│   └──  package.json

```

### TODO
* Test everything with [Webpack v2.0](https://webpack.js.org/) stable 
* Non-js assets are not being loaded, fix it 

### License
MIT [License](LICENSE.txt)
