
for(var i = 0; i<document.querySelectorAll(".drum").length;i++){

    
document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);

function handleClick(){
    
    var name = this.innerHTML;
    var url = "sounds/"+name+".mp3";
    audio = new Audio(url);
    audio.play();
    buttonAnimation(name);
    
}}

document.addEventListener("keypress",function(event){
    var key = event.key;
    var url = "sounds/"+key+".mp3";
    audio = new Audio(url);
    audio.play();
    buttonAnimation(key);
});

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },200);
}