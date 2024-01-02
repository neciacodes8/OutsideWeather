
function findFormResults (event){
    event.preventDefault ();
    let barSearcher = document.querySelector("#search-bar");
    let cityNameElement = document.querySelector("#city-name");
    cityNameElement.innerHTML=barSearcher.value ;

}


let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit",findFormResults);
