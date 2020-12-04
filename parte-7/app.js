"use strict";
var prom1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('promesa terminada');
        resolve();
        //reject();
    }, 1500);
});
prom1.then(function () {
    console.log('se ejecuta cuando termine bien');
}, function () {
    console.error('ejecutar en caso de error');
});
