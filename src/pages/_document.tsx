import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Golos+Text:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <style>

        </style>
      </Head>
      <body className="bg-light-background text-light-on-background dark:bg-dark-background dark:text-dark-on-background">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
