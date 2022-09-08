
const body = () => {

    let body = document.body

    body.style.position = 'absolute'

    body.style.height =  `100%`
    body.style.width = `100%`

    body.style.margin = '0px'

    body.style.backgroundColor = `rgba(0, 0, 0, 0.95)`

    body.style.display = `flex`
    body.style.alignItems = `center`
    body.style.justifyContent = `center`

    return body
    
}

export default body()