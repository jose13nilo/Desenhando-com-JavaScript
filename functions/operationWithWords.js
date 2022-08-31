
export default function upperFirsthLetter(string){

    return string[0].toUpperCase() + string.substring(1)

}

export function createKey(className, id){

    return className + upperFirsthLetter(id)
    
}