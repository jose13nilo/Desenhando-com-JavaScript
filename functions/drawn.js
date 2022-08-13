
import { brushAddPixelInPaintings, brushUpdatePositionByMouse } from "./operationsWinthBrush.js"

export function startDrawn(brush, paintingArray, painting){

    let canDrawn = false

    let firtUpdate = true

    painting.onmousedown = (event) => {

        if(firtUpdate){

            brushUpdatePositionByMouse(event, brush)
            firtUpdate = false

        }

        if(!canDrawn){

            canDrawn = true

        }

        if(event.buttons==2){

            brush.style.backgroundColor = brush.colorAuxiliary

        }else{

            brush.style.backgroundColor = brush.colorMain

        }
        
        brushAddPixelInPaintings(brush, paintingArray, painting)

    }

    document.onmouseup = () => {

        //console.log(paintingArray)

        canDrawn = false
        
    }
    
    painting.onmousemove = (event) => {

        brushUpdatePositionByMouse(event, brush)

        if(canDrawn){

            brushAddPixelInPaintings(brush, paintingArray, painting)

        }

    }

    painting.oncontextmenu = (event) => {

        event.preventDefault()
        
    }

}

export function stopDrawn(painting){

    document.onmousedown = null

    document.onmouseup = null
    
    document.onmousemove = null

}