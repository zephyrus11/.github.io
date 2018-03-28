// these const can be at the top as it is global scope
const closeButton = document.querySelector('.lightbox-close')
const lightBox = document.querySelector('.lightbox');
const pictureItems = document.querySelectorAll('.picture')
const lightboxPicture = document.querySelector('.lightbox-picture');



curPicture = "";
var pictureList =[
	"http://makegreekyogurt.com/wp-content/uploads/2011/08/greek-yogurt.jpg",
"http://ghk.h-cdn.co/assets/17/09/320x320/square-1488221538-greek-yogurt.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBxmEw4Z-ncPE1WjthKnQwPxseXLRbR3PM3jE1OH_L6495RPy6",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmwxdyFY5W0w6CnRhR403Ullan6eh3wL0qmZgVEEaMUjCVBWCaFQ"
]


function showPicture(event){

	lightBox.classList.remove('hidden');

	// curPicture++;
	// due to it being a function, keep it local scope
	const elementClickedOn = event.target;
	elementClickedOn.id = "curLightBox"
	console.log(elementClickedOn)
	const pictureItemParent = elementClickedOn.parentElement;

	//repalce contents of lightbox-picture with current picture and caption

	lightboxPicture.innerHTML = pictureItemParent.innerHTML; 
	console.log(lightboxPicture)	
}



var currentBox = document.getElementById("curLightbox")

let nxtBtn = document.querySelector('#next-btn')
nxtBtn.onclick = function(event){
	event.preventDefault()

	let lightBoxPic = document.querySelector('.lightbox-picture')
	curPicture++;
	lightBoxPic.children[0].setAttribute('src', pictureList[curPicture])
	console.log(curPicture)
	if (curPicture == 3){
		curPicture = 0;
		// console.log(curPicture);
	}	
}

let prevBtn = document.querySelector('#prev-btn')
prevBtn.onclick = function(event){
	event.preventDefault()

	let lightBoxPic = document.querySelector('.lightbox-picture')
	curPicture -= 1;
	if (curPicture === -1){
		curPicture = 0;
	}
	lightBoxPic.children[0].setAttribute('src', pictureList[curPicture])
	console.log(curPicture)
	if (curPicture < 0) {
		curPicture++;
		// console.log(curPicture);
	}	
}

//bens stuff


// const nxtBtn = document.getElementById("next-btn");
// nxtBtn.onclick = function(event){
// 	event.preventDefault();
// 	let lightbox = document.querySelector('.lightbox-picture');
// 	console.log(lightBox.children[0]);
// 	let nxtIndex = parseInt(lightbox.children[0].name) + 1
// 	lightbox.innerHTML = pictureItems[nxtIndex].innerHTML;
// }
// const prevBtn = document.getElementById("prev-btn");
// prevBtn.onclick = function(event){
// 	event.preventDefault();
// 	let lightbox = document.querySelector('.lightbox-picture');
// 	let prevIndex = parseInt(lightbox.children[0].name) - 1
// 	lightbox.innerHTML = pictureItems[prevIndex].innerHTML;
// }




function hidePicture(event){

	// this is local scope as well as it is a function based line
	event.preventDefault();
	lightBox.classList.add('hidden');
}

// hide lightbox when close button is clicked
closeButton.onclick=hidePicture;

for(let i = 0; i < pictureItems.length; i++){
	let item = pictureItems[i]
	
	item.onclick = showPicture;
}

function listing(direction){

}