
import Brush from "../class/Brush.js";
import Painting from "../class/Painting.js";

import body from "../components/body.js";

import { brush } from "../components/brush.js";
import { colorSelector } from "../components/colorSelector.js";
import { painting } from "../components/painting.js";

import { startDrawn } from "../functions/drawn.js";
import { brushUpdateColorsBySelectors } from "../functions/operationsWinthBrush.js";
import { updateBackupWithPainting, updatePaintingWithBackup } from "../functions/paintingBackup.js";

import telaBackup from "../jsons/pixels.json" assert {type: 'json'}

const tela = new Painting(`main`, `gray`, 50, 50, 15)
const pincel = new Brush(`mainPincel`)

const telaElemento = painting(tela)
const pincelElemento = brush(pincel)

body.appendChild(telaElemento)
body.appendChild(pincelElemento)

const paleta = colorSelector(`mainColorSelector`, 10, 10, pincelElemento.colorMain)
const paleta2 = colorSelector(`auxiliarySelector`, 10, 50, pincelElemento.colorAuxiliary)

body.appendChild(paleta)
body.appendChild(paleta2)

//updatePaintingWithBackup(tela.pixels , telaElemento, telaBackup)

//setInterval(updateBackupWithPainting(telaBackup, tela.pixels), 100)

brushUpdateColorsBySelectors(pincelElemento, paleta, paleta2)

startDrawn(pincelElemento, tela.pixels, telaElemento)