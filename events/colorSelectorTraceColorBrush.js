import { saveBrush } from "../functions/operationsWinthBrush.js"

export function onColorsSelectorsTraceColorsBrushAndBackup(brush, colorSelectorMain, colorSelectorAuxiliary){

    onColorSelectorTraceColorBrushAndBackup(brush, colorSelectorMain, `colorMain`)
    onColorSelectorTraceColorBrushAndBackup(brush, colorSelectorAuxiliary, `colorAuxiliary`)

}

export function onColorSelectorTraceColorBrushAndBackup(brush, colorSelector, preferences){

    colorSelector.value = brush[preferences]

    colorSelector.addEventListener(`input`, () => {

        brush[preferences] = colorSelector.value

        saveBrush(brush)

     })
}