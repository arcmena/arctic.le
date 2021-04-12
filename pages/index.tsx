import Head from 'next/head'

import Header from 'components/common/Header'

export default function Home() {
    return (
        <main>
            <Head>
                <title>Arctic.le | Development & Technology</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
        </main>
    )
}
