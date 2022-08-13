
export default class Brush {

    constructor(

        id,

        colorMain = `#000000`,
        colorAuxiliary = `#FFFFFF`,

        width = 1,
        height = 1,
        
        ){
        
        this.id = id

        this.colorMain = colorMain
        this.colorAuxiliary = colorAuxiliary
        this.colorUsed = this.colorMain

        this.width = width
        this.height = height

    }

    changeColorUsed(){

        if(this.colorUsed==this.colorMain){

            this.colorUsed = this.colorAuxiliary

        }else{

            this.colorUsed = this.colorMain

        }


    }

}
