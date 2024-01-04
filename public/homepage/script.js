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
      month = 0, // Januari  = 0
      date = 1

var start = new Date(year, month, date, 0, 0, 0)
setInterval(()=>{
  var ts = countdown(start, null)
  day.innerHTML = ts.days
  hour.innerHTML = ts.hours
  minute.innerHTML = ts.minutes
  second.innerHTML = ts.seconds
}, 1000)
