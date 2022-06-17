const people = [
  {
    name: "Connor Walton",
    date: "02/17/2021",
    conversation:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    image: "assets/images/Mohan-muruge.jpg",
  },
  {
    name: "Emilie Beach",
    date: "01/09/2021",
    conversation:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    image: "assets/images/Mohan-muruge.jpg",
  },
  {
    name: "Miles Acosta",
    date: "12/20/2020",
    conversation:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    image: "assets/images/Mohan-muruge.jpg",
  },
];
const formElement = document.querySelector("#joinConversationForm");
const conversationUsers = document.querySelector(".conversation__users");

formElement.addEventListener("submit", function (event) {
  event.preventDefault();

  const formName = event.target.nameInput.value;
  const formComment = event.target.conversation__commentinput.value;

  conversationFormInput(formName, formComment);
  //   createContainer(people);
});

function conversationFormInput(firstName, comment) {
  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1; //months from 1-12
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();

  let newdate = month + "/" + day + "/" + year;
  console.log(newdate);

  //   let newObject = { firstName, newdate, comment };

  createContainerTwo(firstName, newdate, comment);

  // people.unshift({ firstName, newdate, comment });
  const obj = { name: firstName, date: newdate, conversation: comment };
  // createContainer(obj);
  people.unshift(obj);

  console.log(people);
}

// for (let i = 0; i < people.length; i++) {
//   createContainer(people[i]);
// }

function createContainerTwo(firstName, date, converstation) {
  //outer container
  const conversationUsersContainer = document.createElement("div");
  conversationUsersContainer.classList.add("conversation__users--container");

  //image container
  const conversationImgContainer = document.createElement("div");
  conversationImgContainer.classList.add("conversation__users--img");

  //Details container
  const usersDetails = document.createElement("div");
  usersDetails.classList.add("conversation__users--details");

  //image
  const conversationImg = document.createElement("div");
  conversationImg.classList.add("conversation__img");
  conversationImg.setAttribute("src", people.image);
  conversationImgContainer.appendChild(conversationImg);

  conversationUsersContainer.appendChild(conversationImgContainer); // Append the image container with the image

  conversationUsersContainer.appendChild(usersDetails);

  const detailsWrapper = document.createElement("div");
  detailsWrapper.classList.add("details__wrapper");
  usersDetails.appendChild(detailsWrapper);

  const detailsWrapper__name = document.createElement("div");
  detailsWrapper__name.innerHTML = firstName;
  detailsWrapper__name.classList.add("details__wrapper--name");
  detailsWrapper.appendChild(detailsWrapper__name);

  const detailsWrapper__date = document.createElement("div");
  detailsWrapper__date.innerHTML = date;
  detailsWrapper__date.classList.add("details__wrapper--date");
  detailsWrapper.appendChild(detailsWrapper__date);

  const detailsParagraph = document.createElement("div");
  detailsParagraph.innerHTML = converstation;
  detailsParagraph.classList.add("details-paragraph");
  usersDetails.appendChild(detailsParagraph);

  conversationUsers.appendChild(conversationUsersContainer);
  console.log(conversationUsersContainer);
  //   console.log("Person:" + person);
}

function createContainer(person) {
  //outer container
  const conversationUsersContainer = document.createElement("div");
  conversationUsersContainer.classList.add("conversation__users--container");

  //image container
  const conversationImgContainer = document.createElement("div");
  conversationImgContainer.classList.add("conversation__users--img");

  //Details container
  const usersDetails = document.createElement("div");
  usersDetails.classList.add("conversation__users--details");

  //image
  const conversationImg = document.createElement("div");
  conversationImg.classList.add("conversation__img");
  conversationImg.setAttribute("src", people.image);
  conversationImgContainer.appendChild(conversationImg);

  conversationUsersContainer.appendChild(conversationImgContainer); // Append the image container with the image

  conversationUsersContainer.appendChild(usersDetails);

  const detailsWrapper = document.createElement("div");
  detailsWrapper.classList.add("details__wrapper");
  usersDetails.appendChild(detailsWrapper);

  const detailsWrapper__name = document.createElement("div");
  detailsWrapper__name.innerHTML = person.name;
  detailsWrapper__name.classList.add("details__wrapper--name");
  detailsWrapper.appendChild(detailsWrapper__name);

  const detailsWrapper__date = document.createElement("div");
  detailsWrapper__date.innerHTML = person.date;
  detailsWrapper__date.classList.add("details__wrapper--date");
  detailsWrapper.appendChild(detailsWrapper__date);

  const detailsParagraph = document.createElement("div");
  detailsParagraph.innerHTML = person.conversation;
  detailsParagraph.classList.add("details-paragraph");
  usersDetails.appendChild(detailsParagraph);

  conversationUsers.appendChild(conversationUsersContainer);
  console.log(conversationUsersContainer);
  console.log("Person:" + person);
}

for (let i = 0; i < people.length; i++) {
  createContainer(people[i]);
}

//  const conversationContainer = document.querySelector(".conversation");

// function createCard(person){
//     const conversationForm = document.createElement('div');
//     conversationForm.classList.add('conversation__form');

//     const cardContent = document.createElement("div");
//     cardContent.classList.add("card__content");
//     conversationForm.appendChild(cardContent);

//     const usersDetails = document.createElement("div");
//     usersDetails.classList.add("conversation__users--details");
//     cardContent.appendChild(usersDetails);

//     const detailsWrapper = document.createElement("div");
//     detailsWrapper.classList.add("details__wrapper");
//     usersDetails.appendChild(detailsWrapper);

//     const detailsWrapper__name = document.createElement("div");
//     detailsWrapper__name.innerHTML = person.name;
//     detailsWrapper__name.classList.add("details__wrapper--name");
//     detailsWrapper.appendChild(detailsWrapper__name);

//     const detailsWrapper__date = document.createElement("div");
//     detailsWrapper__date.innerHTML = person.date;
//     detailsWrapper__date.classList.add("details__wrapper--date");
//     detailsWrapper.appendChild(detailsWrapper__date);

//     const detailsParagraph = document.createElement("div");
//     detailsParagraph.innerHTML = person.conversation;
//     detailsParagraph.classList.add("details-paragraph");
//     usersDetails.appendChild(detailsParagraph);

//     conversationContainer.appendChild(conversationForm);

//     console.log(conversationForm);

// }
