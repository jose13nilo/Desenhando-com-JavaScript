
import addFontInHtmlByUrl from "../functions/addFontInHtmlByUrl.js"
import createSpan  from "./span.js"

export default function createLogo (id) {

    const div = document.createElement(`div`)

    div.className = `Logo`
    div.id = id + div.className

    div.style.backgroundColor = `rgba(255, 255, 255, 1)`

    div.style.display = `flex`
    div.style.alignItems = `center`
    div.style.justifyContent = `center`

    const span = createSpan(`Polixel`)

    addFontInHtmlByUrl(`https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap`)

    span.style.fontFamily = `Roboto Mono`

    div.appendChild(span)

    return div

}