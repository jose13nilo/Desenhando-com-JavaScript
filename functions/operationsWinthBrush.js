
import { numberToPixel, pixelToNumber } from "./numbersAndPixels.js"
import Pixel from "../class/Pixel.js"
import { addPixelInPaintingAndInBackup } from "./operationsWithPixel.js"
import Brush from "../class/Brush.js"
import { brush } from "../components/brush.js"

export function createBrush(id){

    return localStorage[id] != undefined ? createBrushByBackup(id) : createPatternBrush(id)

}

export function createPatternBrush(id){

    const brushObject = new Brush(id)
    const brushElement = brush(brushObject)

    localStorage.setItem(id , JSON.stringify(brushObject))
    
    return brushElement

}

export function createBrushByBackup(id){

    const brushObject = JSON.parse(localStorage.getItem(id))

    const brushElement = brush(brushObject)

    return brushElement

}

export function saveBrush(brush){

    const brushObject = new Brush(

        brush.id,
        brush.colorMain,
        brush.colorAuxiliary,
        brush.side

    )

    localStorage.setItem(brush.id, JSON.stringify(brushObject))

}

export function brushUpdatePositionByMouse(event, brush){

    brush.style.left = numberToPixel(event.clientX)
    brush.style.top = numberToPixel(event.clientY)

}

export function brushAddPixelInPaintingAndMakeBackup(painting, brush){

    const pixel = brushCreatePixel(painting, brush)

    addPixelInPaintingAndInBackup(painting, pixel)

}

export function brushCreatePixel(painting, brush){

    const color = brush.style.backgroundColor

    const rect = painting.getBoundingClientRect()

    const left = parseInt((pixelToNumber(brush.style.left) - rect.left)/painting.scale)
    const top = parseInt((pixelToNumber(brush.style.top) - rect.top)/painting.scale)

    return new Pixel(color, left, top)
}