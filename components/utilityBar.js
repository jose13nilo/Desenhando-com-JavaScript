

import { button } from "./button.js"
import colorSelector from "./colorSelector.js"
import createLogo from "./logo.js"

export default function createUtilityBar(id) {

    const div = document.createElement(`div`)

    div.id = `${id}UtilityBar`
    div.className = `UtilityBar`

    div.style.width = `100%`
    div.style.height = `8%`

    div.style.backgroundColor = `rgba(0, 0, 0, 1)`

    div.style.left = `0px`
    div.style.top = `0px`

    div.style.position = `absolute`

    div.style.display = `flex`
    div.style.alignItems = `center`

    div.style.zIndex = 2

    const logo = createLogo(`${id}LogoUtilityBar`)

    logo.style.width = `20%`
    logo.style.height = `100%`

    div.appendChild(logo)

    const buttonReset = button(`${id}ButtonReset`)

    div.appendChild(buttonReset)

    const mainPalette = colorSelector(`${id}ColorMain`)
    const auxiliaryPalette = colorSelector(`${id}ColorAuxiliary`)

    div.appendChild(mainPalette)
    div.appendChild(auxiliaryPalette)

    return [div, buttonReset, mainPalette, auxiliaryPalette]

}