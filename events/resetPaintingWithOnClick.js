import { clearPaintingAndBackup } from "../functions/operationsWithPainting.js"

export function onResetPaintingWithOnClick(painting, elementClickable){

    elementClickable.onclick = () => {

        clearPaintingAndBackup(painting)

    }

}