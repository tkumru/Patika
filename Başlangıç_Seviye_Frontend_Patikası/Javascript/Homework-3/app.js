const menu = [{
        id: 1,
        title: "Tteokbokki",
        category: "Korea",
        price: 10.99,
        img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
        desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
        id: 2,
        title: "Chicken Ramen",
        category: "Japan",
        price: 7.99,
        img: "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
        desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
        id: 3,
        title: "Bibimbap",
        category: "Korea",
        price: 8.99,
        img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
        desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
        id: 4,
        title: "Dan Dan Mian",
        category: "China",
        price: 5.99,
        img: "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
        desc: `Dan dan noodle, serving with green onion `,
    },
    {
        id: 5,
        title: "Yangzhou Fried Rice",
        category: "China",
        price: 12.99,
        img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
        desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
        id: 6,
        title: "Onigiri",
        category: "Japan",
        price: 9.99,
        img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
        desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
        id: 7,
        title: "Jajangmyeon",
        category: "Korea",
        price: 15.99,
        img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
        desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
        id: 8,
        title: "Ma Yi Shang Shu",
        category: "China",
        price: 12.99,
        img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
        desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
        id: 9,
        title: "Doroyaki",
        category: "Japan",
        price: 3.99,
        img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
        desc: `Red bean paste dessert, serving with honey.`,
    },
];

let categories = []
let pictures = []
let titles = []
let prices = []
let descs = []
for (let key in menu) {
    if (categories.indexOf(menu[key].category) < 0) {
        categories.push(menu[key].category)
    }

    pictures.push(menu[key].img)
    titles.push(menu[key].title)
    prices.push(menu[key].price)
    descs.push(menu[key].desc)
}

// Menu Configuration
let menuDOM = document.querySelector("#menu-cards")

function addMenuText(text) {
    let menuTextDOM = document.createElement("div")

    menuTextDOM.classList.add("menu-text")
    menuTextDOM.innerHTML = text

    return menuTextDOM
}

function addH4(title, classType = null) {
    let h4DOM = document.createElement("h4")

    h4DOM.classList.add(classType)
    h4DOM.innerHTML = title

    return h4DOM
}

function addMenuTitle() {
    let menuTitleDOM = document.createElement("div")

    menuTitleDOM.classList.add("menu-title")

    return menuTitleDOM
}

function addMenuInfo(divDOM, title, price, text) {
    let menuInfoDOM = document.createElement("div")
    let menuTitleDOM = addMenuTitle()
    let menuTextDOM = addMenuText(text)

    menuInfoDOM.classList.add("menu-info")
    menuTitleDOM.append(title)
    menuTitleDOM.append(price)
    menuInfoDOM.append(menuTitleDOM)
    menuInfoDOM.append(menuTextDOM)
    divDOM.append(menuInfoDOM)
}

function addImg(divDOM, img) {
    let imgDOM = document.createElement("img")

    imgDOM.src = img
    imgDOM.classList.add("photo")
    divDOM.append(imgDOM)
    imgDOM = null
}

function addMenuItems(pictures, title, price, text) {
    let divColDOM = document.createElement("div")

    divColDOM.classList.add("col-lg-6", "col-sm-12", "menu-items")
    addImg(divColDOM, pictures)
    addMenuInfo(divColDOM, title, price, text)
    menuDOM.append(divColDOM)
    divColDOM = null
}

for (let key in menu) {
    addMenuItems(pictures[key], addH4(titles[key]), addH4(prices[key], "price"), descs[key])
}

// Button Configuration
let colDOM = document.querySelector("#col-btns")

categories.forEach(function(value) {
    let btnDOM = document.createElement("button")
    btnDOM.innerHTML = `${value}`
    btnDOM.classList.add('btn', 'btn-outline-secondary', 'm-2')
    colDOM.append(btnDOM)
    btnDOM = null
})

function getContent(params = null) {
    menuDOM.innerHTML = ""
    for (let key in menu) {
        if (params) {
            if (params == "All") {
                addMenuItems(pictures[key], addH4(titles[key]), addH4(prices[key], "price"), descs[key])
            }

            if (menu[key].category == params) {
                addMenuItems(pictures[key], addH4(titles[key]), addH4(prices[key], "price"), descs[key])
            }
        }
    }
}

let buttonsDOM = document.getElementsByTagName("button")

for (let index = 0; index < buttonsDOM.length; index++) {
    buttonsDOM[index].addEventListener("click", function(event) {
        let buttonText = event.target.innerHTML

        getContent(buttonText)
    })
}