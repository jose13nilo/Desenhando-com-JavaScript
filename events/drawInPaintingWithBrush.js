
import Pixel from "../class/Pixel.js"
import { addPixelInPaintingAndInBackup } from "../functions/operationsWithPixel.js"

export function onDrawnInPaintingWithBrush(painting, brush){

    let canDrawn = false
    let color

    function drawn(painting,  event){

        const rect = painting.getBoundingClientRect()
    
        const x = parseInt((event.clientX - rect.left)/painting.scale)
        const y = parseInt((event.clientY - rect.top)/painting.scale)
    
        const pixel = new Pixel(color, x, y)
    
        addPixelInPaintingAndInBackup(painting, pixel)
    
    }

    painting.onmousedown = (event) => {

        if(!canDrawn){

            canDrawn = true

        }

        color = event.buttons == 1 ? brush.colorMain : brush.colorAuxiliary

        drawn(painting, event)

    }

    document.onmouseup = () => { canDrawn = false }

    painting.onmousemove = (event) => {
    
        if(canDrawn){

            drawn(painting, event)
    
        }else{

            
        }

    }

    painting.oncontextmenu = (event) => {

        event.preventDefault()
        
    }

}