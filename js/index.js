//BOM = window
//DOM = document

// Tagged Template String
const root = document.querySelector('#root')
const textTitle = 'Evolução'
const cyndaquil = 'imagens/Cyndaquil.svg'
const quilava = 'imagens/quilava.svg'
const tysplosion = 'imagens/Tysplosion.svg'

const title = Title`
    color: #eb4d4b;
    font-size: 40px;
    letter-spacing: 1.9px;
    ${textTitle}
    
` 

const pokemon = Character`
    width: 30%;
    ${cyndaquil}

`
const pokemon2 = Character`
    width:30%;
    ${quilava}
`
const pokemon3 = Character`
    width:30%;
    ${tysplosion}    
`
root.insertAdjacentHTML('beforeend', title)
root.insertAdjacentHTML('beforeend',pokemon)
root.insertAdjacentHTML('beforeend',pokemon2)
root.insertAdjacentHTML('beforeend',pokemon3)