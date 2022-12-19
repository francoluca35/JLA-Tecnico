
// togglerClick funcion
function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
}


const fulImgBox = document.getElementById("fulImgBox");
fulImg= document.getElementById("fulImg");

function openFulImg(reference){
  fulImgBox.style.display="flex"
  fulImg.src = reference;
}

function closeImg(){
  fulImgBox.style.display="none";
}