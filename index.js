// var btn= document.querySelector(".drum");
// btn.addEventListener("click", listenMe);
for (var i=0;i<document.querySelectorAll(".drum").length;i++){
  
 document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var drumKey = this.innerHTML;
    makesound(drumKey);
 
// this.style.color="white";
 });
   // var chnge= this.style.backgroundColor= "r

}
 

   //  
   // `this ` is tyhe idetity of the button the triggered the event listener
   document.addEventListener("keypress", function(event){
      // alert("you have pressed  a key");
      makesound(event.key);
   })
    function makesound(key){
  switch (key) {
      case "w":
         let audio= new Audio("./sounds/tom-1.mp3");
         audio.play();
         break;
         case "a":
         let audio2= new Audio("./sounds/tom-2.mp3");
         audio2.play();
         break;
         case "s":
         let audio3= new Audio("./sounds/tom-3.mp3");
         audio3.play();
         break;
         case "d":
         let audio4= new Audio("./sounds/tom-4.mp3");
         audio4.play();
         break;
         case "j":
         let audio5= new Audio("./sounds/snare.mp3");
         audio5.play();
         break;
         case "k":
         let audio6= new Audio("./sounds/kick-bass.mp3");
         audio6.play();
         break;
         case "l":
         let audio7= new Audio("./sounds/crash.mp3");
         audio7.play();
         break;
   
      default:
         break;
   }
    }