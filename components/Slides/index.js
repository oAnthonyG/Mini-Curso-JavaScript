





const Action = (css, content = '')=>(
    `<li style="${css}">${content}</li>`
)


const Item =(css, content = '')=>( 
    `<li style="${css}">${content}</li>`
)

const Slide =(css, content)=>(
    `<ul style="${css}">${content}</ul>`
)

const action = Action`
    list-style: none;
    background-color: var(--happy-color2);
    height: calc(var(--line-height) * 4);
    width: calc(var(--line-height) * 4);
    border-radius: 50%;
    position: absolute;
    left: 4.5px;

`

const item = Item`
    list-style: none;
    height: calc(var(--line-height) * 3);
    width: calc(var(--line-height) * 3);
    background-color: var(--happy-color);
    border-radius: 50%;

`

const slide = Slide`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 80%;
    height: 10px;
    background-color: var(--happy-color);
    margin-top: auto;
    ${item + item + item + action}

`