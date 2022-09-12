
export default function createSpan( id, string ){

    const span = document.createElement( `span` )

    span.id = `${ id }Span`

    const text = document.createTextNode( string )

    span.appendChild( text )

    return span

}