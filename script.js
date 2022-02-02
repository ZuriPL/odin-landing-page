const textToUpdate = document.getElementById("js-target")

let timeleft = 3600

setInterval(() => {
    timeleft -= 1
    let minutes = Math.floor(timeleft / 60)
    let seconds = timeleft - (minutes * 60)
    textToUpdate.innerHTML = "Sign up in the next " + minutes + " minutes " + seconds + " seconds to get a special -50% deal";

    if (timeleft < 0) {
        textToUpdate.innerHTML = "Your subscription expired"
    }
}, 1000)