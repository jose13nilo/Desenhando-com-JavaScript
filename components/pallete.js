
export default function createPallete( id ){

    const label = document.createElement( `label` )

    id = `${ id }Label`

    label.id = id

    label.style.width = `20px`
    label.style.height = label.style.width

    label.style.border = `solid 2px rgba(255, 255, 255, 1)`
    label.style.borderRadius = `100%`

    label.style.zIndex = 1

    label.style.display = `flex`
    label.style.alignItems = `center`

    const inputColor = document.createElement( `input` )

    inputColor.id = `${ id }InputColor`

    inputColor.type = `color`

    inputColor.style.opacity = 0

    inputColor.style.cursor = `pointer`

    label.appendChild(inputColor)

    inputColor.addEventListener( `input`, ( ) => {

        label.style.backgroundColor = inputColor.value

    })

    return label

}