
const count=document.getElementById("count");
const decrement=document.getElementById("decrement");
const reset=document.getElementById("Reset");
const increment=document.getElementById("increment");


decrement.addEventListener("click",()=>{
    let counterInt = parseInt(count.textContent);
    count.textContent= counterInt - 1;
});
increment.addEventListener("click",()=>{
    let counterInt = parseInt(count.textContent);
    count.textContent= counterInt + 1;
});
reset.addEventListener("click",()=>{
    count.textContent="0";
});
console.log(count.textContent);
