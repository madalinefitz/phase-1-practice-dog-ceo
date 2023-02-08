document.addEventListener('DOMContentLoaded', ()=>{
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then (resp => resp.json())
        .then (posts => {
            dogImage(posts)
        })
})

function dogImage(object){
    const arrayObj = object.message
    arrayObj.forEach(dogUrl => {
        const img = document.createElement('img')
        img.src=dogUrl
        document.getElementById("dog-image-container").append(img)
    })  
}

document.addEventListener('DOMContentLoaded', ()=>{
    fetch("https://dog.ceo/api/breeds/list/all")
        .then (resp => resp.json())
        .then (dogBreedArray => {
            addDogBreed(dogBreedArray)
        })
})

function addDogBreed(breedObj){
    const breedName = breedObj.message
    const allBreeds = Object.keys(breedName)
    allBreeds.forEach(listBreed =>{
        const li = document.createElement('li')
        li.innerText = listBreed
        const dogBreed = document.getElementById("dog-breeds").append(li)
        li.id = "dog-breed-name"
        li.addEventListener('click', (e)=>{
            li.style.color === 'blue' ? li.style.color ='black' : li.style.color = 'blue'
        })
    })
}
