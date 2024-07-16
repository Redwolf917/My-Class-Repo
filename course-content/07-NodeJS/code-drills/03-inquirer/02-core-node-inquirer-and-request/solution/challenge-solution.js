// require request and inquirer
const request = require("request");
const inquirer = require("inquirer")


// Use your own API key here
const api_key = "444138542c9de2031e7cb5ad505031f6";

// define the query URL
const queryURL = "http://api.openweathermap.org/data/2.5/weather?units=imperial&APPID="+api_key+"&q=";

inquirer.prompt([
  {
    type: "input",
    message: "Which city do you want to see the weather for? ",
    name: "userCity"
  }
]).then(function(userChoice) {
  request(queryURL+userChoice.userCity, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      const cityWeather = JSON.parse(body);
      console.log(cityWeather.name, cityWeather.sys.country);
      console.log(cityWeather.weather[0].description)
    } else {
      console.log(error)
    }
  })
})
