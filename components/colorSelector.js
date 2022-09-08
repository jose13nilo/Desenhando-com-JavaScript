
export default function inputColor(id){

    const inputColor = document.createElement(`input`)

    inputColor.className = `InputColor`
    inputColor.id = id + inputColor.className

    inputColor.type = `color`

    inputColor.style.width = `20px`
    inputColor.style.height = inputColor.style.width

    inputColor.style.borderRadius = `25%`

    return inputColor

}