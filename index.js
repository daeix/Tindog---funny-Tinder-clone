"use strict";

import { dogs } from "./data.js";
import { Dog } from "./dog.js";

const crossBtn = document.getElementById("cross-btn");
const heartBtn = document.getElementById("heart-btn");

let dog = getNextDog();

heartBtn.addEventListener("click", like);
crossBtn.addEventListener("click", dislike);

// renders dog profile or if array of dogs is empty returns message
function renderDogProfile() {
  if (dogs.length == 0) {
    crossBtn.style.display = "none";
    heartBtn.style.display = "none";
    document.getElementById(
      "profile-container"
    ).innerHTML = `<div class="no-more-dogs">
    <h2>Sorry, but there are no more dogs in your area.😞</h2>
    <p>Please check back later.</p>
  </div>`;
  } else {
    document.getElementById("profile-container").innerHTML = dog.getDogHtml();
  }
}

// function to render next dog after clicking the button
function getNextDog() {
  const nextDogData = dogs.shift();
  return nextDogData ? new Dog(nextDogData) : {};
}

function dislike() {
  dog.hasBeenSwiped = true;
  heartBtn.disabled = true;
  if (dog.hasBeenSwiped) {
    document.getElementById("dislike").classList.remove("hidden");
    setTimeout(() => {
      dog = getNextDog();
      heartBtn.disabled = false;
      renderDogProfile();
    }, 1500);
  }
}

function like() {
  dog.hasBeenLiked = true;
  crossBtn.disabled = true;
  if (dog.hasBeenLiked) {
    document.getElementById("like").classList.remove("hidden");
    setTimeout(() => {
      dog = getNextDog();
      crossBtn.disabled = false;
      renderDogProfile();
    }, 1500);
  }
}

renderDogProfile();
