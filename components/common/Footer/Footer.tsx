import styled from 'styled-components'

const Root = styled.footer`
    text-align: center;

    padding-bottom: 3rem;

    font-size: 1.7rem;
    color: ${({ theme: { colors } }) => colors.gray_1};

    pointer-events: none;
`

const Footer = () => {
    return <Root>arctic.le &#169; 2021</Root>
}

export default Footer
