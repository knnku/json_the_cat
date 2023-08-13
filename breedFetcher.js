const request = require("request");

const fetchBreedDescription = function (breed, callback) {
  request(
    "https://api.thecatapi.com/v1/breeds/search?q=" + breed,
    (error, response, body) => {
      if (error && error.code === "ENOTFOUND") { //Check if errors were caught at server connection
        callback("Error: There was an error with the server.", null);
        return;
      }
      const data = JSON.parse(body);
      if (data.length === 0) { //Check if the requested array(JSON data) has content
        callback("The breed entered does not exist.", null);
        return;
      }
      //Return description key from json object
      callback(null, data[0].description);
    }
  );
};

module.exports = { fetchBreedDescription };
