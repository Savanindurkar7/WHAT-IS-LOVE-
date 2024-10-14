const apiKey = '+k/t0W8t28ZDFikFozHYsA==pq2PWdH65GCeiOS5';  // Replace with your actual API key
const apiUrl = 'https://api.api-ninjas.com/v1/quotes?category=love';  // You can change the category if needed


let quot = document.querySelector(".qt");
let author = document.querySelector(".at")
let chnage = document.querySelector(".btn")


async function Getdata(param) {
  try {
   const response = await fetch(apiUrl,{
     method : 'GET',
     headers:{
       'X-Api-Key':apiKey
     }
   })
   
   let data = await response.json();
   console.log(data)
   quot.innerText = data[0].quote
   author.innerText = "- "+ data[0].author
   
  } catch (e) {
    throw e
  }
}

Getdata()

chnage.addEventListener('click',()=>{
  Getdata()
})