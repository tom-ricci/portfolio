(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var niche = require("@tom-ricci/niche");

niche({
  "module": "fetcher",
  "args": [0, "./assets/names.json", function (data) {
    console.log(data);
  }]
});

},{"@tom-ricci/niche":2}],2:[function(require,module,exports){
const err = "Something went wrong. Check the wiki, and if you used this correctly, create an issue on github!";

module.exports = function(niche) {
  if(niche.module === "fetcher" && niche.args[0] != null && niche.args[1] != null && niche.args[2] != null) {
    const ft = niche.args[0];
    const url = niche.args[1];
    const action = niche.args[2];
    if(ft === 0) {
      return fetchJSON(url, action);
    }else if(ft === 1) {
      return fetchText(url, action);
    }else{
      return err;
    }
  }else{
    return err;
  }
};

/*
*
* +---------------------------+
* | M O D U L E S   B E L O W |
* +---------------------------+
*
* */

function fetchJSON(url, action) {
  fetch(url).then((response) =>
    response.json().then((data) => {
      action(data);
    })
  );
}

function fetchText(url, action) {
  fetch(url).then((response) =>
    response.text().then((data) => {
      action(data);
    })
  );
}
},{}]},{},[1]);
