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