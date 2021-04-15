import styled from 'styled-components'

export const Root = styled.div`
    display: grid;

    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 3rem;

    grid-template-areas: 'image image description';

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
            font-size: 1.8rem;
            font-weight: 300;
        }

        h1 {
            font-size: 7rem;
            font-weight: 600;
            line-height: 8rem;
        }

        p {
            font-size: 2rem;
            font-weight: 400;
            line-height: 2rem;

            color: ${({ theme: { colors } }) => colors.gray_1};
        }

        @media (max-width: ${({ theme: { sizes } }) => sizes.lg}) {
            span {
                font-size: 1.5rem;
            }

            h1 {
                font-size: 6rem;
                line-height: 6rem;
            }

            p {
                font-size: 1.7rem;
                line-height: 2rem;
            }
        }

        @media (max-width: ${({ theme: { sizes } }) => sizes.md}) {
            display: inline;

            span {
                font-size: 1.5rem;
            }

            h1 {
                font-size: 5rem;
                line-height: 5rem;

                margin: 1rem 0;
            }

            p {
                font-size: 1.7rem;
                line-height: 2rem;
            }
        }
    }

    @media (max-width: ${({ theme: { sizes } }) => sizes.md}) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
        grid-template-rows: repeat(2, minmax(0, 1fr));
        grid-template-areas: 'image' 'description';
    }
`
