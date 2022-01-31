
var orders = document.getElementsByClassName("orders")[0];
var container = document.getElementsByClassName("orders-container")[0];
var arrow = document.getElementById("down-arrow");

var originalHeight = orders.clientHeight;

orders.style.height = "0px";

function ordersToggle(){
   
    if(screen.width <= 950 && screen.width > 800){
        if(orders.style.height == "0px"){
            orders.style.height = originalHeight  + "px";
            container.style.width = "80%";
            container.style.padding = "20px";
        }
        
        else{
            orders.style.height = "0px";
            container.style.width = "70%";
            container.style.padding = "10px";
        }
    }
    else if(screen.width >= 800){
        if(orders.style.height == "0px"){
            orders.style.height = originalHeight  + "px";
            container.style.width = "50%";
            container.style.padding = "50px";
        }
        
        else{
            orders.style.height = "0px";
            container.style.width = "400px";
            container.style.padding = "10px";
        }
    }
    else{
        if(orders.style.height == "0px"){
            orders.style.height = originalHeight  + "px";
            container.style.width = "100%";
            container.style.padding = "20px";
        }
        
        else{
            orders.style.height = "0px";
            container.style.width = "100%";
            container.style.padding = "10px";
        }
    }
    
    arrow.classList.toggle("rotated-arrow");
}