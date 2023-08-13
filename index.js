const breed = process.argv.slice(2);
const { fetchBreedDescription } = require("./breedFetcher");



fetchBreedDescription(breed, (error, description) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(description);
  }
});