import fetch from "node-fetch";

fetch("setting.json").then(response => {
    return response.json()
}).then(responseJSON => {
    console.log(responseJSON)
})