const text = document.querySelector(".text");
const changeColor = document.querySelector(".changeColor");

text.classList.add(".new-class"); // add class
text.classList.remove(".new-class"); // remove class
text.classList.toggle(".new-class"); // toggle class

// changeColor.addEventListener("click", function () {
//     text.classList.toggle(".new-class");
// });

const userListItem = document.querySelectorAll(".name-list li");
const userList = document.querySelector(".name-list");
const listInput = document.querySelector(".list-input");
const addListBtn = document.querySelector(".addListBtn");


// for (user of userListItem) {
//     user.addEventListener("click", function () {
//         this.style.color = "red";
//     });
// }

addListBtn.addEventListener("click", function () {
    //Create an li
    const newLi = document.createElement("LI");
    const liContent = document.createTextNode(listInput.value);
    //Add the input value inside that new li
    newLi.appendChild(liContent);
    //Attaching the li to the user list
    userList.appendChild(newLi);
});