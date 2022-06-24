const showsContainer = document.querySelector(".shows");
const apiKey = "cbc3f43b-2fc6-41bf-b351-fefdf1e7b32f";

let showsArr = [];

function createShowsContainer(date, venue, location) {
  const emptyDiv = document.createElement("div");
  emptyDiv.classList.add("testing");
  showsContainer.appendChild(emptyDiv);

  const showsWrapper = document.createElement("div");
  showsWrapper.classList.add("shows__details");

  const showsDateHeader = document.createElement("p");
  showsDateHeader.classList.add("shows__details--header");
  showsDateHeader.innerText = "Date";
  showsWrapper.appendChild(showsDateHeader);

  const showsDate = document.createElement("p");
  showsDate.classList.add("shows__details--date");
  showsDate.innerText = date;
  showsWrapper.appendChild(showsDate);

  const showsVenueHeader = document.createElement("p");
  showsVenueHeader.classList.add("shows__details--header");
  showsVenueHeader.innerText = "Venue";
  showsWrapper.appendChild(showsVenueHeader);

  const showsVenue = document.createElement("p");
  showsVenue.classList.add("shows__details--venue");
  showsVenue.innerText = venue;
  showsWrapper.appendChild(showsVenue);

  const showsLocationHeader = document.createElement("p");
  showsLocationHeader.classList.add("shows__details--header");
  showsLocationHeader.innerText = "Location";
  showsWrapper.appendChild(showsLocationHeader);

  const showsLocation = document.createElement("p");
  showsLocation.classList.add("shows__details--location");
  showsLocation.innerText = location;
  showsWrapper.appendChild(showsLocation);

  const buyTickets = document.createElement("a");
  buyTickets.classList.add("shows__details--buybutton");
  buyTickets.innerHTML = "Buy Tickets";
  showsWrapper.appendChild(buyTickets);

  showsContainer.appendChild(showsWrapper);
}

function convertTime(time) {
  var timestamp = Number(time);
  var date = new Date(timestamp);
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();

  const result = year + "/" + month + "/" + day;
  return result;
}
function getShows() {
  axios
    .get(`https://project-1-api.herokuapp.com/showdates?api_key=${apiKey}`)
    .catch((error) => {
      console.log("error" + error);
    })
    .then((response) => {
      console.log(response);
      console.log(response.data);
      showsArr = response.data;
      showsArr.forEach((show) => {
        console.log(show.date + "" + show.place + "" + show.location);
        const date = show.date; //need to convert
        const venue = show.place;
        const location = show.location;
        createShowsContainer(convertTime(date), venue, location);
        const showListElement = document.querySelectorAll(".shows__details");
      });

      console.log("arr" + showsArr);
    });
}

getShows();

console.log(showListElement);
showListElement.addEventListener("click", (event) => {
  if (showListElement.classList === "shows__details") {
    console.log("Succsess");
  }
});
