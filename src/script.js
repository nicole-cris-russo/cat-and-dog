import {editCatApi, editDogApi} from "./api.js"

const box_cat = document.querySelector(".cat")
const box_dog = document.querySelector(".dog")

class showAnimal {
    static changeCat (object) {
        box_cat.innerHTML = ""

        const div = document.createElement("div")
        const img = document.createElement("img")
        const btn = document.createElement("button")

        div.appendChild(img)
        box_cat.append(div, btn)

        img.src = object.url
        btn.innerText = "Get Cat"

        btn.addEventListener("click", (event) => {
            editCatApi()
        })
    }
    static changeDog (object) {
        box_dog.innerHTML = ""

        const div = document.createElement("div")
        const img = document.createElement("img")
        const btn = document.createElement("button")

        div.appendChild(img)
        box_dog.append(div, btn)

        img.src = object.url
        btn.innerText = "Get Dog"

        btn.addEventListener("click", (event) => {
            editDogApi()
        })
    }
}

export default showAnimal