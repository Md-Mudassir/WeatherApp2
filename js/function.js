//function to retrieve the elements
function weatherApp() {
  let cities = [
    { city: "Bangalore, Karnataka", Celcius: 25, Data: "Sunny ☀️" },
    { city: "Chennai, Tamil Nadu", Celcius: 15, Data: "Rainy 🌧️" },
    { city: "Adoni, Andhra Pradesh", Celcius: 30, Data: "Cloudy ☁️" },
    { city: "Bellary, Karnataka", Celcius: 10, Data: "Fog 🌫️" }
  ];
  let input = document.getElementById("pick").value;
  let CF = `<sup id="C" onclick="convertTempC()"> &degC |</sup><sup id="F" onclick="convertTempF()">&degF</sup>`;
  let filtred = cities
    .filter(n => n.city.includes(input))
    .map(x => ((city = x.city), (temp = x.Celcius), (data = x.Data)));
  document.getElementById("city").innerHTML = city;
  document.getElementById("data").innerHTML = data;
  document.getElementById("temp").innerHTML = temp + CF;
}

// day and time functions
function addZero(i) {
  if (i < 10) {
    i = 0 + i;
  }
  return i;
}

function Time() {
  var weekdays = new Array(7);
  weekdays[0] = "Sunday";
  weekdays[1] = "Monday";
  weekdays[2] = "Tuesday";
  weekdays[3] = "Wednesday";
  weekdays[4] = "Thursday";
  weekdays[5] = "Friday";
  weekdays[6] = "Saturday";

  var d = new Date();
  weekday_value = d.getDay();
  var x = document.getElementById("date");
  var h = addZero(d.getHours());
  var m = addZero(d.getMinutes());
  x.innerHTML = weekdays[weekday_value] + ", " + h + ":" + m;
}

//to convert C to F and viceversa
function convertTempF() {
  let CF = `<sup id="C" onclick="convertTempC()"> &degC |</sup><sup id="F" onclick="convertTempF()">&degF</sup>`;
  let C = temp;
  let Fer = Math.round((C * 9) / 5 + 32);
  document.getElementById("temp").innerHTML = Fer + CF;
}

function convertTempC() {
  let CF = `<sup id="C" onclick="convertTempC()"> &degC |</sup><sup id="F" onclick="convertTempF()">&degF</sup>`;
  let C = temp;
  document.getElementById("temp").innerHTML = C + CF;
}
