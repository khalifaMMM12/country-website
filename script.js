// Get the search form element
const searchForm = document.querySelector("form");

// Add a submit event listener to the search form
searchForm.addEventListener("submit", function(event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the search input element
  const searchInput = document.querySelector("input[type='text']");

  // Get the search keyword
  const keyword = searchInput.value;

  // Check if the keyword is not empty
  if (keyword.trim() !== "") {
    // Redirect to the search results page
    window.location.href = `/search?q=${encodeURIComponent(keyword)}`;
  }
});

//JavaScript Code for Destination Card Interactivity

const destinationCards = document.querySelectorAll(".destination-card");
  
  destinationCards.forEach(function(destinationCard) {
    const learnMoreBtn = destinationCard.querySelector(".btn");
    
    learnMoreBtn.addEventListener("click", function(event) {
      event.preventDefault();
      alert("You clicked on the Learn More button for " + destinationCard.querySelector(".destination-name").textContent);
    });
  });

//   JavaScript Code for Retrieving and Generating Destination Cards

const destinationCardsContainer = document.querySelector("#destination-cards-container");
  
  fetch("https://restcountries.com/v3.1/all")
    .then(function(response) {
      return response.json();
    })
    .then(function(countries) {
      countries.forEach(function(country) {
        const countryName = country.name
        const countryFlag = country.flags
        const destinationCard = document.createElement("div");
        destinationCard.classList.add("destination-card");
        destinationCard.innerHTML = `
          <img src="${countryFlag.png}" alt="${countryName}">
          <h3 class="destination-name">${countryName.common}</h3>
          <p class="destination-description">${country.capital}</p>
          <a href="#" class="btn btn-primary">Learn More</a>
        `;
        
        destinationCardsContainer.appendChild(destinationCard);
      });
    });

    // Get reference to the search bar and destination cards
const searchBar = document.querySelector("#search-bar");
const destinationCard = document.querySelectorAll(".destination-card");

// Listen for changes to the search bar input
searchBar.addEventListener("input", function() {
  const searchTerm = searchBar.value.toLowerCase();
  
  // Filter the destination cards based on the search term
  destinationCards.forEach(function(destinationCard) {
    const destinationName = destinationCard.querySelector(".destination-name").textContent.toLowerCase();
    if (destinationName.includes(searchTerm)) {
      destinationCard.style.display = "flex";
    } else {
      destinationCard.style.display = "none";
    }
  });
});
