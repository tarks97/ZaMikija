var msg = document.getElementById("msg").style.display = "none";

function validate(){
    
    var card = document.getElementById("card");
    
    if(card.value == ""){
        card.classList.add("error");
    }
    else{
        card.classList.add("error");
        document.getElementById("msg").style.display = "block";
    }
    return false;
}