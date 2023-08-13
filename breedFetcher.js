const request = require("request");
const breed = process.argv.slice(2);

request(
  "https://api.thecatapi.com/v1/breeds/search?q=" + breed,
  (error, response, body) => {
    if (error && error.code === "ENOTFOUND") {
      return console.log("Error: There was an error with the server.");
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      return console.log("The breed entered does not exist.");
    }

    console.log(data[0].description);
  }
);
