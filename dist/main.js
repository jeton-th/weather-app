!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const o=document.querySelector(".search-bar"),r=document.querySelector(".location-icon"),c=(e,t)=>fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${t}&lon=${e}&units=metric&APPID=4e1f41a544e8138e1382d0bff94cc988`,{mode:"cors"}).then(e=>e.json()).then(e=>{(e=>{const t=document.querySelector("#content");for(;t.firstChild;)t.removeChild(t.firstChild);const n=document.createElement("img");n.setAttribute("src",`http://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`),t.appendChild(n);const o=document.createElement("p");o.innerHTML=`${e.main.temp} Celsius`,t.appendChild(o)})(e)}),i=()=>new Promise(e=>{e((()=>new Promise((e,t)=>navigator.geolocation.getCurrentPosition(e,t)).then(e=>e).catch(e=>e.message))())}).then(e=>{const t=e.coords.longitude.toFixed(2),n=e.coords.latitude.toFixed(2);c(t,n)});i(),r.addEventListener("click",()=>{i()}),function(){const e=new google.maps.places.SearchBox(o);e.addListener("places_changed",()=>{const t=e.getPlaces();if(0===t.length)return;const n=t[0].geometry.location.lng().toFixed(2),o=t[0].geometry.location.lat().toFixed(2);c(n,o)})}()}]);