const cartIcon = document.getElementById(`carticon`)
const cartBody = document.getElementById(`cartbody`)
const cartBody1 = document.getElementById(`cartbody1`)
const cart = document.getElementById(`cart`)
const result = document.getElementById(`result`)
const update = document.getElementById(`update`)
const number = document.getElementById(`number`)
const price = document.getElementById(`price`)
const deleteIcon = document.getElementById(`deleteicon`)

result.innerHTML = 0
update.innerHTML = 0

const displayCart = () => {
    cart.classList.toggle(`toggle`)
    if(update.innerHTML == 0) {
        cartBody.style.display = `none`
    }else {
        cartBody1.style.display = `none`
    }
}
const deleteCart = () => {
    cartBody.style.display = `none`
    cartBody1.style.display = `flex`
    update.innerHTML = parseInt(update.innerHTML) - parseInt(1)
    if(update.innerHTML == 0) {
        update.style.display = `none`
    }
}

cartIcon.addEventListener(`click`, displayCart)
deleteIcon.addEventListener(`click`, deleteCart)
cartIcon.addEventListener(`keypress`, displayCart)
deleteIcon.addEventListener(`keypress`, deleteCart)


const minus = document.getElementById(`minus`)
const plus = document.getElementById(`plus`)
const button2 = document.getElementById(`button2`)

const subtract = () => {
    if(result.innerHTML > 0) {
        result.innerHTML--
    }
}
const add = () => {
    result.innerHTML++
}
const displayUpdate = () => {
    update.style.display = `block`
    update.innerHTML = parseInt(update.innerHTML) + parseInt(1)
    number.innerHTML = result.innerHTML
    price.innerHTML = `$${number.innerHTML * 125}.00`
    result.innerHTML = 0
    cartBody.style.display = `flex`
    cartBody1.style.display = `none`
}

minus.addEventListener(`click`, subtract)
plus.addEventListener(`click`, add)
button2.addEventListener(`click`, displayUpdate)
minus.addEventListener(`keypress`, subtract)
plus.addEventListener(`keypress`, add)


const menuIcon = document.getElementById(`menuicon`)
const closeIcon = document.getElementById(`closeicon`)
const menu = document.getElementById(`menu`)

const displayMenu = () => {
    menu.classList.toggle(`toggle`)
}

menuIcon.addEventListener(`click`, displayMenu)
closeIcon.addEventListener(`click`, displayMenu)
menuIcon.addEventListener(`keypress`, displayMenu)
closeIcon.addEventListener(`keypress`, displayMenu)


const parentImage = document.getElementById(`parentimage`)
const parentImage1 = document.getElementById(`parentimage1`)
const lightBox = document.getElementById(`lightbox`)
const closeBox = document.getElementById(`closebox`)
const previousIcon = document.getElementById(`previous`)
const nextIcon = document.getElementById(`next`)
const previousIcon1 = document.getElementById(`previous1`)
const nextIcon1 = document.getElementById(`next1`)
const images = document.querySelectorAll(`.img6`)
const images1 = document.querySelectorAll(`.img66`)
const imageSrc = [`images/image-product-1.jpg`, `images/image-product-2.jpg`, `images/image-product-3.jpg`, `images/image-product-4.jpg`]

let addBorder
let currentIndex = 0

images.forEach((image, index) => {
    const changeImage = (e) => {
        parentImage.src = imageSrc[index]
        e.target.classList.add(`toggle1`)
        if(addBorder) {
            addBorder.classList.remove(`toggle1`)
        }
        addBorder = e.target
    }

    image.addEventListener(`click`, changeImage)
    image.addEventListener(`keypress`, changeImage)
})
images1.forEach((image1, index) => {
    const changeImage1 = (e) => {
        parentImage1.src = imageSrc[index]
        e.target.classList.add(`toggle11`)
        if(addBorder) {
            addBorder.classList.remove(`toggle11`)
        }
        addBorder = e.target
    }

    image1.addEventListener(`click`, changeImage1)
    image1.addEventListener(`keypress`, changeImage1)
})

const displayLightbox = () => {
    lightBox.classList.toggle(`toggle2`)
}
const previousImage1 = () => {
    currentIndex = (currentIndex - 1 + imageSrc.length) % imageSrc.length
    parentImage1.src = imageSrc[currentIndex]
}
const nextImage1 = () => {
    currentIndex = (currentIndex + 1) % imageSrc.length
    parentImage1.src = imageSrc[currentIndex]
}
const previousImage = () => {
    currentIndex = (currentIndex - 1 + imageSrc.length) % imageSrc.length
    parentImage.src = imageSrc[currentIndex]
}
const nextImage = () => {
    currentIndex = (currentIndex + 1) % imageSrc.length
    parentImage.src = imageSrc[currentIndex]
}

parentImage.addEventListener(`click`, displayLightbox)
closeBox.addEventListener(`click`, displayLightbox)
previousIcon1.addEventListener(`click`, previousImage1)
nextIcon1.addEventListener(`click`, nextImage1)
previousIcon.addEventListener(`click`, previousImage)
nextIcon.addEventListener(`click`, nextImage)
parentImage.addEventListener(`keypress`, displayLightbox)
closeBox.addEventListener(`keypress`, displayLightbox)
previousIcon1.addEventListener(`keypress`, previousImage1)
nextIcon1.addEventListener(`keypress`, nextImage1)
previousIcon.addEventListener(`keypress`, previousImage)
nextIcon.addEventListener(`keypress`, nextImage)