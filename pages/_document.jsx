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

        {/* favicon.ico carries 16/32/48/64/128/256. The small sizes are not
            plain downscales — the monogram's hairline strokes fall under a
            pixel at tab size, so those frames are drawn with the strokes
            thickened. Regenerate all of them together if the mark changes. */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/images/favicon-512.png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

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
                'Serial entrepreneur across real estate and capital markets. Founder of seven companies, investing for twenty years.',
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
