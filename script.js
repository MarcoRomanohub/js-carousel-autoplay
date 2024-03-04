const itemsWrapper = document.querySelector('.items-wrapper');
const sideBar = document.querySelector('.side-bar');
const up = document.querySelector('.top');
const down = document.querySelector('.bottom');

// up.classList.add('hide');

let counterImg = 0;

const images = [
  'img/01.webp',
  'img/02.webp',
  'img/03.webp',
  'img/04.webp',
  'img/05.webp',
]

for(let i=0; i < images.length; i++){
  const img = images[i];
  itemsWrapper.innerHTML += `<img class="img" src="${img}" >`;
  sideBar.innerHTML += `
  <div class="side-img">
    <img class="miniature" src="${img}">
  </div>`;
}

const itemsCollection = document.getElementsByClassName('img');
const miniatureCollection = document.getElementsByClassName('miniature');
itemsCollection[counterImg].classList.add('active');
miniatureCollection[counterImg].classList.add('active');

up.addEventListener('click', function(){
  // down.classList.remove('hide');

  itemsCollection[counterImg].classList.remove('active');
  miniatureCollection[counterImg].classList.remove('active');

  counterImg--;

  if(counterImg < 0){
    counterImg = images.length - 1;
  }
  // if(counterImg === 0){
  //   up.classList.add('hide');
  // }

  itemsCollection[counterImg].classList.add('active');
  miniatureCollection[counterImg].classList.add('active');
})

down.addEventListener('click', function(){
  // up.classList.remove('hide');

  itemsCollection[counterImg].classList.remove('active')
  miniatureCollection[counterImg].classList.remove('active')

  counterImg++;
  
  if(counterImg === images.length){
    counterImg = 0;
  }

  itemsCollection[counterImg].classList.add('active')
  miniatureCollection[counterImg].classList.add('active')


  // if(counterImg === images.length -1){
  //   down.classList.add('hide');
  // }
})

let counter = 0;
// ogni 3 secondi incremento il contatore
const contatoreAutomatico = setInterval(()=>{
  itemsCollection[counterImg].classList.remove('active')
  miniatureCollection[counterImg].classList.remove('active')

  counterImg++;
  
  if(counterImg === images.length){
    counterImg = 0;
  }

  itemsCollection[counterImg].classList.add('active')
  miniatureCollection[counterImg].classList.add('active')

},3000)
