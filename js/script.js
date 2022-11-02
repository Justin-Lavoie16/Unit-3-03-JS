if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/Unit-3-03-JS/sw.js", {
    scope: "/Unit-3-03-JS/",
  })
}

;("use strict")

function calculate() {
  const radius = parseInt(document.getElementById("radius-of-circle").value)

  const volume = (4 / 3) * Math.PI * radius ** 3

  document.getElementById("volume").innerHTML =
    "<p>Volume is " + volume.toFixed(2) + " cm³</p>"
}
