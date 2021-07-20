import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="pt-BR">
        <Head>
          <link href="./favicon.ico" rel="shortcut icon" type="image/x-icon" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />

          <meta
            name="title"
            content="Hubify - Explore projetos e ideias da comunidade"
          />
          <meta
            name="description"
            content="Um local para você expor suas ideias e projetos em andamento e acompanhar a interação dos uusários"
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://hubify.vercel.app/" />
          <meta
            property="og:title"
            content="Hubify - Explore projetos e ideias da comunidade"
          />
          <meta
            property="og:description"
            content="Um local para você expor suas ideias e projetos em andamento e acompanhar a interação dos uusários"
          />

          <meta property="twitter:card" content="summary" />
          <meta property="twitter:url" content="https://hubify.vercel.app/" />
          <meta
            property="twitter:title"
            content="Hubify - Explore projetos e ideias da comunidade"
          />
          <meta
            property="twitter:description"
            content="Um local para você expor suas ideias e projetos em andamento e acompanhar a interação dos usários"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
