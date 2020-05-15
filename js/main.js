"use strict"

/* OOP- object orientde programming- objektinis programavimas */

/* class- pagrindinis daykas */
/* objektas- classes gaminys(pyragas)*/


//params
//ressolution
//ratio
//color
//remote ture/false
//type: flat/ crt


//metodai: ka galima su juo daryti?
//ijungtii/isjungti
//pekeisti kanala
//keisti garsa

class Tv {
    constructor( resolution, ratio, color, remote, type ) {
        this.name = name;
        this.resolution = resolution;
        this.ratio = ratio;
        this.color = color;
        this.hasremote = remote;
        this.type = type;

        this.turnedON = false;
        this.channel = '';
        this. vollume = 20;
    }
    turnOn() {
        if(this.turnedON) {
        console.log(this.name +'already is turned on.');
            return;
        }
        this.turnedON = true;
        console.log(this.name +'has been turned on.');
        
    }
    turnOff() {
        if(this.turnedON) {
            console.log(this.name +'already is turned off.');
                return;
            }
        this.turnedOff = false;
        console.log(this.name +'has been turned off.');
    }
    changeVollume(levelChange){
        this.volume+= levelChange;
        if(this.volume>100){
            this.vollume=100;
        }
        if(this.vollume<0){
            this.vollume=0;
        }
        console.log(this.name+'volume changed to' + this.vollume+'.');
        console.log(`${this.name} this.vollume changed to ${this.vollume}.`);  
    };
    currentVollume(  ){
        console.log(`Current vollume for${this.name} is ${this.vollume} `);
        
    }

}

const silelis = new Tv( 'silelis',[4000, 3000], [4, 3], 'black', false, 'CRT');
console.log( silelis );

const lg = new Tv('lg', [8000,500], [5,2],'silver', true, 'flat')
console.log(lg);

// silelis.turnOn();
// silelis.turnOff();
// silelis.turnOn();

lg.turnOn();
lg.changeVollume(30);
lg.turnOff();
lg.turnOff();
lg.turnOn();
lg.currentVollume();
