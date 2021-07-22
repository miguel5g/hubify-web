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

          {/* Primary Meta Tags */}
          <meta
            name="title"
            content="A melhor forma para exibir e avaliar suas ideias e projetos"
          />
          <meta
            name="description"
            content="Um local para você expor suas ideias e projetos em andamento e acompanhar a interação dos usuários"
          />
          <meta name="theme-color" content="#6DD5ED" />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://hubify.vercel.app/" />
          <meta
            property="og:title"
            content="A melhor forma para exibir e avaliar suas ideias e projetos"
          />
          <meta
            property="og:description"
            content="Um local para você expor suas ideias e projetos em andamento e acompanhar a interação dos usuários"
          />
          <meta
            property="og:image"
            content="https://hubify.vercel.app/hubify.jpg"
          />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://hubify.vercel.app/" />
          <meta
            property="twitter:title"
            content="A melhor forma para exibir e avaliar suas ideias e projetos"
          />
          <meta
            property="twitter:description"
            content="Um local para você expor suas ideias e projetos em andamento e acompanhar a interação dos usuários"
          />
          <meta
            property="twitter:image"
            content="https://hubify.vercel.app/hubify.jpg"
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
