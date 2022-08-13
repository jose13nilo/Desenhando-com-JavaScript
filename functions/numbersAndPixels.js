
export function numberToPixel(number) {

    return number+'px'

}

export function pixelToNumber(attributeCss) {

    return Number(attributeCss.replace('px', ''))

}

export function pixeltoString(attributeCss) {

    return attributeCss.replace('px', '')

}