// TODO: Write JavaScript code here to fetch a random quote from the API and update the HTML accordingly
// API Link: You can use the Quotes Free API (https://type.fit/api/quotes) to get random quotes.

let mainbody = document.querySelector('.main')
let inputBox = document.querySelector('.btn');
console.log("input box", inputBox);
// inputBox.addEventListener ('change',(event)=>{
//     console.log(event.target.value);
// })
async function fetchData (){
    let response = await fetch('https://type.fit/api/quotes');
    let data = await response.json();
    console.log(data);

    console.log(mainbody.innerHTML,"main body");

    let mainbodyinnerHTML = mainbody.innerHTML;
    // data.map((element)=>{
    //  mainbody.innerHTML = mainbody.innerHTML +  `<div class="card">
    //  <div class="header" style="height: 30%;"> Quote : ${element.text}</div> 
    //  <div class="image" style="height: 70%;"> Author : ${element.author}</div>`
    
     
    //  })

     mainbody.innerHTML = mainbody.innerHTML +  `<div class="card">
     <div class="header" style="height: 30%;"> Quote : ${data[0].text}</div> 
     <div class="image" style="height: 70%;"> Author : ${data[0].author}</div>`
    let value = document.querySelector(".card")
    console.log(value);

    value.addEventListener("mouseenter", function(){
        value.style.backgroundColor = "pink"
    })
    
    value.addEventListener("mouseleave", function(){
        value.style.backgroundColor = "green"
    })
}

async function randomNum(){

}
let btn = document.querySelector('.btn')
console.log(btn);

btn.addEventListener('click',fetchData)