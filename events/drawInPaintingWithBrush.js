
import { brushAddPixelInPaintingAndMakeBackup, brushUpdatePositionByMouse } from "../functions/operationsWinthBrush.js"

export function onDrawnInPaintingWithBrush(painting, brush){

    painting.onmousedown = (event) => {

        if(!brush.isDown){

            brush.isDown = true

        }

        brush.style.backgroundColor = event.buttons == 1 ? brush.colorMain : brush.colorAuxiliary

        brushUpdatePositionByMouse(event, brush)
        
        brushAddPixelInPaintingAndMakeBackup(painting, brush)

    }

    document.onmouseup = () => { brush.isDown = false }

    painting.onmousemove = (event) => {
    
        if(brush.isDown){

            brushUpdatePositionByMouse(event, brush)
            brushAddPixelInPaintingAndMakeBackup(painting, brush)
    
        }

    }

    painting.oncontextmenu = (event) => {

        event.preventDefault()
        
    }

}

export function offDrawnInPaintingWithBrush(painting){

    painting.onmousedown = null

    document.onmouseup = null
    
    painting.onmousemove = null

}