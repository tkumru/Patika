//let title = document.getElementsByTagName('h2')
let title = document.getElementById("title")
title.innerHTML = "Merhaba Dünya!"
console.log(title)

let link = document.querySelector("ul>li>a") // Select only one
console.log(link.innerHTML)
link.style.color = 'red'