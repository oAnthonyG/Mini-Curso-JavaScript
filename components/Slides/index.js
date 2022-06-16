const states = [true, false, false]

function showItems(statesItems){
    const item = (pos) => Item`
        .item{ 
                list-style: none;
                height: calc(var(--line-height) * 3);
                width: calc(var(--line-height) * 3);
                background-color: var(--happy-color);
                border-radius: 50%;
                transition: transform 100ms linear;
                cursor: pointer;
            }
            ${`pos-${pos}`}
        `
    const itemActive = (pos) => Item`
            .item.active{
                transform: scale(1.7);
            }

            ${`active pos-${pos}`}
        `

    const items = statesItems.map((state, index) => {
        if(state){
            return itemActive(index + 1)
        }
        return item(index + 1)
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

function clearAction(action){
    action.classList.remove('second')
    action.classList.remove('third')
}

function handleClick(event){
    const { target } = event
    const allItems = document.querySelectorAll('.item')
    const action = document.querySelector('.action')

    allItems.forEach(item => item.classList.remove('active'))
    target.classList.add('active'); 

    clearAction(action)
    if(target.classList.contains('pos-2')) {
        action.classList.add('second')
    }

    if(target.classList.contains('pos-3')) {
        action.classList.add('third')
    }
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
        transition: transform 300ms linear
    }

    .action.second{
        transform: translateX(224px);
    }

    .action.third{
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

