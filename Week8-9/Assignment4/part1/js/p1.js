// Complete variable definitions and random functions

/* <!--
    Name: Hossein Abdolzahraei
    Date: Mar 20th 2026 3:35 p.m.
    File: p1.js
    Description: Java
    --> */


const customName = document.getElementById("custom-name");
const generateBtn = document.querySelector(".generate");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// Raw text strings
let characters = [
    'Willy the Goblin',
    'Big Daddy',
    'Father Christmas'
];

let places = [
    'the soup kitchen',
    'Disneyland',
    'the White House'
];

let events = [
    'spontaneously combusted',
    'melted into a puddle on the sidewalk',
    'turned into a slug and slithered away'
];


// Partial return random string function

function returnRandomStoryString() {
  const randomCharacter = randomValueFromArray(characters);
  const randomPlace = randomValueFromArray(places);
  const randomEvent = randomValueFromArray(events);

  let storyText = ` It was 94 Fahrenheit outside, so ${randomCharacter}:insertx: went for a walk. When they got to ${randomPlace}, 
   they stared in horror for a few moments, then ${randomEvent}. Bob saw the whole thing, but was not surprised — 
   ${randomCharacter} weighs 300 pounds, and it was a hot day. `;  


  return storyText;
}

// Event listener and partial generate function definition

generateBtn.addEventListener("click", generateStory);

function generateStory() {
  if (customName.value !== "") {
    const name = customName.value;
  }

  if (document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature = Math.round(94);
  }

  // TODO: replace "" with the correct expression
  story.textContent = "";
  story.style.visibility = "visible";
}