// Create object

let item = new Object()
let item2 = {}

console.log(item)

// Key - Value relation

let laptop = {
    brand: "Casper",
    model: "Excalibur"
}

console.log(laptop)
console.log(laptop.brand)
console.log(laptop["model"])

// Add new value

laptop.version = "10.15.7"

console.log(laptop)

// Get keys

keys = Object.keys(laptop)

console.log(keys)

keys.forEach(keyInfo => {
    console.log(keyInfo, laptop[keyInfo])
});

// Get values

console.log(Object.values(laptop))

let show = {
    showName: "How I Met Your Mother",
    characters: [{

            name: "Ted",
            age: 35,
            job: ["Architect"]
        },
        {
            name: "Robin",
            age: 32,
            job: ["News Anchor", "Pop-Star"]
        }
    ]
};

console.log(show.characters[1].job[1])

let user = {
    firstName: "Talha Nebi",
    lastName: "Kumru",
    score: [1, 2, 3],
    isActive: true,
    fullName: function() {
        return `${this.firstName.toUpperCase() + ' ' + this.lastName.toUpperCase()}`
    }
}

console.log(user.fullName())

// Destruct

let { firstName, lastName, z, t, u } = user

console.log(firstName, lastName, z, t, u)

let { isActive, ...theOthers } = user

console.log(theOthers)