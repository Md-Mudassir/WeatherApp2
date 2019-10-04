// to retrieve the Celcius & Farhenite elements
let CF = `<sup id="C" onclick="convertTempC()"> &degC |</sup><sup id="F" onclick="convertTempF()">&degF</sup>`;
let colors = document.getElementsByClassName("box2");
//function to retrieve the elements
weatherApp = () => {
  let cities = [
    { city: "Bangalore, Karnataka", Celcius: 25, emoji: "☀️", Data: "Sunny" },
    { city: "Chennai, Tamil Nadu", Celcius: 15, emoji: "🌧️", Data: "Rainy" },
    { city: "Adoni, Andhra Pradesh", Celcius: 30, emoji: "☁️", Data: "Cloudy" },
    { city: "Bellary, Karnataka", Celcius: 40, emoji: " 🌫️", Data: "Fog" }
  ];
  let input = document.getElementById("pick").value;
  let filtred = cities
    .filter(n => n.city.includes(input))
    .map(
      x => (
        (city = x.city), (temp = x.Celcius), (data = x.Data), (Emoji = x.emoji)
      )
    );
  document.getElementById("city").innerHTML = city;
  document.getElementById("data").innerHTML = data;
  document.getElementById("temp").innerHTML = `${Emoji}  ${temp} ${CF}`;
};

//to convert C to F and viceversa
convertTempF = () => {
  let C = temp;
  let Fer = Math.round((C * 9) / 5 + 32);
  document.getElementById("temp").innerHTML = `${Emoji}  ${Fer}  ${CF}`;
};

convertTempC = () => {
  let C = temp;
  document.getElementById("temp").innerHTML = `${Emoji}  ${C}  ${CF}`;
};

// day and time functions
addZero = i => {
  if (i < 10) {
    i = 0 + i;
  }
  return i;
};

Time = () => {
  let weekdays = new Array(7);
  weekdays[0] = "Sunday";
  weekdays[1] = "Monday";
  weekdays[2] = "Tuesday";
  weekdays[3] = "Wednesday";
  weekdays[4] = "Thursday";
  weekdays[5] = "Friday";
  weekdays[6] = "Saturday";

  let d = new Date();
  weekday_value = d.getDay();
  let x = document.getElementById("date");
  let h = addZero(d.getHours());
  let m = addZero(d.getMinutes());
  x.innerHTML = weekdays[weekday_value] + ", " + h + ":" + m;
};
