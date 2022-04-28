// get list element

let lastChild = document.querySelector("#list>li:last-child")
lastChild.innerHTML = "Last Child"

// add element to list

let ulDOM = document.querySelector("ul#list")
let liDOM = document.createElement("li")

liDOM.innerHTML = "Created element"

ulDOM.append(liDOM)
ulDOM.prepend(liDOM)