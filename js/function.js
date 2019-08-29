//function to retrieve the elements
function weatherApp() {
  let cities = [
    { city: "Bangalore", Celcius: 25, Data: "Sunny" },
    { city: "Chennai", Celcius: 15, Data: "Rainy" },
    { city: "Adoni", Celcius: 30, Data: "Cloudy" },
    { city: "Bellary", Celcius: 40, Data: "Hot" }
  ];
  let input = document.getElementById("pick").value;
  let filtred = cities
    .filter(n => n.city === input)
    .map(x => ((city = x.city), (temp = x.Celcius), (data = x.Data)));
  document.getElementById("city").innerHTML = city;
  document.getElementById("data").innerHTML = data;
  document.getElementById("temp").innerHTML = temp + " &degC | &degF";

  //to show the date
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



