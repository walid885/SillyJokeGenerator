const btlEL = document.getElementById("btn");
const apiKey = "1oh53ux0KpmSjYKEJITqSg==xa7JZ3V8wGdYvvTk"
const JokeEL = document.getElementById("joke");

const options ={
    method: "GET",
    headers: {
        "X-Api-key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke(){

    try {
        JokeEL.innerText = "the joke is coming HEHEHEEE";
    btlEL.disabled = true; 
    btlEL.innerText ="Loading. . ."
    const respon = await fetch(apiURL,options)
    const data = await  respon.json();
    JokeEL.innerText = data[0].joke;
    btlEL.disabled = false; 
    btlEL.innerText ="One more ! "

    } catch (error) {
        JokeEL.innerText =" Error happend Try again later "
}
}
btlEL.addEventListener("click",getJoke);