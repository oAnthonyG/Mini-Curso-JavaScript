const Item =(css, content)=>( 
    `<li style="${css}">${content}</li>`
)

const Slide =(css, content)=>(
    `<ul style="${css}">${content}</ul>`
)

const slideContent = 'vaii!'
const slide = Slide`
    width: 200px;
    height: 10px;
    background-color: #f0932b;
    ${slideContent}

`