const style = `<style>
        *{
            margin: 0;
            padding: 0;
            border: none;
            font-family: 'Pokemon', sans-serif;
        }
        body{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #30336b;
        }
        #root{
            box-sizing: border-box;
            text-align: center;
            background-color: #4834d4;
            width: 45vw;
            min-widh: 769px;
            height: 70vh;
            padding-top: 1.3rem;
            
        }
    </style>`

const head = document.querySelector('head')

head.insertAdjacentHTML('beforeend', style)