import styled from 'styled-components'

const Root = styled.div`
    padding: 4rem 9rem;

    h1 {
        font-size: 13rem;

        span {
            background: linear-gradient(
                120deg,
                #121212 43%,
                #121212 49%,
                #364cf2 43%,
                #364cf2 86%,
                #364cf2 86%
            );
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        user-select: none;
    }
`

const Header = () => {
    return (
        <Root>
            <h1>
                The <span>arctic.le</span>
            </h1>
        </Root>
    )
}

export default Header
