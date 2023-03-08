function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, leisure, restaurants, transportation, hotel, favLinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  //This entire part gets the ids and removes the class "active"
  leisure = document.getElementById("leisure");
  leisure.className = leisure.className.replace(" active", "");
  
  restaurants = document.getElementById("restaurants");
  restaurants.className = restaurants.className.replace(" active", "");

  transportation = document.getElementById("transportation");
  transportation.className = transportation.className.replace(" active", "");

  hotel = document.getElementById("hotel");
  hotel.className = hotel.className.replace(" active", "");

  favLinks = document.getElementById("favLinks");
  favLinks.className = favLinks.className.replace(" active", "");

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}