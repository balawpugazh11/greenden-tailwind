// Selecting side navbar
var sidenavbar = document.getElementById("side-navbar");
var menuicon = document.getElementById("menuicon");
var closenav = document.getElementById("closenav");

menuicon.addEventListener("click", function () {
  sidenavbar.style.right = 0;
});

closenav.addEventListener("click", function () {
  sidenavbar.style.right = "-25%";
});

// Product search functionality
var productContainer = document.getElementById("ProductContainer");
var searchbar = document.getElementById("searchBar");
var productList = productContainer.querySelectorAll("div");
var noResultMsg = document.getElementById("noResultMsg");

searchbar.addEventListener("keyup", function (event) {
  var enteredValue = event.target.value.toUpperCase();
  var anyVisible = false;

  for (var i = 0; i < productList.length; i++) {
    var productname = productList[i].querySelector("h1").textContent;

    if (productname.toUpperCase().indexOf(enteredValue) >= 0) {
      productList[i].style.display = "block";
      anyVisible = true;
    } else {
      productList[i].style.display = "none";
    }
  }

  if (anyVisible) {
    noResultMsg.classList.add("hidden");
  } else {
    noResultMsg.classList.remove("hidden");
  }
});
