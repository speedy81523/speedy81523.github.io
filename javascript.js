

//target all elements to save to constants
const page1btn = document.querySelector("#page1btn");
const page2btn = document.querySelector("#page2btn");
const page3btn = document.querySelector("#page3btn");
const page4btn = document.querySelector("#page4btn");
//const page5btn = document.querySelector("#page5btn");
const page6btn = document.querySelector("#page5btn");

var allpages = document.querySelectorAll(".page");
//select all subtopic pages
function hideall() { //function to hide all pages
  for (let onepage of allpages) { //go through all subtopic pages
    onepage.style.display = "none"; //hide it
  }
}
function show(pgno) { //function to show selected page no
  hideall();
  //select the page based on the parameter passed in
  let onepage = document.querySelector("#page" + pgno);
  onepage.style.display = "block"; //show the page
}
/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page1btn.addEventListener("click", function () {
  show(1);
});
page2btn.addEventListener("click", function () {
  show(2);
});
page3btn.addEventListener("click", function () {
  show(3);
});

page4btn.addEventListener("click", function () {
  show(5);
});

//page5btn.addEventListener("click", function () {
//show(5);
//});
page6btn.addEventListener("click", function () {
  show(6);
});




hideall();
/*JS for hamMenu */
const hamBtn = document.querySelector("#hamIcon");
const menuItemsList = document.querySelector("nav ul");
hamBtn.addEventListener("click", toggleMenus);
function toggleMenus() { /*open and close menu*/
  //if menuItemsList dont have the class "menuShow", add it, else remove it
  menuItemsList.classList.toggle("menuShow");
  //if menu is showing (has the class “menuShow”)
  if (menuItemsList.classList.contains("menuShow")) {
    hamBtn.innerHTML = "Close Menu"; //change button text to chose menu
  } else { //if menu NOT showing
    hamBtn.innerHTML = "Open Menu"; //change button text open menu
  }
}


//for clicker

//for teleporting
//for morse clicking
const scoreBox = document.getElementById("scoreBox");
var score = 0; //to track how many clicks
const PopAudio = new Audio("audio/sui.mp3")
const PopAudio1 = new Audio("audio/spongebob-fail.mp3")
const JerseyId = document.getElementById("JerseyId");
const JerseyId2 = document.getElementById("JerseyId2");
const BadJerseyId = document.getElementById("BadJerseyId");
const JerseyId3 = document.getElementById("JerseyId3");
const JerseyId4 = document.getElementById("JerseyId4");
const BadJerseyId2 = document.getElementById("BadJerseyId2");
const jerseys = [JerseyId, JerseyId2, JerseyId3, JerseyId4, BadJerseyId, BadJerseyId2];

function GetRandom(min, max) {
  //this will select a number between min and max
  return Math.round(Math.random() * (max - min)) + min;
}
//show and hide jerseu
function spawnJersey(jersey) {
  //const isBad = jersey.id == "BadJerseyId"; //may not be used in the future idk
  //const isBad2 = jersey.id == "BadJerseyId2"; //may not be used in the future idk
  //jersey.style.left = GetRandom(0, 300) + "px";
  //jersey.style.top = GetRandom(0, 500) + "px";
  //jersey.style.display = "block";

  const maxX = window.innerWidth - jersey.offsetWidth; //use window
  const maxY = window.innerHeight - jersey.offsetHeight;

  jersey.style.left = GetRandom(0, maxX) + "px";
  jersey.style.top = GetRandom(0, maxY) + "px";
  jersey.style.display = "block";
  setTimeout(() => {
    jersey.style.display = "none";
  }, 700);
}

//choose which jersey to appear
setInterval(() => {
  const randomIndex = GetRandom(0, jerseys.length - 1);
  spawnJersey(jerseys[randomIndex]);
}, 500); //time




function JerseyCatch() {


  this.classList.add("shrink");


  this.addEventListener("transitionend", () => {
    this.style.display = "none";
    this.classList.remove("shrink"); 
  }, { once: true });

  //increases score after clicking
  score++;
  //update html scorebox
  scoreBox.innerHTML = "Score: " + score;
  PopAudio.play();


}
function BadJerseyCatch() { //testing



 this.classList.add("shrink");


  this.addEventListener("transitionend", () => {
    this.style.display = "none";
    this.classList.remove("shrink"); 
  }, { once: true });

  //decreases score after clicking
  score -= 5;
   // clamp score to minimum 0
  if (score < 0) {
    score = 0;
  }
  //update html scorebox
  scoreBox.innerHTML = "Score: " + score;
  PopAudio1.play();


   
}



