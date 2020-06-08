const people = [{
        name: 'Mark',
        age: 15
    },
    {
        name: 'Dan',
        age: 19
    },
    {
        name: 'Phil',
        age: 21
    }
]

function howOld(person) {
    return person.name === 'Dan'
}
let danAge = document.querySelector('span').textContent = people.find(howOld).age


console.log(people.find(howOld).age)