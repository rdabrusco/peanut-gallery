const deleteBtn = document.querySelectorAll('.del')
const reviewItem = document.querySelectorAll('span.not')
const reviewComplete = document.querySelectorAll('span.completed')
const movieImg = document.querySelectorAll('.movieImg')
const api = process.env.API
console.log(api)

Array.from(movieImg).forEach(el => {
    el.src = `${api}${el.parentNode.childNodes[1]}`
})

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteReview)
})

Array.from(reviewItem).forEach((el)=>{
    el.addEventListener('click', markComplete)
})

Array.from(reviewComplete).forEach((el)=>{
    el.addEventListener('click', markIncomplete)
})



async function deleteReview(){
    const reviewId = this.parentNode.dataset.id
    try{
        const response = await fetch('./deleteReview', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'reviewIdFromJSFile': reviewId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markComplete(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markIncomplete(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}