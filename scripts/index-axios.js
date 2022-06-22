const formElement = document.querySelector("#joinConversationForm");
const conversationUsers = document.querySelector(".conversation__users");
const apiKey = "cbc3f43b-2fc6-41bf-b351-fefdf1e7b32f";

let showsArr = [];

formElement.addEventListener("submit", function (event) {
  event.preventDefault();

  const formName = event.target.nameInput.value;
  const formComment = event.target.conversation__commentinput.value;

  //   conversationFormInput(formName, formComment);
  postComments(formName, formComment);
  getComments();
  formElement.reset();
});

function conversationFormInput(firstName, comment) {
  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1;
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();

  let newdate = month + "/" + day + "/" + year;
  console.log(newdate);

  const obj = { name: firstName, date: newdate, conversation: comment };

  removeAllChildNodes(conversationUsers);

  //   people.unshift(obj);

  //   for (let i = 0; i < people.length; i++) {
  //     createContainer(people[i]);
  //   }
}

function createContainer(name, comment, time) {
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
  //   conversationImg.setAttribute("src", people.image);
  conversationImgContainer.appendChild(conversationImg);

  conversationUsersContainer.appendChild(conversationImgContainer); // Append the image container with the image

  conversationUsersContainer.appendChild(usersDetails);

  const detailsWrapper = document.createElement("div");
  detailsWrapper.classList.add("details__wrapper");
  usersDetails.appendChild(detailsWrapper);

  const detailsWrapper__name = document.createElement("div");
  detailsWrapper__name.innerHTML = name;
  detailsWrapper__name.classList.add("details__wrapper--name");
  detailsWrapper.appendChild(detailsWrapper__name);

  const detailsWrapper__date = document.createElement("div");
  detailsWrapper__date.innerHTML = time;
  detailsWrapper__date.classList.add("details__wrapper--date");
  detailsWrapper.appendChild(detailsWrapper__date);

  const detailsParagraph = document.createElement("div");
  detailsParagraph.innerHTML = comment;
  detailsParagraph.classList.add("details-paragraph");
  usersDetails.appendChild(detailsParagraph);

  conversationUsers.appendChild(conversationUsersContainer);
  console.log(conversationUsersContainer);
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function getComments() {
  axios
    .get(`https://project-1-api.herokuapp.com/comments?api_key=${apiKey}`)
    .catch((error) => {
      console.log("error" + error);
    })
    .then((response) => {
      console.log(response);
      console.log(response.data);
      const myresponse = response.data;

      myresponse.sort(function compare(a, b) {
        var dateA = new Date(a.timestamp);
        var dateB = new Date(b.timestamp);
        return dateB - dateA;
      });
      showsArr = myresponse;
      showsArr.forEach((person) => {
        console.log(
          "CL1" + person.name + " " + person.comment + " " + person.timestamp
        );
        const nameResponse = person.name;
        const timeResponse = person.timestamp;
        const commentResponse = person.comment;
        createContainer(
          nameResponse,
          commentResponse,
          convertTime(timeResponse)
        );
      });
      console.log("arr" + showsArr);
    });
}

function postComments(formName, formComment) {
  const input = { name: formName, comment: formComment };
  axios
    .post(
      `https://project-1-api.herokuapp.com/comments?api_key=${apiKey}`,
      input,
      {
        headers: {
          "content-type": "application/json",
        },
      }
    )
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log("error" + error);
    });
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
