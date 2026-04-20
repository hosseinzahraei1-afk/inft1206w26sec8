
// One way to do the image gallery Javascript codes



const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* The images are all neatly packed in a tuple array. 
Instead of <img src="" alt="" > ... One must type filename: "", alt:"" in curly brackets for each image of the tuple.
Of course each must be followed by a comma, and the array bracket by a semi-colon. */

const images = [
  { filename: "pic1.jpg", alt: "Closeup of a human eye" },
  { filename: "pic2.jpg", alt: "Rock that looks like a wave" },
  { filename: "pic3.jpg", alt: "Purple and white pansies" },
  { filename: "pic4.jpg", alt: "Section of wall from a pharaoh's tomb" },
  { filename: "pic5.jpg", alt: "Large moth on a leaf" },
];

// The absolute url must be typed of course to call all the images from the 'gallery' subdirectory. 

const baseURL =
  "https://mdn.github.io/shared-assets/images/examples/learn/gallery/";

// Each image of the array 'images' will be looped through by typing the first line.    

for (const image of images) {
  // For each image in 'images' a thumbnail (link) is created.
  const thumbnail = document.createElement("img");
  // Each thumbnail loop now has the location to look for each image, and the filenames to grab with the thumbnail.src definition.
  //  The thumbnail.alt statement loops through the array for each images 'alt' content.  
  thumbnail.src = `${baseURL}${image.filename}`;
  thumbnail.alt = image.alt;
  // This is typed so that the image can be enlarged by the input of a keyboard key.
  thumbnail.tabIndex = "0";
  // Each thumbnail must be attached to the thumb-bar feature. 
  thumbBar.appendChild(thumbnail);
  // As it is a thumbnail image it can be clicked or 'Enter' key pressed when it is selected, in order to be isolated on another page. 
  // The 'isolateImage' is called by a click or the 'Enter' key, with the 'EventListener' content response motif.  
  thumbnail.addEventListener("click", isolateImage);
  // This says a key can be pressed over each thumbnail, the key is represented by the letter e, and 'e' must absolutely be the Enter key. 
  //if the 'Enter' key is pressed the 'isolateImage' function is run. 
  thumbnail.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      isolateImage(e);
    }
  });
}

// The function to be called is logically typed in the block next below the loop block.  

function isolateImage(e) {
  displayedImage.src = e.target.src;
  displayedImage.alt = e.target.alt;
}

// The button darken/lighten button must be made to perform its specific purpose => the event must be specified. 

btn.addEventListener("click", () => {

  /* boolean 'if...else' block that says if it is true that the button is in a class called 'dark', 
   (as the overlay will be some degree of 'dark'), clicking it will change the colour to the one
  specified in the 'overlay.style.backgroundColor' statement.
  The 'textContent' statement is then input to change the text in the button to 'Lighten' immediately after. */

  if (btn.classList.contains("dark")) {
    overlay.style.backgroundColor = "rgb(0 0 0 / 0.5)";
    btn.textContent = "Lighten";
  } else {

    /* The else statement speaks for itself: thus if any other option is selected ('Lighten' being the only one),  
     the color overlaid is 'rgb(000/0)' meaning transparent, and its text is set to 'Darken'. */ 
    
    overlay.style.backgroundColor = "rgb(0 0 0 / 0)";
    btn.textContent = "Darken";
    
  }
  
  /* The toggle tool is utilized to toggle 'dark' class settings off whenever the 'Lighten' feature is available? */

  btn.classList.toggle("dark");
});

