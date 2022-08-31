
import body from "../components/body.js";

import { buttonResetPainting } from "../components/buttonResetPainting.js";
import { colorSelector } from "../components/colorSelector.js";
import { onColorsSelectorsTraceColorsBrushAndBackup } from "../events/colorSelectorTraceColorBrush.js";

import { onDrawnInPaintingWithBrush } from "../events/drawInPaintingWithBrush.js";
import { onResetPaintingWithOnClick } from "../events/resetPaintingWithOnClick.js";

import { createBrush } from "../functions/operationsWinthBrush.js";
import { createPainting } from "../functions/operationsWithPainting.js";

const tela = createPainting(`paintingMain`)

body.appendChild(tela)

const pincel = createBrush(`brushMain`)

body.appendChild(pincel)

onDrawnInPaintingWithBrush(tela, pincel)

const div = document.createElement(`div`)

div.style.position = `absolute`

div.style.left = `10px`
div.style.top = div.style.left

const botaoReset = buttonResetPainting(`buttonResetPaintingMain`)

div.appendChild(botaoReset)

onResetPaintingWithOnClick(tela, botaoReset)

const paleta = colorSelector(`colorMain`)
const paleta2 = colorSelector(`colorAuxiliary`)

onColorsSelectorsTraceColorsBrushAndBackup(pincel, paleta, paleta2)

div.appendChild(paleta)
div.appendChild(paleta2)

body.appendChild(div)