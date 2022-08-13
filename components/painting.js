
import { numberToPixel } from "../functions/numbersAndPixels.js"

export function painting(paintingObject){

    const painting = document.createElement(`canvas`)

    painting.id = paintingObject.id
    painting.className = `Painting`
    painting.scale = paintingObject.scale

    painting.style.backgroundColor = paintingObject.color
    painting.style.imageRendering = `pixelated`
    painting.style.zIndex = 1
    //painting.style.border = `20px groove #D6D58E`

    painting.style.position = `absolute`

    painting.style.width = numberToPixel(paintingObject.width*paintingObject.scale)
    painting.style.height = numberToPixel(paintingObject.height*paintingObject.scale)

    painting.width = paintingObject.width
    painting.height = paintingObject.height

    return painting

}