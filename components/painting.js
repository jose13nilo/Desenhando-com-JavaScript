import addPixelInPaintingLogAndBackup, { addPixelInPainting, Pixel } from "./pixel.js"

export class Painting{

    constructor(

        id,

        width = 128,

        height = 72,

        color = `rgba(255, 255, 255, 0.85)`,

        scale = 5,

        pixels = [],

        log = []
        
    ){
        
        this.id = id

        this.width =  width
        this.height = height

        this.color = color

        this.scale = scale
    
        this.pixels = pixels

        this.log = log



    }

}

export default function getOrMakePaintingAndBackup( id ){

    id = `${ id }Painting`

    const paintingElement = localStorage[ id ] != undefined ? createPaintingByBackup( id ) : createPatternPaintingAndBackup( id )

    return paintingElement

}

export function createPatternPaintingAndBackup( id ){
    
    const paintingObject = new Painting( id )

    localStorage.setItem(id , JSON.stringify( paintingObject ))

    const paintingElement =  cretePaintingElement( paintingObject )
    
    return paintingElement

}

export function createPaintingByBackup( id ){

    const paintingObject = JSON.parse( localStorage.getItem( id ) )

    const paintingElement = cretePaintingElement( paintingObject )

    for( let pixel of paintingObject.pixels ){

        addPixelInPainting( paintingElement, pixel )
    
    }

    return paintingElement

}

export function cretePaintingElement( paintingObject ){

    const painting = document.createElement( `canvas` )

    painting.className = `Painting`

    painting.id = paintingObject.id 

    painting.style.width = paintingObject.width * paintingObject.scale + `px`
    painting.style.height = paintingObject.height * paintingObject.scale + `px`

    painting.width = paintingObject.width
    painting.height = paintingObject.height

    painting.style.backgroundColor = paintingObject.color

    painting.style.imageRendering = `pixelated`

    painting.style.zIndex = 1

    return painting

}

export function clearPaintingAndBackup( painting ){

    clearBackup( painting.id )
    clearPainting( painting )

}

export function clearPainting( painting ){

    const context = painting.getContext( `2d` )

    const rect = painting.getBoundingClientRect(  )

    context.clearRect( 0, 0, rect.width, rect.height )

}

export function clearBackup( paintingId ){

    const backup = JSON.parse( localStorage.getItem( paintingId ) )

    backup.pixels.length = 0

    localStorage.setItem( paintingId, JSON.stringify( backup ) )

}

export function onDrawnInPaintingWithBrush( painting, brushId ){

    let mouseIsDown = false
    let color

    let scale = JSON.parse( localStorage.getItem( painting.id ) ).scale


    function drawn( painting,  event ){

        const rect = painting.getBoundingClientRect()

        const left = parseInt( ( event.clientX - parseInt(rect.left) ) / scale )
        const top = parseInt( ( event.clientY - parseInt(rect.top) ) / scale )
    
        const pixel = new Pixel(left, top, color)
    
        addPixelInPaintingLogAndBackup(painting, pixel)
    
    }

    painting.onmousedown = ( event ) => {

        if( ! mouseIsDown ){

            mouseIsDown = true

        }

        const brush = JSON.parse( localStorage.getItem( brushId ) )

        color = event.buttons == 1 ? brush.mainColor : brush.auxiliaryColor

        drawn(painting, event)

    }

    document.onmouseup = (  ) => { mouseIsDown = false }

    painting.onmousemove = ( event ) => {
    
        if( mouseIsDown ){

            drawn( painting, event )
    
        }


    }

    painting.oncontextmenu = ( event ) => {

        event.preventDefault()
        
    }

}