//link durian to mouseclick to durianCatch function
JerseyId.addEventListener("click", JerseyCatch);
JerseyId2.addEventListener("click", JerseyCatch);
BadJerseyId.addEventListener("click", BadJerseyCatch);
JerseyId3.addEventListener("click", JerseyCatch);
JerseyId4.addEventListener("click", JerseyCatch);
BadJerseyId2.addEventListener("click", BadJerseyCatch);

//animation
//document.addEventListener("keydown", function (evt) {
//console.log(evt);
//if (evt.code == "KeyT") {
//  JerseyId.classList.add("shrink");
//}
//if (evt.code == "KeyU") {
//  JerseyId.classList.remove("shrink");
//}
//if (evt.code == "KeyA") {
//  JerseyId.classList.add("anim1");
//}
//if (evt.code == "KeyB") {
//  JerseyId.classList.remove("anim1");
//}
//});


//timeline
//const galleryImages = [



const timelineData = [
  {
    title: "Late 19th Century to Mid 20th Century",
    content: "Football shirts were made from thick cotton and had no sponsorships or logos. By the mid 20th century football shirts begin to have club/nation logos",
    galleryImages: [
      "images/early_shirt1.jpg", "images/early_shirt2.jpg"
    ]

  },
  {
    title: "1970s",

    content: "Kits started including sponsors and sold to consumers.",
    galleryImages: ["images/70s_shirt.jpg", "images/70s_shirt2.jpg"]

  },
  {
    title: "1980s",

    content: "With better technology in manfactuaring shirts, Football shirts had more flashy designs that appealed more to fans.",
    galleryImages: ["images/80s_shirt.jpg", "images/80s_shirt2.jpg",]

  },
  {
    title: "1990s",
    content: "Shirts became more stylish with bold patterns and global branding. Shirts become baggy due to the fashion at that time",
    galleryImages: ["images/90s_shirt1.jpg", "images/90s_shirt2.jpg"]
  },
  {

    title: "2000s",

    content: "Baggy shirts were all the rage, post-2005 saw manfacturers experiment and eventually produce thinner, tighter shirts that would replace the baggy designs by the early 2010s.",

    galleryImages: ["images/00s_shirt.jpg", "images/00s_shirt2.jpg"]
  },
  {
    title: "Modern Day",

    content: "Lightweight, breathable shirts with sponsor logos and designer collabs.",
    galleryImages: ["images/10_shirt.jpg"]

  }
];



let currentStep = 0;
let currentImageIndex = 0;

//dom elements
const title = document.getElementById("timeline-title");
const content = document.getElementById("timeline-content");


const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");


const nextShirtBtn = document.getElementById("nextShirtBtn");
const prevShirtBtn = document.getElementById("prevShirtBtn");

const galleryImage = document.getElementById("galleryImage");

function updateTimeline() {
  const step = timelineData[currentStep];
  title.innerText = step.title;
  content.innerText = step.content;
  prevBtn.disabled = currentStep == 0;
  nextBtn.disabled = currentStep == timelineData.length - 1;
  galleryImage.src = step.img;
  galleryImage.alt = step.title;
  currentImageIndex = 0;
  updateGalleryImage();
}

//switch timeline parts
nextBtn.addEventListener("click", () => {
  if (currentStep < timelineData.length - 1) {
    currentStep++;
    updateTimeline();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentStep > 0) {
    currentStep--;
    updateTimeline();
  }
});


//function to update image src //combined with earlier test
function updateGalleryImage() {
  const images = timelineData[currentStep].galleryImages;
  if (images.length === 0) {
    galleryImage.src = ""; //array check
    galleryImage.alt = "No image available";
  }
  else {
    galleryImage.src = images[currentImageIndex];
    galleryImage.alt = timelineData[currentStep].title + " image " + (currentImageIndex + 1);
  }
}
//originally
//prevShirtBtn.addEventListener("click", () => {
//if (currentImageIndex > 0) {
//  currentImageIndex--;
// } else {
//   currentImageIndex = galleryImages.length - 1; // loop to last image
// }
//  updateGalleryImage();
//});


//nextShirtBtn.addEventListener("click", () => {
//   if (currentImageIndex < galleryImages.length - 1) {
// currentImageIndex++;
// } else {
//    currentImageIndex = 0;
// }
//  updateGalleryImage();
//});

nextShirtBtn.addEventListener("click", () => {
  const images = timelineData[currentStep].galleryImages; //get from array
  if (!images || images.length === 0) return;

  currentImageIndex = (currentImageIndex + 1) % images.length;  //loop
  updateGalleryImage();
});

prevShirtBtn.addEventListener("click", () => {
  const images = timelineData[currentStep].galleryImages;
  if (!images || images.length === 0) return;

  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  updateGalleryImage();
});



