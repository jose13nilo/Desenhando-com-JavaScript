
import { numberToPixel } from "../functions/numbersAndPixels.js";

export function button(id){

    const button = document.createElement(`button`)

    button.id = id

    button.style.width = numberToPixel(20)
    button.style.height = button.style.width

    return button

}