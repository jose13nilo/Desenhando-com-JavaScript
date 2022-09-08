
export default function createSpan(string){

    const span = document.createElement(`span`)

    const text = document.createTextNode(string)

    span.appendChild(text)

    return span

}