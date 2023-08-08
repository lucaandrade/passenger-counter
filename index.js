// document.getElementById("count-el").innerText = 5

// change the count-el in the HTML to reflect the new count

// camelCase

let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")

function increment() {
    count = count + 1
    countEl.textContent = count
}

function reset() {
    count = 0
    countEl.innerText = count
}

function save() {
    let previous = count + " - "
    saveEl.textContent += previous
}
