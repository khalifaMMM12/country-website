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
  
// Replace API_KEY with your TripAdvisor API Key
const API_KEY = "your_api_key_here";

fetch(`https://api.tripadvisor.com/api/partner/2.0/locations?key=${API_KEY}`)
  .then(function(response) {
    return response.json();
  })
  .then(function(destinations) {
    destinations.forEach(function(destination) {
      const destinationCard = document.createElement("div");
      destinationCard.classList.add("destination-card");
      destinationCard.innerHTML = `
        <img src="${destination.photo.images.medium.url}" alt="${destination.name}">
        <h3 class="destination-name">${destination.name}</h3>
        <p class="destination-description">${destination.description}</p>
        <a href="#" class="btn btn-primary">Learn More</a>
      `;
      
      destinationCardsContainer.appendChild(destinationCard);
    });
  });