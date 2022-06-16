const cyndaquil = './imagens/Cyndaquil.svg'
const quilava = 'imagens/quilava.svg'
const tysplosion = 'imagens/Tysplosion.svg'

const pokemon = Character`
    width: 30%;
    ${cyndaquil}

`
const pokemon2 = Character`
    width: 30%;
    ${quilava}
`
const pokemon3 = Character`
    width: 30%;
    ${tysplosion}    
`

const WrapperCharacters =(css, children)=>( `
        <div style="${css}">${children}</div>
    `
)


const wrapperCharacters = WrapperCharacters`
    display: flex;
    justify-content: space-around;
    ${pokemon + pokemon2 + pokemon3}
`





