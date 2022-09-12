import addPixelInPaintingLogAndBackup from "../functions/pixel.js"

export default function OnGoBackAndRedo(painting){

    document.onkeydown = (event) => {

        if( event.ctrlKey && event.key == `z` ){

            goBack(painting)

        }

        if( event.ctrlKey && event.key == `y` ){

            redo(painting)
            
        }
    
    }

}

export function goBack(painting){

    const backup = JSON.parse(localStorage.getItem(painting.id))

    const logPixels = backup.logPixels

    const lastLog = logPixels[logPixels.length-1]

    const action = lastLog.action

    const pixel = lastLog.pixel

    if( action == `delete` ){

        addPixelInPaintingLogAndBackup(painting, pixel)

    }else if (action == `add`){

        deletePixelInPaintingLogAndBackup(painting, pixel)

    }

}

export function redo(painting){

    

}