import Document, { Html, NextScript, Head, Main, DocumentContext } from "next/document";
import NextGA from "nextgas";

class MyDoc extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                    <NextGA mId={`${process.env.NEXT_GA}`} />
                    <link href="https://api.fontshare.com/css?f[]=outfit@100,200,300,400,500,600,700,800,900&display=swap" rel="stylesheet"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDoc;