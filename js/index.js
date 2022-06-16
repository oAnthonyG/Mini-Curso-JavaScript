//BOM = window
//DOM = document

// Tagged Template String
const root = document.querySelector('#root')
const textTitle = 'Evolução'


const title = Title`
    color: #eb4d4b;
    font-size: 40px;
    letter-spacing: 1.9px;
    ${textTitle}
    
` 


root.insertAdjacentHTML('beforeend', title)
root.insertAdjacentHTML('beforeend', wrapperCharacters)
root.insertAdjacentHTML('beforeend', slide)