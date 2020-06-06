const outDiv = document.getElementById('out')
const inDiv = document.getElementById('IN')



outDiv.addEventListener('click', e => {

    let target = e.target
    console.log(e)
    console.log(target)
    console.log(target.tagName)
    console.log(target.tagName.toLowerCase())
    console.log(target.id)
    console.log(target.innerText)








    target.className = 'red'
})