function myFunction() {
  var x = document.getElementById("main-navbar");
  if (x.className === "main-navbar") {
    x.className += " responsive";
  } else {
    x.className = "main-navbar";
  }
}
