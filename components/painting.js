

export function painting(paintingObject){

    const painting = document.createElement(`canvas`)

    painting.style.width = paintingObject.side*paintingObject.scale + `px`
    painting.style.height = paintingObject.side*paintingObject.scale + `px`

    painting.style.backgroundColor = paintingObject.color

    painting.scale = paintingObject.scale

    painting.height = paintingObject.side
    painting.width = paintingObject.side

    painting.className = `Painting`

    painting.id = paintingObject.id

    painting.style.imageRendering = `pixelated`

    painting.style.position = `absolute`

    painting.style.zIndex = 1

    return painting

}