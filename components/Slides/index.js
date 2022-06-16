const states = [true, false, false]

function showItems(statesItems){
    const item = Item`
        .item{ 
                list-style: none;
                height: calc(var(--line-height) * 3);
                width: calc(var(--line-height) * 3);
                background-color: var(--happy-color);
                border-radius: 50%;
                transition: transform 100ms linear;
                cursor: pointer;
            }
        `
    const itemActive = Item`
            .item.active{
                transform: scale(1.7);
            }

            ${'active'}
        `

    const items = statesItems.map(state => {
        if(state){
            return itemActive
        }
        return item
    })

    return items.join('')
}

function createStyle(css){
    const head = document.querySelector('head')
    const style = `
    <style>
        ${css}
    </style
    `
    head.insertAdjacentHTML('beforeend', style)

}

const Action = (css) => {
    createStyle(css)
    return (
        `<li class="action"></li>`
    )
}

function handleClick(event){
    const { target } = event
    const allItems = document.querySelectorAll('.item')

    allItems.forEach(item => item.classList.remove('active'))
    target.classList.add('active'); 
}


const Item = (css, className) => {  
    createStyle(css)

    return ( 
        `<li class="item ${className}"
        onclick="handleClick(event)"></li>`
    )
}

const Slide = (css, content) => (
    `<ul style="${css}">${content}</ul>`
)

const action = Action`
    .action{
        list-style: none;
        background-color: var(--happy-color2);
        height: calc(var(--line-height) * 4);
        width: calc(var(--line-height) * 4);
        border-radius: 50%;
        position: absolute;
        left: -5px;
    }

    .action.second{
        transform: translateX(224px);
    }

    .action.thrid{
        transform: translateX(447px);
    }
    
`

const item = Item`
    .item{ 
        list-style: none;
        height: calc(var(--line-height) * 3);
        width: calc(var(--line-height) * 3);
        background-color: var(--happy-color);
        border-radius: 50%;
}
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
    ${showItems(states) + action}
`

