function menu(){
    const togle = document.querySelector(".togle")
    const ham = document.querySelector(".hamburger")
    const btn = document.querySelector(".ham-btn")
    togle.style.display = "flex"
    ham.style.display = "none"
    btn.style.display = "flex"
}
function closemenu(){
    const togle = document.querySelector(".togle")
    const ham = document.querySelector(".hamburger")
    const btn = document.querySelector(".ham-btn")
    togle.style.display = "none"
    ham.style.display = "flex"
    btn.style.display = "none"
}