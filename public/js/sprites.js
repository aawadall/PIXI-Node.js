window.onload = function () {
    
    // The following line causes trouble, not sure how to fix it 
    import * as PIXI from 'pixi';
    

    let app = new PIXI.Application({
        width: 256,
        height: 256
    });

    document.body.appendChild(app.view);
}