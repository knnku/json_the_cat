const breed = process.argv.slice(2);
const fetchBreedDescription = require("./breedFetcher");



fetchBreedDescription(breed, (error, description) => {

});