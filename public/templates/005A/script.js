document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form'); // Ganti dengan ID formulir Anda
    
    form.addEventListener('submit', async function (event) {
      event.preventDefault();

      let data = {
        name: form.firstElementChild.value,
        message: form.firstElementChild.nextElementSibling.nextElementSibling.value
      }
      let options = {
          method: 'POST',
          headers: {
              "Content-type": "application/json; charset=UTF-8"
          },
          body: JSON.stringify(data)
      }
      const promise = fetch('/template/005A', options); // inget ubah database
      promise.then(response => {
          if(!response.ok){
              console.error(response)
          } else {
              location.reload()
          }
      })
      
    });
  });

// SIMPLE PROTECT
// document.addEventListener('contextmenu', event => event.preventDefault());

//   COVER
const cover = document.getElementById("cover")
const coverBtn = document.querySelector("#cover button")

document.addEventListener("DOMContentLoaded", function(event){
  coverBtn.addEventListener("click", ()=>{
      cover.style.transform = "translateY(-100%)"
      setUp()
  })
});

// SETUP
const heroImg = document.querySelector('.hero img')
const heroMain = document.querySelector(".hero .main-hero")
const heroSub = document.querySelectorAll(".hero .sub-text")
const heroSpan = document.querySelectorAll(".hero span")

function setUp(){
    heroImg.style.transform = "translateY(0%)"
    heroImg.style.opacity = "1"
    heroMain.style.transform = "translateY(0%)"
    heroMain.style.opacity = "1"
    heroSpan[0].style.transform = "translateY(0%)"
    heroSpan[0].style.opacity = "1"
    heroSpan[1].style.transform = "translateY(0%)"
    heroSpan[1].style.opacity = "1"
    heroSub[0].style.transform = "translateY(0%)"
    heroSub[1].style.transform = "translateY(0%)"
    heroSub[0].style.opacity = "1"
    heroSub[1].style.opacity = "1"
    audioPlay()
}
// AUDIO
const btnMusic = document.querySelector(".music")
const btnMusicImg = document.querySelector(".music img")
const audio = document.querySelector(".music audio")

btnMusic.addEventListener("click", () =>{
    if(btnMusic.classList.contains("musicOn")){
        btnMusic.classList.replace("musicOn", "musicOff")
        btnMusicImg.src ="../templates/005A/svg/MusicOff.svg"
        audio.pause()
    }else{
        btnMusic.classList.replace("musicOff", "musicOn")
        btnMusicImg.src ="../templates/005A/svg/MusicOn.svg"
        audio.play()
    }
})

function audioPlay(){
    audio.play()
}
// GALLERY
const allImgs = document.querySelectorAll(".box-gallery img")
const allImgsLenght = allImgs.length
const galleryZoom = document.querySelector(".gallery-zoom")
const exitBtn = document.getElementById("exit-zoom")
const prevBtn = document.getElementById("prev-zoom")
const nextBtn = document.getElementById("next-zoom")
const centerImg = document.querySelector(".core-zoom .center")
const prevImg = document.querySelector(".core-zoom .prev")
const nextImg = document.querySelector(".core-zoom .next")
var imgId = 1

allImgs.forEach(img => {
    img.addEventListener("click", (e)=>{
        imageZoom(e.target)
    })
});

function imageZoom(img){
    galleryZoom.style.zIndex = "100"
    galleryZoom.style.opacity = 1
    imgId = parseInt(img.classList.value.split("-")[1])
    centerImg.src = allImgs[imgId - 1].src
    prevImg.src = allImgs[imgId].src
    nextImg.src = allImgs[imgId + 1].src
}

prevBtn.addEventListener('click', ()=>{
    setImgId(0)
    centerImg.src = allImgs[imgId - 1].src
    prevImg.src = allImgs[imgId].src
    nextImg.src = allImgs[imgId + 1].src
})
nextBtn.addEventListener('click', ()=>{
    setImgId(1)
    centerImg.src = allImgs[imgId - 1].src
    prevImg.src = allImgs[imgId].src
    nextImg.src = allImgs[imgId + 1].src
})
function setImgId(e){
    if(e == 0){
        if(imgId == 0){
            imgId = allImgsLenght - 1
        }else{
            imgId -= 1
        }
    }else{
        if(imgId == allImgsLenght - 1){
            imgId = 0
        }else{
            imgId += 1
        }
    }
}
exitBtn.addEventListener("click", function(){
    galleryZoom.style.zIndex = "-100"
    galleryZoom.style.opacity = 0
})
