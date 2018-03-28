const icon = document.querySelector("#icon")
const jokes = document.querySelector("#jokes")
const choices = document.querySelector("#choices")
	
fetch('https://api.chucknorris.io/jokes/categories').then(function(resp){
	return resp.json()
}).then(function(resp){
	console.log(resp) // to see if it's working
	for(i = 0; i < resp.length; i++){
		let newBtn = document.createElement('button');
		newBtn.name = resp[i];
		newBtn.innerHTML = resp[i];
		newBtn.onclick = function(event){
			console.log(event.target.name);
			generateJoke(event.target.name);
		}
		choices.appendChild(newBtn);
		
	}
})


function generateJoke(category){
	fetch("https://api.chucknorris.io/jokes/random" + "?category=" + category).then(function(response){
		return response.json();
		}).then(function(json){
			console.log(json);
			icon.src = json.icon_url; 
			jokes.innerHTML = json.value;
		});
	}