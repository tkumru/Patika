let userFormDOM = document.querySelector("#userform")
userFormDOM.addEventListener("submit", formHandler)

function formHandler(event) {
    event.preventDefault()
    const USER_NAME = document.querySelector("#username")
    const SCORE = document.querySelector("#score")
    if (USER_NAME.value && SCORE.value) {
        addItem(USER_NAME.value, SCORE.value)
        USER_NAME = ""
        SCORE = ""
    }
}

let userListDOM = document.querySelector("#userlist")

const addItem = (userName, score) => {
    let liDOM = document.createElement("li")
    liDOM.innerHTML = `${userName} 
    <span class="badge bg-primary rounded-pill">${score}</span>`
    liDOM.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center")
    userListDOM.append(liDOM)
}