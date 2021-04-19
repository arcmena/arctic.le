import styled from 'styled-components'

const Component = styled.hr`
    margin: 3rem 0;
    border: 0.1rem solid ${({ theme: { colors } }) => colors.gray_2};

    opacity: 0.8;
`

const Separator = () => {
    return <Component />
}

export default Separator
