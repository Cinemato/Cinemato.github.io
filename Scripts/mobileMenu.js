
var menuItems = document.getElementsByClassName("mobile")[0];
var burger = document.getElementById("burger");

menuItems.style.maxHeight = "0px";

function menutoggle(){
    if(menuItems.style.maxHeight == "0px"){
        menuItems.style.maxHeight = "300px";
        burger.src = "Images/x.svg";
    }
    
    else{
        menuItems.style.maxHeight = "0px";
        burger.src = "Images/menu.svg";
    }
}