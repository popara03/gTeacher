const burger = document.querySelector(".burger");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");
const menu = document.querySelector(".menu");
const container = document.querySelector(".container");

// Burger menu open/close
burger.addEventListener("click",function(){
    if(line1.classList.contains("line1-x"))
    {
        line1.classList.remove("line1-x");
        line2.classList.remove("line2-x");
        line3.classList.remove("line3-x");
    
        menu.style.transform="translateY(-15vh)";
    }
    else
    {
        line1.classList.add("line1-x");
        line2.classList.add("line2-x");
        line3.classList.add("line3-x");
    
        menu.style.transform="translateY(15vh)";
    }
})
//target menu close
container.addEventListener("click",function(x)
{
    if(line1.classList.contains("line1-x"))
    {
        if(!x.target.classList.contains("menu"))
        {
            line1.classList.remove("line1-x");
            line2.classList.remove("line2-x");
            line3.classList.remove("line3-x");
        
            menu.style.transform="translateY(-15vh)";
        }
    }
})

//dugmad kao hyperlinkovi na contact page
const navBt = document.getElementById("navBt");

navBt.addEventListener("click",function(){
    window.location.href = "contact.html";
})

const priceBt = document.getElementById("priceBt");

priceBt.addEventListener("click",function(){
    window.location.href = "contact.html";
})

const reservationBt = document.getElementById("reservationBt");

reservationBt.addEventListener("click",function(){
    window.location = "contact.html";
})

//fix za override transforma
reservationBt.onmouseenter = function(){
    reservationBt.style.transform="scale(1.05)";
}
reservationBt.onmouseleave = function(){
    reservationBt.style.transform="scale(1)";
}

const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");

box1.onmouseenter = function(){
    box1.style.transform="scale(1.01)";
}
box1.onmouseleave = function(){
    box1.style.transform="scale(1)";
}

box2.onmouseenter = function(){
    box2.style.transform="scale(1.01)";
}
box2.onmouseleave = function(){
    box2.style.transform="scale(1)";
}

box3.onmouseenter = function(){
    box3.style.transform="scale(1.01)";
}
box3.onmouseleave = function(){
    box3.style.transform="scale(1)";
} 