"use strict";

const images = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

let active = 0;
let interval = null;

const items = document.querySelector(".items");

for (let i = 0; i < images.length; i++) {
  const imagesArray = images[i];
  const div = document.createElement("div");
  div.classList.add("item");

  const img = document.createElement("img");
  img.src = "../../" + imagesArray.image;
  div.append(img);
  items.append(div);
}

function firstImg() {
  document.getElementsByClassName("item")[active].classList.add("active");
  interval = setInterval(next, 5000);
}

function show(index) {
  if (index >= images.length) {
    active = 0;
  } else if (index < 0) {
    active = images.length - 1;
  }
}

function prev() {
  clearInterval(interval);
  document
    .getElementsByClassName("item", "active")
    [active].classList.remove("active");
  active--;
  show(active);
  document.getElementsByClassName("item")[active].classList.add("active");
}

function next() {
  document
    .getElementsByClassName("item", "active")
    [active].classList.remove("active");
  active++;
  show(active);
  document.getElementsByClassName("item")[active].classList.add("active");
}

firstImg();
show();

document.querySelector(".next").addEventListener("click", next);

document.querySelector(".prev").addEventListener("click", prev);
