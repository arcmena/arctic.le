import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html {
        font-size: 62.5%;
        width: 100%;
        height: -webkit-fill-available;
    }

    body {
        font-family: 'Poppins', sans-serif;
        color: ${({ theme: { colors } }) => colors.black};
        background: ${({ theme: { colors } }) => colors.gray};

        ${({ theme: { mixins } }) => mixins.fillContainer};
    }

    #__next{
        ${({ theme: { mixins } }) => mixins.fillContainer};
    }

    #root {
        ${({ theme: { mixins } }) => mixins.fillContainer};
    }
`
