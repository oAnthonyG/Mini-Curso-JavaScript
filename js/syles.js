const style = `<style>
        :root{
            --line-height: 10px;
            --happy-color: #f0932b;
            --happy-color2: #f6e58d;
        }

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
            display: flex;
            flex-direction: column;
            align-items: center;
            box-sizing: border-box;
            text-align: center;
            background-color: #4834d4;
            width: 45vw;
            min-widh: 769px;
            height: 70vh;
            padding-top: 1.3rem;
            padding-bottom: 4.5rem;
            
        }
    </style>`

const head = document.querySelector('head')

head.insertAdjacentHTML('beforeend', style)