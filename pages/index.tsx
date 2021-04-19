import Head from 'next/head'
import styled from 'styled-components'

import Header from 'components/common/Header'
import Footer from 'components/common/Footer'
import ShowcasePost from 'components/Posts/ShocasePost'
import LatestPosts from 'components/Posts/LatestPosts'
import Separator from 'components/ui/Separator'

const Main = styled.main`
    max-width: ${({ theme: { sizes } }) => sizes.xl};

    margin: 0 auto;
    padding: 0 4rem;

    @media (max-width: ${({ theme: { sizes } }) => sizes.sm}) {
        padding: 0 2rem;
    }
`

const Feed = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
`

export default function Home() {
    return (
        <Main>
            <Head>
                <title>Arctic.le | Development & Technology articles</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <Separator />

            <Feed>
                <ShowcasePost />
                <LatestPosts />
            </Feed>

            <Separator />

            <Footer />
        </Main>
    )
}
