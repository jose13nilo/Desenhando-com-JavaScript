
export function addPixelInPaintingAndInBackup(painting, pixel){

    addPixelInPainting(painting, pixel)
    addPixelInBackup(painting, pixel)

}

export function addPixelInPainting(painting, pixel){

    const context = painting.getContext(`2d`)

    context.fillStyle = pixel.color

    context.fillRect(pixel.left, pixel.top, 1, 1)

}

export function addPixelInBackup(painting, pixel){

    const paintingObject = JSON.parse(localStorage.getItem(painting.id))

    paintingObject.pixels = removePixelSomeId(pixel, paintingObject.pixels)

    paintingObject.pixels.push(pixel)

    localStorage.setItem(painting.id, JSON.stringify(paintingObject))

}

export function removePixelSomeId(pixel, pixels){

    for( let index in pixels ){

        if(pixels[index].id == pixel.id){

            pixels.splice(index, 1)

            break

        }

    }

    return pixels

}