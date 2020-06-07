const myDiv = document.getElementById('myDiv')

console.log(myDiv.dataset)
myDiv.dataset.name = "Karol"
console.log(myDiv.dataset)
myDiv.dataset.startedCodingAt = '' // remove
console.log(myDiv.dataset)
myDiv.dataset.newAttribute = 'new' // add new own attribute
console.log(myDiv.dataset)


myDiv.addEventListener('click', e => {
    if (e.target.dataset.name == "Karol") {
        console.log("I catch you")
    } else {
        console.log("Missed")
    }
})