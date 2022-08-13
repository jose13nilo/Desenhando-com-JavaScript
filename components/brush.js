
import { numberToPixel } from "../functions/numbersAndPixels.js"

export function brush(brushObject){

    const brush = document.createElement(`brush`)

    brush.id = brushObject.id

    brush.colorMain = brushObject.colorMain
    brush.colorAuxiliary = brushObject.colorAuxiliary

    brush.style.backgroundColor = brushObject.colorUsed

    brush.style.width = numberToPixel(brushObject.width)
    brush.style.height = numberToPixel(brushObject.height)

    brush.style.position = `absolute`

    return brush

}