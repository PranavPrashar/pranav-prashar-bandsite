const shows = [
  {
    date: "Mon Sept 06 2021 ",
    venue: "Ronald Lane ",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA ",
  },
  {
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center ",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 15 2021 ",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

const showsContainer = document.querySelector(".shows");
function showsCreateContainer(shows) {
  const showsWrapper = document.createElement("div");
  showsWrapper.classList.add("shows__details");

  const showsDateHeader = document.createElement("p");
  showsDateHeader.classList.add("shows__details--header");
  showsDateHeader.innerText = "Date";
  showsWrapper.appendChild(showsDateHeader);

  const showsDate = document.createElement("p");
  showsDate.classList.add("shows__details--date");
  showsDate.innerText = shows.date;
  showsWrapper.appendChild(showsDate);

  const showsVenueHeader = document.createElement("p");
  showsVenueHeader.classList.add("shows__details--header");
  showsVenueHeader.innerText = "Venue";
  showsWrapper.appendChild(showsVenueHeader);

  const showsVenue = document.createElement("p");
  showsVenue.classList.add("shows__details--venue");
  showsVenue.innerText = shows.venue;
  showsWrapper.appendChild(showsVenue);

  const showsLocationHeader = document.createElement("p");
  showsLocationHeader.classList.add("shows__details--header");
  showsLocationHeader.innerText = "Location";
  showsWrapper.appendChild(showsLocationHeader);

  const showsLocation = document.createElement("p");
  showsLocation.classList.add("shows__details--location");
  showsLocation.innerText = shows.location;
  showsWrapper.appendChild(showsLocation);

  const buyTickets = document.createElement("a");
  buyTickets.classList.add("shows__details--buybutton");
  buyTickets.innerHTML = "Buy Tickets";
  showsWrapper.appendChild(buyTickets);

  showsContainer.appendChild(showsWrapper);

  //   console.log(showsWrapper);
}

for (let i = 0; i < shows.length; i++) {
  showsCreateContainer(shows[i]);
}

// showsContainer(shows[0]);
