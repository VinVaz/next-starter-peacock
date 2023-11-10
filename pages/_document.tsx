import Document, { Head, Main, NextScript, Html } from 'next/document';

import ANALYTICS_ID from '../lib/gtag';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_ID}`}
          />
          <link
            href={`https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css`}
            rel="stylesheet"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${ANALYTICS_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/felipec.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/python.min.js"></script>
          <script
            dangerouslySetInnerHTML={{ __html: 'hljs.highlightAll();' }}
          />
        </body>
      </Html>
    );
  }
}
