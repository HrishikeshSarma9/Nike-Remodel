window.onload = function(){
    const navbarPath= "../../pages/header.html";
    const footerPath= "../../pages/footer.html";
    fetch(navbarPath)
        .then(response => response.text())
        .then(data => {
          document.querySelector("nav").innerHTML = data;
        })
    fetch(footerPath)
        .then(response => response.text())
        .then(data => {
          document.querySelector("footer").innerHTML = data;
        })
  }