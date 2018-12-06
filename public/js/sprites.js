//import * as PIXI from './pixi'
const PIXI = require('./pixi');

let app = new PIXI.Application({width: 256, height: 256});

document.body.appendChild(app.view);