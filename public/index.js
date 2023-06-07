var inputval = document.querySelector("#cityinput");
var btn = document.querySelector("#add");
var city = document.querySelector("#cityoutput");
var descrip = document.querySelector("#description");
var temp = document.querySelector("#temp");
var wind = document.querySelector("#wind");
apik = "3045dd712ffe6e702e3245525ac7fa38";
function convertion(val) {
  return (val - 273).toFixed(2);
}

btn.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputval.value +
      "&appid=" +
      apik
  )
    .then((res) => res.json())

    .then((data) => {
      var nameval = data["name"];
      var descrip = data["weather"]["0"]["description"];
      var tempature = data["main"]["temp"];
      var wndspd = data["wind"]["speed"];
      city.innerHTML = `Weather of <span>${nameval}<span>`;
      temp.innerHTML = `Temperature: <span>${convertion(tempature)} C</span>`;
      description.innerHTML = `Sky Conditions: <span>${descrip}<span>`;
      wind.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`;
    })

    .catch((err) => alert("Please enter a City"));
  setTimeout(() => {
    limpaInput();
  }, 200);
  if (btn) {
    let descrip = document.querySelector("#img");
    descrip.classList.remove("hide");
    let descrip1 = document.querySelector("#img1");
    descrip1.classList.remove("hide");
    let descrip2 = document.querySelector("#img2");
    descrip2.classList.remove("hide");
  }
});

inputval.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        inputval.value +
        "&appid=" +
        apik
    )
      .then((res) => res.json())

      .then((data) => {
        var nameval = data["name"];
        var descrip = data["weather"]["0"]["description"];
        var tempature = data["main"]["temp"];
        var wndspd = data["wind"]["speed"];
        city.innerHTML = `Weather of <span>${nameval}<span>`;
        temp.innerHTML = `Temperature: <span>${convertion(tempature)} C</span>`;
        description.innerHTML = `Sky Conditions: <span>${descrip}<span>`;
        wind.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`;
      })

      .catch((err) => alert("Please enter a City"));
    setTimeout(() => {
      limpaInput();
    }, 200);
    if (btn) {
      let descrip = document.querySelector("#img");
      descrip.classList.remove("hide");
      let descrip1 = document.querySelector("#img1");
      descrip1.classList.remove("hide");
      let descrip2 = document.querySelector("#img2");
      descrip2.classList.remove("hide");
    }
  }
});

function limpaInput() {
  inputval.value = "";
  inputval.focus();
}
