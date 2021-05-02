let niche = require("@tom-ricci/niche");
niche({"module": "fetcher", "args": [0, "./assets/names.json", function(data) {
  document.getElementById("email").setAttribute("href", "mailto:" + data.names[Math.floor(Math.random() * data.names.length)].replace("?", "").replace(",", "") + "@thomasricci.dev");
  document.getElementById("email2").setAttribute("href", "mailto:" + data.names[Math.floor(Math.random() * data.names.length)].replace("?", "").replace(",", "") + "@thomasricci.dev");
  document.getElementById("email3").setAttribute("href", "mailto:" + data.names[Math.floor(Math.random() * data.names.length)].replace("?", "").replace(",", "") + "@thomasricci.dev");
  document.getElementById("email4").setAttribute("href", "mailto:" + data.names[Math.floor(Math.random() * data.names.length)].replace("?", "").replace(",", "") + "@thomasricci.dev");
}]});