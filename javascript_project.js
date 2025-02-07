document.addEventListener("DOMContentLoaded", function () {
  const navbarPlaceholder = document.getElementById("navbar");
  if (navbarPlaceholder) {
    navbarPlaceholder.innerHTML = `
        <nav>
          <div class="logo"><img src="/images/logo.png" /> TravelBloom</div>
          <div class="nav-links">
            <a href="/index.html">Home</a>
            <a href="/about/about.html">About Us</a>
            <a href="/contact/contact.html">Contact Us</a>
          </div>
          <div class="search-container">
            <input
              type="text"
              class="search-input"
              placeholder="Destination or keyword"
              id="searchInput"
            />
            <button class="search-btn" onclick="handleSearch()">Search</button>
            <button class="clear-btn" onclick="handleClear()">Clear</button>
          </div>
        </nav>
    `;
  }
});

const mockDestinations = {
  usa: [
    {
      title: "Grand Canyon",
      image: "./images/paris.jpg",
      description:
        "Marvel at one of the world's most stunning natural wonders stretching 277 miles across Arizona.",
    },
    {
      title: "New York City",
      image: "./images/newyork.webp",
      description:
        "Experience the bustling energy of America's most iconic metropolitan center.",
    },
    {
      title: "Yellowstone",
      image: "./images/tokyo.jpeg",
      description:
        "Discover the world's first national park with its geothermal wonders and wildlife.",
    },
  ],
};

async function handleSearch() {
  const searchInput = document.getElementById("searchInput");
  const query = searchInput.value.trim().toLowerCase();

  if (!query) return;

  try {
    // Display results
    const resultsHTML = `
            <div class="search-results">
                <div class="time-display">
                    Current local time in ${query.toUpperCase()}: ${"localTime"}
                </div>
                <div class="cards-container">
                    ${mockDestinations.usa
                      .map(
                        (dest) => `
                        <div class="destination-card">
                            <img src="${dest.image}" class="card-image" alt="${dest.title}">
                            <div class="card-content">
                                <h3 class="card-title">${dest.title}</h3>
                                <p class="card-description">${dest.description}</p>
                            </div>
                        </div>
                    `
                      )
                      .join("")}
                </div>
            </div>
        `;

    // Clear previous content and show results
    const contentDiv = document.querySelector(".content");
    contentDiv.innerHTML = resultsHTML;
  } catch (error) {
    alert("Error fetching travel information. Please try again.");
  }
}

function handleClear() {
  document.getElementById("searchInput").value = "";
}
