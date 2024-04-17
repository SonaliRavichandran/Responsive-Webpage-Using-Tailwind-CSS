let menu=document.getElementById("mobilemenu");

function menuClick(){
    if(menu.classList.contains("hidden")){
        menu.classList.remove("hidden")
    }
    else{
        menu.classList.add("hidden")
    }
    
}