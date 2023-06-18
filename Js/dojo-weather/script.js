function report(element) {
  var city = element.innerText
  alert(`Loading weather report for ${city}`)
}

function accept() {
  document.querySelector(".pop-up").remove()
}

var temps = document.querySelectorAll(".temp")

function changeTempUnit(element) {
  if (element.value == "f") {
    for (let i = 0; i < temps.length; i++) {
      let temp = parseFloat(temps[i].innerText);
      temp = Math.round((temp * 9 / 5) + 32);
      temps[i].innerText = `${temp}°`
    }
  } else {
    for (let i = 0; i < temps.length; i++) {
      let temp = parseFloat(temps[i].innerText);
      temp = Math.round((temp - 32) * 5 / 9);
      temps[i].innerText = `${temp}°`
    }
  }


}
