let button = document.querySelector("#liveToastBtn");
let SUCCESS_TOAST = document.querySelector("#success-toast")
let closeButtonsDOM = document.getElementsByClassName("close")
let listDOM = document.querySelector("ul")

listDOM.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

for (let index = 0; index < closeButtonsDOM.length; index++) {
    closeButtonsDOM[index].addEventListener("click", function() {
        this.parentElement.style.display = 'none';
    });
}

function showSuccessToast() {
    $(".success").toast("show")
}

function showErrorToast() {
    $(".error").toast("show");
}

function newElement(event) {
    event.preventDefault();

    const TASK = document.querySelector("#task")

    if (TASK.value) {
        showSuccessToast()
        addElement(TASK.value)
        TASK = ""
    } else {
        $(".error").toast("show");
    }
}

let taskListDOM = document.querySelector("#list")

function addElement(task) {
    let liDOM = document.createElement("li")

    liDOM.innerHTML = `
    ${task} <span class="close">&times;</span>
    `
    taskListDOM.append(liDOM)

    for (let index = 0; index < closeButtonsDOM.length; index++) {
        closeButtonsDOM[index].addEventListener("click", function() {
            this.parentElement.style.display = 'none';
        });
        listDOM.addEventListener('click', function(ev) {
            if (ev.target.tagName === 'LI') {
                ev.target.classList.toggle('checked');
            }
        }, false);
    }
}