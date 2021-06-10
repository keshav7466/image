var input=document.getElementById("input");
var btn=document.getElementById("btn");
var img=document.getElementById("img");
function show(){
    if(input.value=="Ram Navami")
    img.src="Ram Navami.png";
    else if(input.value=="Diwali")
    img.src="Diwali.png";
    else if(input.value=="Birthday")
    img.src="Birthday.png";
}