import createPallete from "./pallete.js"

export default function createPalletes( id ){

    const div = document.createElement( `div` )

    div.className = `Palletes`

    id = id + div.className

    div.id = id

    div.style.minWidth = `60px`
    div.style.width = `4%`

    div.style.display = `flex`

    div.style.justifyItems = `center`
    div.style.justifyContent = `space-between`

    const mainPallete = createPallete( `${ id }Main` )
    const auxiliaryPallete = createPallete( `${ id }Auxiliary` )

    div.appendChild( mainPallete )
    div.appendChild( auxiliaryPallete )

    return div
    
}

export function onChangeColorsBrushByPalletes ( brushId, palletes ) {

    const brush = JSON.parse( localStorage.getItem( brushId ) )

    const mainPallete =  palletes.children[ 0 ].children[ 0 ]
    const auxiliaryPallete = palletes.children[ 1 ].children[ 0 ]

    function changeColorBrushByPallete( colorBrush, pallete){

        pallete.addEventListener( `input`,  (  ) => {

            brush[ colorBrush ] = pallete.value

            localStorage.setItem( brushId,  JSON.stringify( brush ) )
            
        })

    }

    changeColorBrushByPallete( `mainColor`, mainPallete )
    changeColorBrushByPallete( `auxiliaryColor`, auxiliaryPallete )

}