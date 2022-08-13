
import { addPixelInPaintingObject, addPixelInPaintings } from "./operationsWithPixel.js"

export function updatePaintingWithBackup(paintingArray, painting, paintingBackup){

    for( let pixel of paintingBackup ){

        addPixelInPaintings(pixel, paintingArray, painting)

    }

}

export function updateBackupWithPainting(paintingBackup, paintingArray){

    for( let pixel of paintingArray ){

        addPixelInPaintingObject(pixel, paintingBackup)

    }

    /**const fs = require('fs');

    const fileName = '../jsons/pixels.json';

    const file = require(fileName);

    file.key = "new value";

    fs.writeFile(fileName, JSON.stringify(file), function writeJSON(err) {

      if (err) return console.log(err);

      console.log(JSON.stringify(file));

      console.log('writing to ' + fileName);

      

    })**/

}

