
export class Pixel {

    constructor(

        left,
        top,

        color
        
    ){

        this.left = left
        this.top = top

        this.color = color

    }

}

export default function addPixelInPaintingLogAndBackup( painting, pixel ){

    addPixelInPainting( painting, pixel )

    addPixelInBackup( painting.id, pixel )

    addPixelInLog( painting.id, pixel )

}

export function addPixelInPainting( painting, pixel ){

    const context = painting.getContext(`2d`)

    context.fillStyle = pixel.color

    context.fillRect(pixel.left, pixel.top, 1, 1)

}

export function addPixelInLog( paintingId, pixel ){

    const backup = JSON.parse( localStorage.getItem( paintingId ) )

    const log = backup.log

    const lastLog = log[ log.length - 1 ]

    if( log.length == 0 || lastLog.color != pixel.color || lastLog.left != pixel.left || lastLog.top != pixel.top ){

        log.push( pixel )

        localStorage.setItem( paintingId, JSON.stringify( backup ) )

    }

}

export function addPixelInBackup( paintingId, pixel ){

    const backup = JSON.parse( localStorage.getItem( paintingId ) )

    const pixels = backup.pixels

    ifPixelIsInEqualPlaceDeleteOld(pixel, pixels)

    pixels.push(pixel)

    localStorage.setItem(paintingId, JSON.stringify(backup))

}

export function ifPixelIsInEqualPlaceDeleteOld( pixel, pixels ){

    const indexPixel =  pixels.findIndex( pixelOld => pixelOld.left == pixel.left && pixelOld.top == pixel.top)

    if ( indexPixel != -1 ){

        pixels.splice(indexPixel, 1)

    }

}
