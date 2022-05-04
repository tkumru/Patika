import fetch from "node-fetch"
import axios from "axios"

/*
setTimeout(() => {
        console.log("Hello")
    }, 2000) // Print hello one by two seconds

setInterval(() => {
    console.log("Hello Interval")
}, 1000);
*/

// ---------------------------------------------------- FETCH ----------------------------------------------------

/*
fetch("https://jsonplaceholder.typicode.com/users")
    .then((data) => data.json())
    .then(users => {
        console.log("Users loaded --> ", users)

        fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then(data => data.json())
            .then(post => console.log("Posts loaded --> ", post))
    })
*/

async function getDataFetch() { // Ordered
    const user = await (await fetch("https://jsonplaceholder.typicode.com/users/1")).json()
    const post = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json()

    console.log("Users --> ", user)
    console.log("Post 1 --> ", post)
}

// ---------------------------------------------------- AXIOS ----------------------------------------------------

async function getDataAxios() {
    const { data: user } = await axios("https://jsonplaceholder.typicode.com/users/1")
    const { data: post } = await axios("https://jsonplaceholder.typicode.com/posts/1")

    console.log("Users --> ", user)
    console.log("Post --> ", post)
}

getDataAxios()