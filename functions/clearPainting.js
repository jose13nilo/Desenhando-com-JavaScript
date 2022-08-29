
export default function clearPaintings(paintingArray, painting){

    clearPaintingObject(paintingArray)
    clearPainting(painting)

    localStorage.removeItem(`painting`)

}

export function clearPaintingObject(paintingObject){

    paintingObject.length = 0

}

export function clearPainting(painting){

    const context = painting.getContext(`2d`)

    const rect = painting.getBoundingClientRect()

    context.clearRect(0, 0, rect.width, rect.height)

}