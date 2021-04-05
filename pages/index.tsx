import Head from 'next/head'
import styled from 'styled-components'

const Root = styled.div`
    padding: 4rem 9rem;

    h1 {
        font-size: 13rem;
    }
`

export default function Home() {
    return (
        <div id="root">
            <Head>
                <title>Arctic.le | Development & Technology</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Root>
                <h1>The arctic.le</h1>
            </Root>
        </div>
    )
}
