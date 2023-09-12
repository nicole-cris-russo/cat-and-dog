import showAnimal from "./script.js"

function getCatApi () {
    const url = "https://api.thecatapi.com/v1/images/search"
    return fetch(url).then(
    (response) => {return response.json()})
}

async function editCatApi () {
    const object = await getCatApi()
    
    object.forEach(
        (elem) => {
            showAnimal.changeCat(elem)
        }
    )
}

editCatApi()

function getDogApi () {
    const url = "https://api.thedogapi.com/v1/images/search"
    return fetch(url).then(
    (response) => {return response.json()})
}

async function editDogApi () {
    const object = await getDogApi()
    
    object.forEach(
        (elem) => {
            showAnimal.changeDog(elem)
        }
    )
}

editDogApi()

export {editCatApi, editDogApi}