
import Brush from "../class/Brush.js";
import Painting from "../class/Painting.js";

import body from "../components/body.js";

import { brush } from "../components/brush.js";
import { buttonDeletePaintings } from "../components/buttonDeletePaintings.js";
import { colorSelector } from "../components/colorSelector.js";
import { painting } from "../components/painting.js";
import clearPaintings from "../functions/clearPainting.js";

import { startDrawn } from "../functions/drawn.js";
import { brushUpdateColorsBySelectors } from "../functions/operationsWinthBrush.js";
import { updatePaintingsWithBackup } from "../functions/paintingBackup.js";

const tela = new Painting(`main`, `gray`, 50, 50, 15)
const pincel = new Brush(`mainPincel`)

const telaElemento = painting(tela)

const pincelElemento = brush(pincel)

const botaoResetarTela = buttonDeletePaintings('main', tela.pixels, telaElemento)

updatePaintingsWithBackup(tela.pixels, telaElemento)

body.appendChild(telaElemento)
body.appendChild(pincelElemento)
body.appendChild(botaoResetarTela)

const paleta = colorSelector(`mainColorSelector`, 10, 10, pincelElemento.colorMain)
const paleta2 = colorSelector(`auxiliaryColorSelector`, 10, 50, pincelElemento.colorAuxiliary)

body.appendChild(paleta)
body.appendChild(paleta2)

brushUpdateColorsBySelectors(pincelElemento, paleta, paleta2)

startDrawn(pincelElemento, tela.pixels, telaElemento)