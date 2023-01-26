



/* Declare variables below to save the different sections (divs) of your story*/
//let title = document.querySelector(".title");
//let StoryOpening = document.querySelector(".story-opening");
//let Buttons = document.querySelector(".buttons");
let Storypart2Run = document.querySelector(".option-one-screen");
let Storypart2WatiAMoment = document.querySelector(".option-two-screen");
let Storypart3RunEnd = document.querySelector(".option-one-end");
let Storypart3WaitAMomentEnd = document.querySelector(".option-two-end");
let PlanButton = document.querySelector(".option-one");
let PlanButton2 = document.querySelector(".option-two");
let PlanButton3 = document.querySelector(".option-three");
let PlanButton4 = document.querySelector(".option-four");
let tips = document.querySelector(".hongse");
let image = document.querySelector(".danger2");
let image2 = document.querySelector(".danger3");
let body = document.querySelector(".body");
let text = document.querySelector(".text");
let StoryOpening = document.querySelector(".story-opening");
let openingImage = document.querySelector(".opening-image");



//When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
PlanButton.onclick=function(){
    openingImage.style.display = "none";
    Storypart2WatiAMoment.style.display = "none";
    Storypart3WaitAMomentEnd.style.display = "none";
    body.style.backgroundColor="#575751";
    
    image.style.width="600px";
	Storypart2Run.style.display="block";
tips.innerHTML="This is a wrong choice! You are in danger! ! ! !";
};

PlanButton2.onclick=function(){
    openingImage.style.display = "none";
    Storypart2Run.style.display = "none";
    Storypart3RunEnd.style.display = "none";
   
    body.style.backgroundColor="#c96424";
	Storypart2WatiAMoment.style.display="block";
tips.innerHTML="What a wise choice, your brain can think calmly even in danger! You have fully protected yourself from danger!";
};

PlanButton3.onclick=function(){
    Storypart2Run.style.display = "none";
    openingImage.style.display = "none";
    Storypart2WatiAMoment.style.display = "none";
    body.style.backgroundColor="#575751";
    image2.style.width="600px";
	Storypart3RunEnd.style.display="block";
tips.innerHTML="In danger, one wrong decision can kill you. . . . You unlocked the death ending.";
};
PlanButton4.onclick=function(){
    openingImage.style.display = "none";
    Storypart2WatiAMoment.style.display = "none";
	Storypart3WaitAMomentEnd.style.display="block";
    body.style.backgroundColor="#c96424";
tips.innerHTML="Save your strength and wait for rescue. Congratulations on surviving this catastrophe. . . . . You unlocked the Survival ending.";
};


