"use strict";

// Array
const images = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morales",
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

// Variabile contatore
let active = 0;

// Variabile per il setInterval
let interval;

const items = document.querySelector(".items");
const thumbs = document.querySelector(".thumbs");

// Ciclo sull'array per creare gli elementi HTML
for (let i = 0; i < images.length; i++) {
  const imagesArray = images[i];
  const div1 = document.createElement("div");
  div1.classList.add("item");

  const thumb = document.createElement("div");

  const h2 = document.createElement("h2");
  h2.innerText = imagesArray.title;
  h2.classList.add("positioning", "h2", "bg");

  const p = document.createElement("p");
  p.innerText = imagesArray.text;
  p.classList.add("positioning", "p", "bg");

  const img = document.createElement("img");
  img.src = "../../" + imagesArray.image;
  div1.append(img, h2, p);
  thumb.append(img);
  items.append(div1);
  thumbs.append(thumb);
}

// Funzione per settare l'immagine iniziale ed il setInterval
function firstImg() {
  document.getElementsByClassName("item")[active].classList.add("active");
  interval = setInterval(next, 5000);
}

// Funzione per il loop infinito dello scorrere delle immagini
function show(index) {
  if (index >= images.length) {
    active = 0;
  } else if (index < 0) {
    active = images.length - 1;
  }
}

// Funzione per visualizzare le immagini con il bottone freccia su
function previous() {
  clearInterval(interval);
  document
    .getElementsByClassName("item", "active")
    [active].classList.remove("active");
  active--;
  show(active);
  document.getElementsByClassName("item")[active].classList.add("active");
}

// Funzione per visualizzare le immagini con il bottone freccia giu
function next() {
  document
    .getElementsByClassName("item", "thumb", "active")
    [active].classList.remove("active");
  active++;
  show(active);
  document.getElementsByClassName("item")[active].classList.add("active");
}

firstImg();
show();

// Evento click bottone freccia giu
document.querySelector(".next").addEventListener("click", next);

// Evento click bottone freccia su
document.querySelector(".prev").addEventListener("click", previous);
