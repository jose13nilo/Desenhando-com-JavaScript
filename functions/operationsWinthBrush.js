
import { numberToPixel, pixelToNumber } from "./numbersAndPixels.js"
import Pixel from "../class/Pixel.js"
import { addPixelInPaintings } from "./operationsWithPixel.js"

export function brushUpdatePositionByMouse(event, brush){

    brush.style.left = numberToPixel(event.clientX)
    brush.style.top = numberToPixel(event.clientY)

}

export function brushUpdateColorMainBySelectorMain(brush, colorSelectorMain){

    colorSelectorMain.addEventListener(`input`, () => {

        brush.colorMain = colorSelectorMain.value

     })
}

export function brushUpdateColorAuxiliaryBySelectorAuxiliary(brush, colorSelectorAuxiliary){

    colorSelectorAuxiliary.addEventListener(`input`, () => {

        brush.colorAuxiliary = colorSelectorAuxiliary.value

     })
}

export function brushUpdateColorsBySelectors(brush, colorSelectorMain, colorSelectorAuxiliary){

    brushUpdateColorMainBySelectorMain(brush, colorSelectorMain)
    brushUpdateColorAuxiliaryBySelectorAuxiliary(brush, colorSelectorAuxiliary)

}

export function brushAddPixelInPaintings(brush, paintingArray, painting){

    const pixel = brushCreatePixel(brush, painting)

    addPixelInPaintings(pixel, paintingArray, painting)

}

export function brushCreatePixel(brush, painting){

    const color = brush.style.backgroundColor

    const rect = painting.getBoundingClientRect()

    const left = parseInt((pixelToNumber(brush.style.left) - rect.left)/painting.scale)
    const top = parseInt((pixelToNumber(brush.style.top) - rect.top)/painting.scale)

    return new Pixel(color, left, top)
}