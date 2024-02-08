const phone = 62895622771393
const id = "001A"
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
      const promise = fetch('/template/'+id, options); // inget ubah database
      promise.then(response => {
          if(!response.ok){
              console.error(response)
          } else {
            // Tambahkan data ke list
            const boxText = document.querySelector(".box-text")
            const lastChat = document.querySelector(".box-text .item-text")
            const cover = document.createElement("div")
            cover.classList.add("item-text")
            const imgCover = document.createElement("img")
            imgCover.src = "../templates/"+id+"/svg/Letter.svg"
            const coverContent = document.createElement("div")
            coverContent.classList.add("content-text")
            const span = document.createElement("span")
            span.innerHTML = form.firstElementChild.value
            const par = document.createElement("p")
            par.innerHTML = form.firstElementChild.nextElementSibling.nextElementSibling.value

            coverContent.appendChild(span)
            coverContent.appendChild(par)
            cover.appendChild(imgCover)
            cover.appendChild(coverContent)
            boxText.insertBefore(cover, lastChat)

            // clear form
            form.firstElementChild.value = ""
            form.firstElementChild.nextElementSibling.value = ""
            form.firstElementChild.nextElementSibling.nextElementSibling.value = ""
          }
      })
      
    });
  });

// RSPV
const formWa = document.getElementById("rspv")
const btnRSPV = document.querySelector("#rspv button")
btnRSPV.addEventListener("click", ()=>{
  const name = document.querySelectorAll("#rspv input")[0].value
  const address = document.querySelectorAll("#rspv input")[1].value
  var message = ""
  if(document.querySelector("#hadir").checked == true){
    message = "Assalamualaikum%20Warahmatullahi%20Wabarakatuh%2C%20saya%20"+name+"%20selaku%20perwakilan%20keluarga%20besar%20ingin%20mengucapkan%20bahwa%20keluarga%20kami%20Bersedia%20Hadir%20pada%20acara%20pernikahan%20saudara.%20Terimakasih"
  }else{
    message = "Assalamualaikum%20Warahmatullahi%20Wabarakatuh%2C%20saya%20"+name+"%20selaku%20perwakilan%20keluarga%20besar%20ingin%20mengucapkan%20permohonan%20maaf%20karena%20keluarga%20kami%20Tidak%20Dapat%20Hadir%20pada%20acara%20pernikahan%20saudara.%20Terimakasih"
  }
  document.location.href = "https://wa.me/"+phone+"?text="+message
})

//   // SIMPLE PROTECT
//   document.addEventListener('contextmenu', event => event.preventDefault());

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
const span = document.querySelector(".hero .container .box-hero-section span")
const main = document.querySelector(".hero .container .box-hero-section .main-hero")
const subs = document.querySelectorAll(".hero .container .box-hero-section .sub-text")
const btn = document.querySelector(".hero button")


function setUp(){
    span.style.transform = "translateY(0%)"
    span.style.opacity = 1
    main.style.transform = "translateY(0%)"
    main.style.opacity = 1
    btn.style.transform = "translateY(0%)"
    btn.style.opacity = 1
    subs.forEach(sub =>{
      sub.style.transform = "translateY(0%)"
      sub.style.opacity = 1
    })
    audioPlay()
}
// AUDIO
const btnMusic = document.querySelector(".music")
const btnMusicImg = document.querySelector(".music img")
const audio = document.querySelector(".music audio")

btnMusic.addEventListener("click", () =>{
    if(btnMusic.classList.contains("musicOn")){
        btnMusic.classList.replace("musicOn", "musicOff")
        btnMusicImg.src ="../templates/"+id+"/svg/MusicOff.svg"
        audio.pause()
    }else{
        btnMusic.classList.replace("musicOff", "musicOn")
        btnMusicImg.src ="../templates/"+id+"/svg/MusicOn.svg"
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
    imgId = parseInt(img.classList.value.split("-")[1]) //1
    setNewImg(imgId)
}

prevBtn.addEventListener('click', ()=>{
    setImgId(0)
})
nextBtn.addEventListener('click', ()=>{
    setImgId(1)
})
function setImgId(e){
    if(e == 0){
        if(imgId == 0){
            imgId = allImgsLenght - 1
        }else{
            imgId -= 1
        }
    }else if(e == 1){
        if(imgId == allImgsLenght){
            imgId = 1
        }else{
            imgId += 1
        }
    }
    setNewImg(imgId)
}

function setNewImg(id){ //1
  centerImg.src = allImgs[id - 1].src
  if(id == 1){
    prevImg.src = allImgs[allImgsLenght - 1].src
  }else{
    prevImg.src = allImgs[id - 2].src
  }
  if(id == allImgsLenght){
    nextImg.src = allImgs[0].src // 1
  }else{
    nextImg.src = allImgs[id].src // 1
  }
}
exitBtn.addEventListener("click", function(){
    galleryZoom.style.zIndex = "-100"
    galleryZoom.style.opacity = 0
})

