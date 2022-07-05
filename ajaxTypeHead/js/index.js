
const url = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
let searchinput = document.querySelector("#searchinput");
let suggestions = document.querySelector(".suggestions");

const cities = [];
fetch(url)
    .then(blob=>blob.json())
    .then(data=>cities.push(...data));


function showCities(cities){
    console.log(cities);
}

function displayData(wordToMatch,cities){
    return cities.filter(place=>{
        const regEx = new RegExp(wordToMatch,'gi');
        return place.city.match(regEx) || place.state.match(regEx);
    })
}
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function displayDetails(){
    if(this.value!==""){
        const matches = displayData(this.value,cities);
        const matched = matches.map(place=>{
        const regex = new RegExp(this.value,'gi');
        const cityName = place.city.replace(regex,`<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex,`<span class="hl">${this.value}</span>`);
        return `<li class="each-el"><span>${cityName},</span> ${stateName}, <span class="population">${numberWithCommas(place.population)}</span></li>`
        }).join('')
        suggestions.innerHTML = matched;
    }
    else{
        suggestions.innerHTML = "";
    }
    
    
}

searchinput.addEventListener("keyup",displayDetails)