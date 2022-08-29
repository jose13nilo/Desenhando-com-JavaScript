
import clearPaintings from "../functions/clearPainting.js";
import { numberToPixel } from "../functions/numbersAndPixels.js";

export function buttonDeletePaintings(id, paintingArray, painting, paintingBackup){

    const button = document.createElement(`button`)

    button.id = id

    button.style.top = numberToPixel(100)
    button.style.left = numberToPixel(100)

    button.style.width = numberToPixel(20)
    button.style.height = numberToPixel(20)

    button.style.position = 'absolute'
    
    button.onclick = () => {

        clearPaintings(paintingArray, painting)

    }

    return button

}