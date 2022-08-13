
export function addPixelInPaintings(pixel, paintingArray, painting){

    addPixelInPaintingObject(pixel, paintingArray)

    addPixelInPainting(pixel, painting)

}

export function addPixelInPaintingObject(pixel, paintingArray){

    removePixelSomeId (pixel, paintingArray)

    paintingArray.push(pixel)

}

export function addPixelInPainting(pixel, painting){

    const context = painting.getContext(`2d`)

    context.fillStyle = pixel.color

    context.fillRect(pixel.left, pixel.top, 1, 1)

}

export function removePixelSomeId(pixel, paintingArray){

    const  index = paintingArray.findIndex( oldPixel => 
        
        oldPixel.id == pixel.id

    )

    if(index>-1){

        paintingArray.splice(index, 1)

    }

}