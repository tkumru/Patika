import { rejects } from "assert"

const getComments = number => {
    return new Promise((resolve, reject) => {
        if (number === 1) { resolve({ text: "Hi" }) }
        reject("Error")
    })
}

getComments(2)
    .then(data => console.log(data))
    .catch(error => console.log(error))