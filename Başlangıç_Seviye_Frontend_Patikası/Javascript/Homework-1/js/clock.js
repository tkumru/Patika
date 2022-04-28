let fullName = prompt("Name Surname: ", "");
let nameSurname = document.querySelector("#myName");
nameSurname.innerHTML = fullName;

function addZero(i) {
    if (i < 10) { i = '0' + i }
    return i;
}

const days = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];

function showTime() {
    let clock = document.querySelector("#myClock");

    let time = new Date();
    let hour = addZero(time.getHours());
    let minute = addZero(time.getMinutes());
    let second = addZero(time.getSeconds());
    let day = time.getDay();

    clock.innerHTML = hour + ":" + minute + ":" + second + " " + days[day - 1];

    setTimeout(showTime, 1000);
}

showTime();