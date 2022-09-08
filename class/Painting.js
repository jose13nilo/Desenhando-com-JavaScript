
export default class Painting{

    constructor(

        id,

        side = 100,

        scale = 5,

        color = `rgba(255, 255, 255, 0.85)`,

        pixels = []
        
    ){
        
        this.id = id

        this.color = color

        this.side = side

        this.scale = scale
    
        this.pixels = pixels

    }

}