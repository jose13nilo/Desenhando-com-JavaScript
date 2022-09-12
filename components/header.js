import createLogo from "./logo.js"
import createUtilityBar from "./utilityBar.js"

export default function createHeader( id ){

    const div = document.createElement( `div` )

    div.className = `Header`

    id = id + div.className

    div.id = id

    div.style.backgroundColor = `rgba(0, 0, 0, 1)`

    div.style.width = `100%`

    div.style.height = `10%`
    div.style.minHeight = `75px`

    div.style.position = `absolute`

    div.style.top = `0px`

    div.style.zIndex = 2

    div.style.display = `flex`

    const logo = createLogo( id )

    logo.style.paddingInline = `35px`

    div.appendChild(logo)

    const uitilityBar = createUtilityBar( id )

    div.appendChild( uitilityBar )

    return div

}