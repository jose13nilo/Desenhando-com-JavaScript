
import Brush from "../class/Brush.js"

export function createBrush(id){

    id = `${id}Brush`

    return localStorage[id] != undefined ? createBrushByBackup(id) : createPatternBrush(id)

}

export function createPatternBrush(id){

    const brush = new Brush(id)

    localStorage.setItem(id , JSON.stringify(brush))
    
    return brush

}

export function createBrushByBackup(id){

    const brush = JSON.parse(localStorage.getItem(id))

    return brush

}

export function saveBrush(brush){

    localStorage.setItem(brush.id, JSON.stringify(brush))

}