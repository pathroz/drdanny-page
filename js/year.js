(function() {
  var currentYear = new Date().getFullYear();
  document.getElementById("year").textContent = currentYear;

  var years = currentYear - 1997;
  var spans = document.querySelectorAll(".exp-years");
  for (var i = 0; i < spans.length; i++) {
    spans[i].textContent = years;
  }
})();