
import body from "../components/body.js";

import createUtilityBar from "../components/utilityBar.js";
import { onColorsSelectorsTraceColorsBrushAndBackup } from "../events/colorSelectorTraceColorBrush.js";

import { onDrawnInPaintingWithBrush } from "../events/drawInPaintingWithBrush.js";
import { onResetPaintingWithOnClick } from "../events/resetPaintingWithOnClick.js";

import { createBrush } from "../functions/operationsWinthBrush.js";
import { createPainting } from "../functions/operationsWithPainting.js";

const [utilityBar, buttonReset, mainPalette, auxiliaryPalette] = createUtilityBar(`main`)

body.appendChild(utilityBar)

const tela = createPainting(`nilo`)

body.appendChild(tela)

const pincel = createBrush(`main`)

onDrawnInPaintingWithBrush(tela, pincel)

onResetPaintingWithOnClick(tela, buttonReset)

onColorsSelectorsTraceColorsBrushAndBackup(pincel, mainPalette, auxiliaryPalette)

body.appendChild(utilityBar)