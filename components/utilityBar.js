
import createButtonReset from "./buttonReset.js"
import createPalletes from "./palletes.js"

export default function createUtilityBar( id ) {

    const div = document.createElement( `div` )

    div.className = `UtilityBar`

    id = `${ id }UtilityBar`

    div.id = id

    div.style.display = `flex`
    div.style.justifyContent = `space-between`
    div.style.alignItems = `center`

    div.style.marginInline = `10px`

    div.style.width = `100%`

    div.style.zIndex = 2

    const buttonReset = createButtonReset( id )

    div.appendChild( buttonReset )

    const palletes = createPalletes( id )

    div.appendChild( palletes )

    return div

}