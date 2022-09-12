
export class Brush {

    constructor(

        id,

        mainColor = `#000000`,
        auxiliaryColor  = `#FFFFFF`,
        
        ){
        
        this.id = id

        this.mainColor = mainColor
        this.auxiliaryColor = auxiliaryColor 

    }

}

export default function getOrMakeBrushIdAndBackup ( id  ) {

    id = `${ id }Brush`

    return localStorage[ id ] != undefined ? createBrushByBackup( id ) : createPatternBrushAndBackup( id )

}

export function createPatternBrushAndBackup ( id ) {

    const brush = new Brush( id )

    localStorage.setItem( id , JSON.stringify( brush ) )
    
    return brush.id

}

export function createBrushByBackup ( id ) {

    const brush = JSON.parse( localStorage.getItem( id ) )

    return brush.id

}

export function saveBrushInBackup ( brush ) {

    localStorage.setItem( brush.id, JSON.stringify( brush ) )

}