import Painting from "../class/Painting.js"
import { painting } from "../components/painting.js"
import { addPixelInPainting } from "./operationsWithPixel.js"

export function createPainting(id){

    id = `${id}Painting`

    const paintingElement = localStorage[id] != undefined ? createPaintingByBackup(id) : createPatternPainting(id)

    return paintingElement

}

export function createPatternPainting(id){
    
    const paintingObject = new Painting(id)

    localStorage.setItem(id , JSON.stringify(paintingObject))

    const paintingElement =  painting(paintingObject)
    
    return paintingElement

}

export function createPaintingByBackup(id){

    const paintingObject = JSON.parse(localStorage.getItem(id))

    const paintingElement = painting(paintingObject)

    for( let pixel of paintingObject.pixels ){

        addPixelInPainting(paintingElement, pixel)
    
    }

    return paintingElement

}

export function clearPaintingAndBackup(painting){

    clearBackup(painting.id)
    clearPainting(painting)

}

export function clearPainting(painting){

    const context = painting.getContext(`2d`)

    const rect = painting.getBoundingClientRect()

    context.clearRect(0, 0, rect.width, rect.height)

}

export function clearBackup(paintingId){

    const paintingObject = JSON.parse(localStorage.getItem(paintingId))

    paintingObject.pixels.length = 0

    localStorage.setItem(paintingId, JSON.stringify(paintingObject))

}