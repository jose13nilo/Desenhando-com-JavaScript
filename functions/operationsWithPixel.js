
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

    paintingObject.pixels = removePixelInEqualPlace(pixel, paintingObject.pixels)

    paintingObject.pixels.push(pixel)

    localStorage.setItem(painting.id, JSON.stringify(paintingObject))

}

export function removePixelInEqualPlace(pixel, pixels){

    for( let index in pixels ){

        if(pixels[index].left == pixel.left && pixels[index].top == pixel.top){

            pixels.splice(index, 1)

            break

        }

    }

    return pixels

}