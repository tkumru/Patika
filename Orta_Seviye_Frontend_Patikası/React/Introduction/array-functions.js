const users = ["Mehmet", "Ahmet", "Murat"]


// PUSH

users.push("Fatma") // Adding value to last
console.log(users)

// MAP

users.map(item => {
    console.log(item)
})

// FIND

console.log(users.find(item => {
    console.log(item === "Mehmet")
}))

console.log()

// FILTER

console.log(users.filter(item => {
    console.log(item[0] == 'M')
}))