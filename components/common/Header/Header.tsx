import styled from 'styled-components'

const Root = styled.div`
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

        @media (max-width: ${({ theme: { sizes } }) => sizes.lg}) {
            font-size: 10rem;
        }

        @media (max-width: ${({ theme: { sizes } }) => sizes.md}) {
            font-size: 8rem;
        }

        @media (max-width: ${({ theme: { sizes } }) => sizes.sm}) {
            font-size: 5rem;
        }

        @media (max-width: ${({ theme: { sizes } }) => sizes.xs}) {
            font-size: 3rem;
        }
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
