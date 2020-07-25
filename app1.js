let getPoints = sessionStorage.getItem("points")
let inPoints = document.getElementById("pt")

inPoints.innerHTML = "Points" + " : " + getPoints

let user_name = sessionStorage.getItem("Name")
let usName = document.getElementById("usName")
usName.innerHTML = "Player " + ": " + user_name

