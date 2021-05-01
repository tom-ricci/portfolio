let niche = require("@tom-ricci/niche");
niche({"module": "fetcher", "args": [0, "./assets/names.json", function(data) {
  console.log(data);
}]});