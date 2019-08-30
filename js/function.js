//function to retrieve the elements
function weatherApp() {
  let cities = [
    { city: "Bangalore, Karnataka", Celcius: 25, Data: "Sunny ☀️" },
    { city: "Chennai, Tamil Nadu", Celcius: 15, Data: "Rainy 🌧️" },
    { city: "Adoni, Andhra Pradesh", Celcius: 30, Data: "Cloudy ☁️" },
    { city: "Bellary, Karnataka", Celcius: 10, Data: "Fog 🌫️" }
  ];
  let input = document.getElementById("pick").value;
  let CF = `<sup id="C" onclick="convertTemp()"> &degC |</sup><sup id="F" onclick="convertTemp()">&degF</sup>`;
  let filtred = cities
    .filter(n => n.city.includes(input))
    .map(x => ((city = x.city), (temp = x.Celcius), (data = x.Data)));
  document.getElementById("city").innerHTML = city;
  document.getElementById("data").innerHTML = data;
  document.getElementById("temp").innerHTML = temp + CF;
}

// function Celcius() {
//   document.getElementById("temp").innerHTML =
//     "4" +
//     `<sup id="C" onclick="convertTemp()"> &degC |</sup><sup id="F" onclick="convertTemp()">&degF</sup>`;
//   // temp1 = (document.getElementById("temp").value * 9) / 5 + 32;
//   // document.getElementById("temp").innerHTML = Math.round(temp1);
// }

// function Farhenite() {
//   document.getElementById("F");
// }

// day and time functions
function addZero(i) {
  if (i < 10) {
    i = "0" + i;
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
  var s = addZero(d.getSeconds());
  x.innerHTML = weekdays[weekday_value] + ", " + h + ":" + m;
}

function convertTemp() {
  var C = document.getElementById("temp"),
    F = document.getElementById("temp");

  if (C.value != "") {
    F.value = Math.round((C.value * 9) / 5 + 32);
    C.value = "";
  } else {
    C.value = Math.round(((F.value - 32) * 5) / 9);
    F.value = "";
  }
}
