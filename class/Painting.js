
export default class Painting{

    constructor(

        id,

        color = `white`,

        width = 0,
        height = 0,

        scale = 1
        
    ){
        
        this.id = id

        this.color = color

        this.width = width
        this.height = height

        this.scale = scale
    
        this.pixels = []

    }

}