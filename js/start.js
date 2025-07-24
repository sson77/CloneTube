
  function includeHTML(el, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(el).innerHTML = data;
    });
}

  includeHTML("header", "header.html");
  includeHTML("footer", "footer.html");
