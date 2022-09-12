import { clearPaintingAndBackup } from "./painting.js"

export default function createButtonReset( id ){

    const button = document.createElement(`button`)

    button.className = `ButtonReset`

    id = id + button.className

    button.id = id

    button.style.width = `25px`
    button.style.height = button.style.width

    button.style.backgroundColor = `rgba(255, 255, 255, 1)`

    button.style.backgroundImage = `url( "../imgs/reset.png" )`
    button.style.backgroundSize = `cover`

    button.style.cursor = `pointer`

    button.style.border = `solid 2px rgba(255, 255, 255, 1)`
    button.style.borderRadius = `100%`

    return button

}

export function onClearPaintingAndBackupByClick( painting,  button ){

    button.onclick = () => {

        clearPaintingAndBackup(painting)

    }

}