updateTimeline();


//making of shirts page
const process = [
  {
    processTitle: "Step 1: Design",
    processContent: "A digital blueprint is created by designers.",
    processImage: ["images/example.jpg"],
    funFactBox: "Designers use 3D software to create mockups"
  },
  {
    processTitle: "Step 2: Fabric Selection",
    processContent: "Lightweight, breathable materials are chosen. The first jerseys were made of cotton, and as technology evolved polyester was used. Even recycliable materials are used today",
    processImage: ["images/example.jpg"],
    funFactBox: "Modern football shirts can be made from up to 13 recycled plastic bottles! Nike’s 2010 World Cup kits were the first to use this innovation."
  },
  {
    processTitle: "Step 3: Dyeing",
    processContent: "Fabric is colored with vibrant dyes.",
    processImage: ["images/example.jpg"],
    funFactBox: "To get bold, vibrant colors, shirts are often dyed using heat and pressure"
  },
  {
    processTitle: "Step 4: Stitching",
    processContent: "Panels are cut and sewn together.",
    processImage: ["images/example.jpg"],
    funFactBox: "One football shirt can be made from over 20 different fabric panels, each carefully cut and stitched for maximum movement and comfort."
  },
  {
    processTitle: "Step 5: Printing",
    processContent: "Logos and names are heat-pressed.",
    processImage: ["images/nameset.jpg"],
    funFactBox: "For a long while, namesets were made out of felt, a soft but hard material. This was eventually replaced with plastic in 2013"
  }
 
];

let currentProcessStep = 0;

const processNextBrtn = document.getElementById("processNextBrtn");
const processPrevBrtn = document.getElementById("processPrevBrtn");
const processTitle = document.getElementById("process-title");
const processContent = document.getElementById("process-content");
const processImage = document.getElementById("process-image");
const funFactBox = document.getElementById("funFact");
function updateProcess() {
  const step = process[currentProcessStep];
  processTitle.innerText = step.processTitle;
  processContent.innerText = step.processContent;

  if (step.processImage.length > 0) { //put her incase i want add more things
    processImage.src = step.processImage[0];
    processImage.alt = step.processTitle;
    processImage.style.display = "block";
  } else {
    processImage.style.display = "none";
  }

  funFactBox.innerText = step.funFactBox || "";
  processPrevBrtn.disabled = currentProcessStep == 0;
  processNextBrtn.disabled = currentProcessStep == process.length - 1;
}


processNextBrtn.addEventListener("click", () => {
  if (currentProcessStep < process.length - 1) {
    currentProcessStep++;
    updateProcess();
  }
});

processPrevBrtn.addEventListener("click", () => {
  if (currentProcessStep > 0) {
    currentProcessStep--;
    updateProcess();
  }
});



//hover
processImage.addEventListener("mouseenter", () => {
  funFactBox.style.opacity = 1;
  funFactBox.style.pointerEvents = "auto";
});

processImage.addEventListener("mouseleave", () => {
  funFactBox.style.opacity = 0;
  funFactBox.style.pointerEvents = "none";
});
// Initial display
updateProcess();




//Contrversial Shirts
const Controversial_Shirts = [
  {
    ShirtTitle: "Fiorentina  1992 Home Shirt",
    ShirtContent: "Withdrawn  due to a pattern that unintentionally resembled a swastika.",
    ShirtImage: ["images/florence.jpg"],
    JerseyFunFact: "The club issued an apology and the shirt was replaced half way through the season."
  },
  {
    ShirtTitle: "Caneroon 2004 One-Piece Shirt",
    ShirtContent: "Cameroon was fined by FIFA and new rules were establishing stating that the shirt and shorts had to be seperate",
    ShirtImage: ["images/2004.jpg"],
    JerseyFunFact: "Players found it diffcult to put on as the pants were sew on the shirt"
  },
  {
    ShirtTitle: "Cameroon 2002 Sleeveless Shirt",
    ShirtContent: "Banned by FIFA for violating uniform regulations, despite being worn during AFCON.",
    ShirtImage: ["images/cameroon_2002.jpg"],
    JerseyFunFact: "Cameroon’s sleeveless kit was inspired by track uniforms and shocked the football world."
  },
 
];

let CurrentShirtStep = 0;

