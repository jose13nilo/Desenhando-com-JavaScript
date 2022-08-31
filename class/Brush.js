
export default class Brush {

    constructor(

        id,

        colorMain = `#000000`,
        colorAuxiliary = `#FFFFFF`,

        side = 1,

        isDown = false,
        
        ){
        
        this.id = id

        this.colorMain = colorMain
        this.colorAuxiliary = colorAuxiliary
        this.colorUsed = this.colorMain

        this.side = side

        this.isDown = isDown

    }

    changeColorUsed(){

        if(this.colorUsed==this.colorMain){

            this.colorUsed = this.colorAuxiliary

        }else{

            this.colorUsed = this.colorMain

        }


    }

}
