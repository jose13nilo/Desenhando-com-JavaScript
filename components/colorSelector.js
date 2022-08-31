import { numberToPixel } from "../functions/numbersAndPixels.js"

export function colorSelector(id){

    const colorSelector = document.createElement(`input`)

    colorSelector.id = id

    colorSelector.type = `color`

    colorSelector.style.width = numberToPixel(20)
    colorSelector.style.height = colorSelector.style.width

    colorSelector.style.borderRadius = `25%`

    return colorSelector
}