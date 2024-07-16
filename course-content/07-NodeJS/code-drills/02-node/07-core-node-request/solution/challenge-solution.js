// require request
const request = require("request");

// grab the user command line input
let zip = process.argv[2];
if (!zip) {
  zip = 94123;
}

// Use your own API key here
const api_key = "";

// define the query URL
const queryURL =
  "http://api.openweathermap.org/data/2.5/forecast?units=imperial&zip=" +
  zip +
  ",us&APPID=" +
  api_key;

request(queryURL, function (error, response, body) {
  if (!error && response.statusCode === 200) {
    const forecast = JSON.parse(body).list;

    for (let i = 0; i < forecast.length; i++) {
      console.log(forecast[i].dt_txt, forecast[i].main.temp);
    }
  } else {
    console.log(error);
  }
});
