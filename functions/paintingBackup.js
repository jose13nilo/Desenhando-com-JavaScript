
import { addPixelInPaintings } from "./operationsWithPixel.js"

export function savePainting(paintingArray){

    localStorage.painting = JSON.stringify(paintingArray)

}

export function updatePaintingsWithBackup(paintingArray, painting){

    try{

        const paintingBackup = localStorage.painting

        for( let pixel of JSON.parse(paintingBackup) ){

            addPixelInPaintings(pixel, paintingArray, painting)
        
        }

    }catch{

        console.log(`No paint backup`)

    }
    
}