window.onload = function () {
    import * as config from '../../package.json';
    //const config = require('../../package.json');
    let versionContainer = document.getElementById("version");

    console.debug(config.version);
    versionContainer.innerHTML = config.version;

    // The following line causes trouble, not sure how to fix it 
    //import * as PIXI from 'pixi';
    
    

    let app = new PIXI.Application({
        width: 256,
        height: 256
    });

    document.body.appendChild(app.view);
}