export default class Pixel {

    constructor(

        color,

        left,
        top
        
    ){
        
        this.id = left+` `+top

        this.color = color

        this.width = 1
        this.height = 1

        this.left = left
        this.top = top

    }

}