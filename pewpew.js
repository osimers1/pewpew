// class canon {
//     constructor(ctx, canonXPos = null){
//         this.ctx = ctx;
//         this.canonXPos = canonXPos;
//     }

//     drawCanon(){
//         ctx.beginPath();
//         ctx.rect(canonXPos+5, canvas.height-15, 15, 5);
//         ctx.fill();
//         ctx.closePath();
//     }
// }
// var f = function(){
//     var canvas = document.getElementsByTagName('canvas')[0];
//     var canon = canvas.getContext('2d');

//     canon.beginPath();
//     // canon.moveTo(800, 200);
//     // canon.lineTo(0, 800);
//     // canon.stroke();
//     canon.fillRect(275, 550, 50, 50);
// }

// window.addEventListener('load', f, false);


function Sprite( filename, left, top){
    this._node = document.createElement('img');
    this._node.src = filename;
    this._node.style.position = 'absolute';
    document.body.appendChild(this._node);


    Object.defineProperty(this, "left", {
        get: function(){
            return this._left;
        },
        set: function( value ) {
            this._left = value;
            this._node.style.left = value + "px";
        }
    });

    Object.defineProperty( this, "top", {
        get: function(){
            return this._top;
        },
        set: function(value){
            this._top = value;
            this._node.style.top = value + "px"
        }
    });

    Object.defineProperty(this, "display", {
        get: function(){
            return this._node.style.display;
        },
        set: function(value){
            this._node.style.display = value;
        }
    });

    this.left = left;
    this.top = top;
    
}


//------------------------deplacement-----------------------------------

document.onkeydown = function(event){
//--------------haut gauche---------------
    if(event.keyCode == 103){ 
        vaisseau.left -= 10;
        vaisseau.top -=10;
    }
//------------------haut------------------
    else if (event.keyCode == 104){ 
        vaisseau.top -= 10;
    }
//--------------haut droite---------------
    else if(event.keyCode == 105){
        vaisseau.left +=10;
        vaisseau.top -= 10;
    }
//-----------------gauche-----------------
    else if(event.keyCode == 100){
        vaisseau.left -= 10;
    }
//-----------------droite-----------------
    else if(event.keyCode == 102){
        vaisseau.left += 10;
    }
//--------------bas gauche----------------
    else if(event.keyCode == 97){
        vaisseau.left -=10;
        vaisseau.top += 10;
    }
//-----------------bas--------------------
    else if(event.keyCode == 98){
        vaisseau.top += 10;
    }
//--------------bas droite----------------
    else if(event.keyCode == 99){
        vaisseau.left +=10;
        vaisseau.top += 10;
    }

    if(vaisseau.left < 0){
        vaisseau.left = 0;
    } 
    if(vaisseau.left > document.body.clientWidth - vaisseau._node.width){
        vaisseau.left = document.body.clientWidth - vaisseau._node.width;
    }
    if(vaisseau.top < 0){
        vaisseau.top = 0;
    } 
    if(vaisseau.top > document.body.clientHeight - vaisseau._node.height){
        vaisseau.top = document.body.clientHeight - vaisseau._node.height;
    } 

}


var vaisseau = new Sprite("/assets/img/vaisseau.png", 400, 400);
var alien1 = new Sprite('assets/img/alien1.png', 10, 10);
var laser = new Sprite("assets/img/laser.png", 750, 560);