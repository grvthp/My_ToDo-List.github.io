"use strict";

let inputs = document.getElementById("input");
let text = document.getElementById("content_list");
let button = document.getElementById("btn");

button.addEventListener("click", function add() {
  if (inputs.value == "") {
    alert("Please Enter Task");
  } else {
    let newEle = document.createElement("li");
    newEle.innerHTML = `<i class="fa-regular fa-circle check_box"></i> ${inputs.value} <i class="fa-solid fa-trash delete"></i>`;
    text.appendChild(newEle);
    inputs.value = "";

    newEle
      .querySelector(".check_box")
      .addEventListener("click", function change() {
        let icon = newEle.querySelector(".check_box");
        icon.classList.toggle("fa-circle");
        icon.classList.toggle("fa-circle-check");
        
      });

    newEle
      .querySelector(".delete")
      .addEventListener("click", function remove() {
        newEle.remove();
      });
  }
});
