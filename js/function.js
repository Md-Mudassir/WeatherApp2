function weatherApp() {
  let cities = [
    { city: "Bangalore", Celcius: 25, Data: "Sunny" },
    { city: "Chennai", Celcius: 15, Data: "Rainy" },
    { city: "Adoni", Celcius: 30, Data: "Cloudy ,img:☁️" },
    { city: "Bellary", Celcius: 40, Data: "Hot" }
  ];
  let input = document.getElementById("pick").value;
  let filtred = cities
    .filter(n => n.city === input)
    .map(x => ((city = x.city), (temp = x.Celcius), (data = x.Data)));
  document.getElementById("city").innerHTML = city;
  document.getElementById("data").innerHTML = data;
  document.getElementById("temp").innerHTML = temp + " &degC | &degF";

  var weekdays = new Array(7);
  weekdays[0] = "Sunday";
  weekdays[1] = "Monday";
  weekdays[2] = "Tuesday";
  weekdays[3] = "Wednesday";
  weekdays[4] = "Thursday";
  weekdays[5] = "Friday";
  weekdays[6] = "Saturday";

  var current_date = new Date();

  weekday_value = current_date.getDay();

  document.getElementById("date").innerHTML = weekdays[weekday_value];
}

function convert(degree) {
  let x;
  if (degree == "C") {
    x = (document.getElementById("temp").value * 9) / 5 + 32;
    document.getElementById("temp").value = Math.round(x);
  } else {
    x = ((document.getElementById("temp").value - 32) * 5) / 9;
    document.getElementById("temp").value = Math.round(x);
  }
}
//to show date
// n = new Date();
// y = document.getElementById("date").innerHTML = n;

// store the value in temp
// let city = document.getElementById("choose").value;
// // display the city name from the given input
// // document.getElementById("city").innerHTML = temp;
// // fetch the value from objects based on the given key
// document.getElementById("temprature").innerHTML =
//   temp + " : " + cities[temp] + " &deg C";

// if ((document.getElementById("temprature").innerHTML = "undefined")) {
//   document.getElementById("temprature").innerHTML = " City Name?";
// }
//
// }
