phone = 62895622771393
// Navitarion Move
const nav = document.querySelector("nav")
var prevY = 0
window.addEventListener("scroll", function(e){
  var currentY = window.pageYOffset
  if(prevY < currentY){
    nav.style.transform = "translateY(-120%)"
  }else{
    nav.style.transform = "translateY(0%)"
  }
  prevY = currentY
})

// Navigation Mobile
const buttonHam = document.querySelector("#ham")
const navbarMobile = document.querySelector(".mobileNav")

buttonHam.addEventListener("click", function(){
  if(navbarMobile.classList[1] == "nonActive"){
    navbarMobile.classList.replace("nonActive", "active")
  }
})
navbarMobile.addEventListener("click", function(){
  navbarMobile.classList.replace("active", "nonActive")
  
})
// Navigation Page
const allButtonNav = document.querySelectorAll("nav .container .cover-navbar .mid-navbar .navbarLink")
allButtonNav.forEach((btn)=>{
  btn.addEventListener("click", ()=>{
    var header = btn.dataset.header
    console.log(header)
    var element = document.querySelector(header)
    element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
  })
})
const allButtonNavMob = document.querySelectorAll(".mobileNav .navbarLink")
allButtonNavMob.forEach((btn)=>{
  btn.addEventListener("click", ()=>{
    var header = btn.dataset.header
    console.log(header)
    var element = document.querySelector(header)
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
  })
})
// Feature
const items = document.querySelectorAll(".items-feature .item")
const buttonExpand = document.querySelector(".expand-area button")
var isExpand = false
function setUp(){
    for (let i = 6; i < items.length; i++) {
    const item = items[i];
    item.style.display = "none"
    isExpand = false
  }
}

buttonExpand.addEventListener("click", function(){
  if(isExpand){
    for (let i = 6; i < items.length; i++) {
      const item = items[i];
      item.style.display = "none"
      isExpand = false
      buttonExpand.innerHTML = "Lihat lebih"
    }
  }else{
    for (let i = 6; i < items.length; i++) {
      const item = items[i];
      item.style.display = "flex"
      isExpand = true
      buttonExpand.innerHTML = "Lebih sedikit"
    }
  }
})
setUp()

// Offers
const day = document.querySelector(".day p")
const hour = document.querySelector(".hour p")
const minute = document.querySelector(".minute p")
const second = document.querySelector(".second p")

var units = countdown.DEFAULTS
const year = 2024,
      month = 1, // Januari  = 0
      date = 9

var start = new Date(year, month, date, 0, 0, 0)

var today = new Date();
var dd = today.getDate()
var mm = today.getMonth() + 1
var yyyy = today.getFullYear();

if(dd - date >= 0 && mm - month >= 0){
  day.innerHTML = 0
  hour.innerHTML = 0
  minute.innerHTML = 0
  second.innerHTML = 0
}else{
  setInterval(()=>{
    var ts = countdown(start, null)
    day.innerHTML = ts.days
    hour.innerHTML = ts.hours
    minute.innerHTML = ts.minutes
    second.innerHTML = ts.seconds
  }, 1000)
}

// BUTTON ORDER
const allBtnOrder = document.querySelectorAll(".card-theme button")
allBtnOrder.forEach((btn)=>{
  btn.addEventListener("click", (e)=>{
    let id = e.target.dataset.templateId;
    if(!id){
      id = e.target.parentElement.dataset.templateId
    }
    var message = "Halo%20kak!%0ASaya%20tertarik%20dengan%20template%20undangan%20pernikahan%20digital%20ID%20"+id+"%20kak.%20Tolong%20diproses%20ya%20kak!%20"
    document.location.href = "https://wa.me/"+phone+"?text="+message
  })
})

const btnsOrderNow = document.querySelectorAll(".orderNow")
btnsOrderNow.forEach((btn)=>{
  btn.addEventListener("click", ()=>{
    var message = "Halo%20kak!%0ASaya%20ingin%20tau%20lebih%20lanjut%20mengenai%20Weddingweb.id%2C%20apa%20bisa%20jelaskan%20lebih%20lanjut%20kepada%20saya%20kak%3F%20Terimakasih!"
    document.location.href = "https://wa.me/"+phone+"?text="+message
  })
})