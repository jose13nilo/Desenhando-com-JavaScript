import { numberToPixel } from "../functions/numbersAndPixels.js"

export function colorSelector(id, top, left, color, size = 30){

    const colorSelector = document.createElement(`input`)
    colorSelector.type = `color`

    colorSelector.id = id
    colorSelector.className = `colorSelector`
    
    colorSelector.value = color

    colorSelector.style.width = numberToPixel(size)
    colorSelector.style.height = colorSelector.style.width

    colorSelector.style.borderRadius = `25%`

    colorSelector.style.position = `absolute`

    colorSelector.style.left = numberToPixel(top)
    colorSelector.style.top = numberToPixel(left)

    return colorSelector
}