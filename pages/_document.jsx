import { Html, Head, Main, NextScript } from 'next/document';
import { colors, company, social } from '../site.config';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content={colors.PRIMARY} />

        {/* Oswald = condensed display lockup, Inter = body. Preconnect first:
            without it the browser can't start the font fetch until it has
            parsed and fetched the CSS file, which delays the hero headline. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Inter:wght@200;400;500;600;700&family=Jost:wght@300;400&display=swap"
          rel="stylesheet"
        />

        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" type="image/png" href="/images/jr-monogram.png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/images/jr-monogram.png" />

        {/* Person schema. This is what lets Google show the knowledge-panel
            style result for a name search, and what event organisers' tooling
            reads when they paste the URL. Keep sameAs in sync with
            site.config.js social links. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: company.name,
              jobTitle: company.role,
              url: `https://${company.domain}`,
              email: `mailto:${company.email}`,
              description:
                'Keynote speaker, event host and podcast guest on leadership, mindset and building businesses.',
              sameAs: Object.values(social).filter(Boolean)
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
