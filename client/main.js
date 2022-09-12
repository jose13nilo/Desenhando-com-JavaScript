
import formatAndReturnBody from "../components/body.js";

import createHeader from "../components/header.js";

import getOrMakePaintingAndBackup, { onDrawnInPaintingWithBrush } from "../components/painting.js";
import { onChangeColorsBrushByPalletes } from "../components/palletes.js";
import getOrMakeBrushIdAndBackup from "../components/brush.js";
import { onClearPaintingAndBackupByClick } from "../components/buttonReset.js";


const body = formatAndReturnBody()

const header = createHeader(`main`)

const painting = getOrMakePaintingAndBackup(`main`)

const brushId = getOrMakeBrushIdAndBackup(`main`)

const palletes = header.querySelector( `.Palletes` )

const buttonReset = header.querySelector( `.ButtonReset` )

onDrawnInPaintingWithBrush( painting, brushId )
onChangeColorsBrushByPalletes( brushId, palletes )
onClearPaintingAndBackupByClick( painting, buttonReset )

body.appendChild(header)

body.appendChild(painting)
