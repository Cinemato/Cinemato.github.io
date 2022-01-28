
var orders = document.getElementsByClassName("orders")[0];
var container = document.getElementsByClassName("orders-container")[0];

var originalHeight = orders.clientHeight;
orders.style.height = "0px";

if(screen.width > 1400){
    container.style.width = "400px";
}
else{
    container.style.width = "100%";
}

function ordersToggle(){
    
    if(screen.width >= 1400){
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
}