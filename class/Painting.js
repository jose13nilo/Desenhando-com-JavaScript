
export default class Painting{

    constructor(

        id,

        color = `white`,

        side = 0,

        scale = 1,

        pixels = []
        
    ){
        
        this.id = id

        this.color = color

        this.side = side

        this.scale = scale
    
        this.pixels = pixels

    }

}