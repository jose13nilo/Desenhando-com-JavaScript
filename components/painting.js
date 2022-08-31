
import { numberToPixel } from "../functions/numbersAndPixels.js"

export function painting(paintingObject){

    const painting = document.createElement(`canvas`)

    painting.style.width = numberToPixel(paintingObject.side*paintingObject.scale)
    painting.style.height = numberToPixel(paintingObject.side*paintingObject.scale)

    painting.style.backgroundColor = paintingObject.color

    painting.scale = paintingObject.scale

    painting.height = paintingObject.side
    painting.width = paintingObject.side

    painting.id = paintingObject.id

    painting.style.imageRendering = `pixelated`

    painting.style.position = `absolute`

    painting.style.zIndex = 1

    return painting

}