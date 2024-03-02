$(document).ready(function () {
  $("#navbarContainer").load("nav.html");
  $("#footer").load("footer.html");
});
// for website visit count
document.addEventListener("DOMContentLoaded", function () {
  var counterContainer = document.querySelector(".website-counter");
  var visitCount = localStorage.getItem("page_view");
  if (visitCount) {
    visitCount = parseInt(visitCount);
    if (visitCount) {
      visitCount = Number(visitCount) + 1;
      localStorage.setItem("page_view", visitCount);
    }
    if (visitCount >= 10000) {
      visitCount = "10000+";
    }
    localStorage.setItem("page_view", visitCount);
  } else {
    visitCount = 1;
    localStorage.setItem("page_view", 1);
  }
  counterContainer.innerHTML = visitCount;
});
//for calling api
window.onload = () => {
  getAllUsers();
  function getAllUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        console.log("users: ", users);
        createUi(users);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  }
  const createUi = (users) => {
    const usersCard = users.map((user) => {
      return `
  <div id="users-container">
      <div class="card " style="width: 18rem; background-color: #212529; color: white">
<img src="./images/profilepic.jpg" class="card-img-top" alt="...">
<div class="card-body">
    <div><strong>Name:</strong></div>${user.name}
    <div><strong>Email:</strong></div>${user.email}
    <div><strong>Phone No:</strong></div>${user.phone} 
  </div>    
</div>
</div>`;
    });
    const usersContainer = document.getElementById("users-container");
    usersContainer.innerHTML = usersCard.join(",");
  };
};
//for saving data by contact form
function SUBMITS() {
  const name = document.getElementById("name")?.value;
  const email = document.getElementById("email")?.value;
  const phone = document.getElementById("no")?.value;
  const branch = document.getElementById("branch")?.value;
  const message = document.getElementById("msg")?.value;
  console.log(name);
  console.log(email);
  console.log(phone);
  console.log(branch);
  console.log(message);

  const formData = {
    name: name,
    email: email,
    phone: phone,
    branch: branch,
    message: message,
  };
  const formDataJSON = JSON.stringify(formData);

  localStorage.setItem("formData", formDataJSON);

  alert("Form data saved successfully!");
};