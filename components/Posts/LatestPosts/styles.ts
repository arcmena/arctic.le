import styled from 'styled-components'

export const Root = styled.div`
    display: grid;

    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 4rem;

    margin: 4rem 0;

    @media (max-width: ${({ theme: { sizes } }) => sizes.lg}) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (max-width: ${({ theme: { sizes } }) => sizes.md}) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`

export const Article = styled.div`
    display: grid;

    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 2rem;

    grid-template-areas: 'image' 'description';

    cursor: pointer;

    img {
        grid-area: image;
        max-width: 100%;

        ${({ theme: { mixins } }) => mixins.postRounded}
    }

    div {
        grid-area: description;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        span {
            font-size: 1.5rem;
            font-weight: 300;
        }

        h1 {
            font-size: 2rem;
            font-weight: 600;
        }

        p {
            font-size: 1.8rem;
            font-weight: 400;
            line-height: 2.5rem;

            color: ${({ theme: { colors } }) => colors.gray_1};
        }
    }
`