const ShirtNextBrtn = document.getElementById("shirtNextBrtn");
const ShirtPrevBrtn = document.getElementById("shirtPrevBrtn");
const ShirtTitle = document.getElementById("shirt-title");
const ShirtContent = document.getElementById("shirt-content");
const ShirtImage = document.getElementById("shirt-image");
const JerseyFunFact = document.getElementById("funFact2");
function updateShirtStep() {
  const step = Controversial_Shirts[CurrentShirtStep];
  ShirtTitle.innerText = step.ShirtTitle;
  ShirtContent.innerText = step.ShirtContent;

  if (step.ShirtImage.length > 0) { //put her incase i want add more things
    ShirtImage.src = step.ShirtImage[0];
    ShirtImage.alt = step.ShirtTitle;
    ShirtImage.style.display = "block";
  } else {
    ShirtImage.style.display = "none";
  }

  JerseyFunFact.innerText = step.JerseyFunFact || "";
  ShirtPrevBrtn.disabled = CurrentShirtStep == 0;
  ShirtNextBrtn.disabled = CurrentShirtStep == Controversial_Shirts.length - 1;
}


ShirtNextBrtn.addEventListener("click", () => {
  if (CurrentShirtStep < Controversial_Shirts.length - 1) {
    CurrentShirtStep++;
    updateShirtStep();
  }
});

ShirtPrevBrtn.addEventListener("click", () => {
  if (CurrentShirtStep > 0) {
    CurrentShirtStep--;
    updateShirtStep();
  }
});


//hover
ShirtImage.addEventListener("mouseenter", () => {
  JerseyFunFact.style.opacity = 1;
  JerseyFunFact.style.pointerEvents = "auto";
});

ShirtImage.addEventListener("mouseleave", () => {
  JerseyFunFact.style.opacity = 0;
  JerseyFunFact.style.pointerEvents = "none";
});
// Initial display
updateShirtStep();

//quiz
const quizData = [
  {
    question: "What material were early football shirts made from?",
    options: ["Polyester", "Wool", "Heavy Cotton", "Silk"],
    answer: "Heavy Cotton"
  },
  {
    question: "Which decade saw sponsorships first appear on football shirts?",
    options: ["1950s", "1960s", "1970s", "1990s"],
    answer: "1970s"
  },
  {
    question: "What did the introduction of polyester improve?",
    options: ["Style only", "Heat retention", "Moisture control", "Fabric stiffness"],
    answer: "Moisture control"
  },
  {
    question: "Which of these brands is NOT a football shirt maker?",
    options: ["Nike", "Adidas", "Puma", "Chanel"],
    answer: "Chanel"
  },
];

let currentQuestionIndex = 0;
let Quizscore = 0;


//quiz
const quizSection = document.getElementById("quizSection");
const quizContainer = document.getElementById("quizContainer");
const startQuizBtn = document.getElementById("startQuizBtn");
const nextQuestionBtn = document.getElementById("nextQuestionBtn");
const quizResult = document.getElementById("quizResult");
const backToStartBtn = document.getElementById("backToStartBtn");
startQuizBtn.addEventListener("click", () => {
  document.querySelectorAll('.page > *:not(#quizSection)').forEach(el => el.style.display = "none"); //clear every other page
  quizSection.style.display = "block";
  startQuizBtn.style.display = "none";

  showQuestion();
});


//code here is refrenced
function showQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  quizContainer.innerHTML = ` 
        <div class="quiz-question">${currentQuestion.question}</div> 
        ${currentQuestion.options.map(option => `<div class="quiz-option">${option}</div>`).join('')} `;
  nextQuestionBtn.style.display = "none"; //this one

  document.querySelectorAll('.quiz-option').forEach(Option_Answer => {
    Option_Answer.addEventListener("click", () => {
      if (Option_Answer.textContent === currentQuestion.answer) {
        Quizscore++;
        Option_Answer.style.backgroundColor = "lightgreen";
      } else {
        Option_Answer.style.backgroundColor = "lightcoral";
      }
      //disable after one click
      document.querySelectorAll('.quiz-option').forEach(opt => opt.style.pointerEvents = "none");
      nextQuestionBtn.style.display = "inline-block";
    });
  });
}

nextQuestionBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    showQuestion();
  } else {
    quizContainer.innerHTML = "";
    nextQuestionBtn.style.display = "none";
    quizResult.innerHTML = `<strong>Quiz complete!</strong> You scored ${Quizscore} out of ${quizData.length}.`;

    backToStartBtn.style.display = "inline-block";
  }
});


backToStartBtn.addEventListener("click", () => {



  quizSection.style.display = "none";


  document.querySelectorAll('.page > *:not(#quizSection)').forEach(el => el.style.removeProperty("display")); //reset to before




  currentQuestionIndex = 0;
  Quizscore = 0;
  quizResult.innerText = "";
  nextQuestionBtn.style.display = "none";
  backToStartBtn.style.display = "none";

  startQuizBtn.style.display = "inline-block";

});