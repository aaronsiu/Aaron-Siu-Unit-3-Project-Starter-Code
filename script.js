/* Declare variables below to save the different sections (divs) of your story*/
let title=document.querySelector("title");
let story_opening=document.querySelector("story-opening");
let buttons=document.querySelector("buttons");
let option_two_end1=document.querySelector("option-two-end1");
let option_two_end=document.querySelector("option-two-end");
let option_one_end=document.querySelector("option-one-end");
let option_one_end1=document.querySelector("option-one-end1");
let otion_two_end1=document.querySelector("option-two-end1");
let option_one=document.querySelector(".option-one");
let open_one_screen=document.querySelector(".open-one-screen");
let opening=document.querySelector(".Opening");
let open_one_end=document.querySelector(".open-one-end");
let option3=document.querySelector(".Satanael");
let Return=document.querySelector(".Return");
let option_two=document.querySelector(".option-two");
let open_two_screen=document.querySelector(".open-two-screen");
let option_6=document.querySelector(".option-6");
let open_one_end1=document.querySelector(".open-one-end1");
let Return1=document.querySelector(".Return1");
let gun=document.querySelector(".Gun");
let open_two_end=document.querySelector(".open-two-end");
let Return2=document.querySelector(".Return2");
let option_5=document.querySelector(".option-5");
let open_two_end1=document.querySelector(".open-two-end1");
let Return3=document.querySelector(".Return3");
let img=document.querySelector(".Jokerimg");

option_one.onclick=function(){
  open_one_screen.style.display= "block";
    opening.style.display="none";
   };

option3.onclick=function(){
    open_one_end.style.display="block";
    open_one_screen.style.display="none";
};

Return.onclick=function(){
    opening.style.display="block";
    open_one_end.style.display="none";
   
};


option_two.onclick=function(){
    open_two_screen.style.display="block";
    opening.style.display="none";

};

option_6.onclick=function(){
    open_one_end1.style.display="block";
    open_two_screen.style.display="none";
};

Return1.onclick=function(){
    opening.style.display="block";
    open_one_end.style.display="none";
    open_one_end1.style.display="none";
};

gun.onclick=function(){
    open_two_end.style.display="block";
    open_one_screen.style.display="none";
};
    
Return2.onclick=function(){
   open_two_end.style.display="none";
    opening.style.display="block";
    
};

option_5.onclick=function(){
    open_two_end1.style.display="block";
    open_two_screen.style.display="none";
    
};

Return3.onclick=function(){
    open_two_end1.style.display="none";
    opening.style.display="block";
};

