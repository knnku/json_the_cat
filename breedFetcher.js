const request = require("request");

request(
  "https://api.thecatapi.com/v1/breeds/search?q=sib",
  (error, reponse, body) => {
    if (error) {
      console.log(error);
      return;
    }

    const data = JSON.parse(body);

    console.log(data[0].description, typeof data);
  }
);
