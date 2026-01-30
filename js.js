const one = document.querySelector(".moneypic");
const expOne=document.querySelector(".money");

one.addEventListener('click',()=>{
    expOne.classList.add("active")
    expOne.classList.remove("money")
})

const cross=document.querySelector(".cross");

cross.addEventListener('click',()=>{
    expOne.classList.remove("active");
    expOne.classList.add("money");
})

const two=document.querySelector(".restaurantpic");
const expTwo=document.querySelector(".restaurant")

two.addEventListener('click',()=>{
    expTwo.classList.add("active")
    expTwo.classList.remove("restaurant")
})

const cross2=document.querySelector(".cross2");

cross2.addEventListener('click',()=>{
    expTwo.classList.remove("active");
    expTwo.classList.add("restaurant");
})

const three=document.querySelector(".travelpic");
const expThree=document.querySelector(".travel");

three.addEventListener('click',()=>{
    expThree.classList.add("active")
    expThree.classList.remove("travel")
})

const cross3=document.querySelector(".cross3");

cross3.addEventListener('click',()=>{
    expThree.classList.remove("active");
    expThree.classList.add("travel");
})

const four=document.querySelector(".confusedpic");
const expFour=document.querySelector(".confused");

four.addEventListener('click',()=>{
    expFour.classList.add("active")
    expFour.classList.remove("confused")
})

const cross4=document.querySelector(".cross4");

cross4.addEventListener('click',()=>{
    expFour.classList.remove("active");
    expFour.classList.add("confused");
})