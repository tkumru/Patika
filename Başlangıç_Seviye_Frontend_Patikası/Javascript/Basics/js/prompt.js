var fullName = prompt("Please write your Name: ", "")
let title = document.querySelector("#title")
title.innerHTML = `${title.innerHTML} <small style="color:red;">${fullName}</small>`