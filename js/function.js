// API key from openweathermap.org
const appKey = "82005d27a116c2880c8f0fcb866998a0";

// declaring variables
let tempr;
let searchInput = document.getElementById("search-txt");
let cityName = document.getElementById("city");
let icon = document.getElementById("data");
let temperature = document.getElementById("temp");

// to display date
let weekdays = new Array(7);
weekdays[0] = "Sunday";
weekdays[1] = "Monday";
weekdays[2] = "Tuesday";
weekdays[3] = "Wednesday";
weekdays[4] = "Thursday";
weekdays[5] = "Friday";
weekdays[6] = "Saturday";

let current_date = new Date();

weekday_value = current_date.getDay();

document.getElementById("date").innerHTML = weekdays[weekday_value];

// getting an input from user
searchInput.addEventListener("keypress", enterPressed);

function enterPressed(event) {
  if (event.key === "Enter") {
    findWeatherDetails();
  }
}

// API function
findWeatherDetails = () => {
  if (searchInput.value === "") {
  } else {
    let searchLink =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      searchInput.value +
      "&appid=" +
      appKey;
    httpRequestAsync(searchLink, theResponse);
  }
};

// parsing and assigning the objects to elements
theResponse = response => {
  let jsonObject = JSON.parse(response);
  cityName.innerHTML = jsonObject.name;
  tempr = parseInt(jsonObject.main.temp - 273);
  icon.src =
    "http://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png";
  temperature.innerHTML = `${tempr} ${CF}`;

  if (temperature.innerHTML >= "20" && temperature.innerHTML < "30") {
    document.getElementById("box2").style.background = "rgb(247, 226, 109)";
  } else if (temperature.innerHTML >= "30" && temperature.innerHTML < "40") {
    document.getElementById("box2").style.background = "rgb(255, 112, 112)";
  } else {
    document.getElementById("box2").style.background = "rgb(189, 183, 183)";
  }
};

// retriving the data object
httpRequestAsync = (url, callback) => {
  let httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = () => {
    if (httpRequest.readyState == 4 && httpRequest.status == 200)
      callback(httpRequest.responseText);
  };
  httpRequest.open("GET", url, true); // true for asynchronous
  httpRequest.send();
};

//Reference for Celcius & Ferhanite Letters
let CF = `<sup id="C" onclick="convertTempC()"> &degC |</sup><sup id="F" onclick="convertTempF()">&degF</sup>`;

//To convert C to F and viceversa
convertTempF = () => {
  let C = tempr;
  let Fer = Math.round((C * 9) / 5 + 32);
  document.getElementById("temp").innerHTML = ` ${Fer}  ${CF}`;
};

convertTempC = () => {
  let C = tempr;
  document.getElementById("temp").innerHTML = ` ${C}  ${CF}`;
};
