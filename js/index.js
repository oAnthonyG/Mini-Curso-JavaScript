//BOM = window
//DOM = document

// Tagged Template String
const root = document.querySelector('#root')
const textTitle = 'Dificuldade'

const title = Title`
    color: red;
    font-size: 40px;
    ${textTitle}
    
`
root.insertAdjacentHTML('beforeend', title)