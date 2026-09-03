import React, { useState } from 'react';
import { PRIMARY_DEEP, SECONDARY, Button } from './ui';

/**
 * The podcast launch block — a dated announcement with an email capture.
 *
 * A launch date is the one piece of content on this site with an expiry. When
 * 2 January 2027 passes this block should come out and the real episode list
 * takes over; nothing here degrades gracefully into "launched three months
 * ago", and a countdown that has run out is worse than no countdown.
 *
 * NETLIFY: registered by the hidden copy in public/__forms.html under the name
 * `notify`. Netlify scans deployed static HTML at build time and never sees
 * this component, so the field names must match that file exactly or
 * submissions vanish without an error.
 */
const FORM_NAME = 'notify';
const TOPICS = ['Finance', 'Fitness', 'Faith', 'Friends', 'Fun', 'Real talk'];

const encode = (data) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
    .join('&');

export default function PodcastLaunch() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState('idle'); // idle | sending | done | error

  const submit = async (e) => {
    e.preventDefault();
    setState('sending');
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': FORM_NAME, email })
      });
      setState(res.ok ? 'done' : 'error');
    } catch {
      setState('error');
    }
  };

  return (
    <section className="px-6 py-16 md:py-24" style={{ backgroundColor: PRIMARY_DEEP }}>
      <div className="max-w-3xl mx-auto text-center">
        <p className="eyebrow-wide" style={{ color: SECONDARY, fontSize: 11, marginBottom: 18 }}>
          January 2, 2027
        </p>
        <h2
          className="display"
          style={{ color: '#ffffff', fontSize: 'clamp(2rem, 5vw, 3.2rem)', marginBottom: 18 }}
        >
          New Podcast Launching
        </h2>
        <p
          style={{ color: 'rgba(255,255,255,0.85)', fontSize: 17, lineHeight: 1.75, maxWidth: '46ch', margin: '0 auto' }}
        >
          Five-minute weekly episodes on leadership, mindset, and what actually works.
        </p>

        <ul className="flex flex-wrap justify-center gap-2" style={{ marginTop: 26, listStyle: 'none' }}>
          {TOPICS.map((t) => (
            <li
              key={t}
              style={{
                color: 'rgba(255,255,255,0.78)',
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                border: '1px solid rgba(255,255,255,0.24)',
                padding: '7px 14px'
              }}
            >
              {t}
            </li>
          ))}
        </ul>

        {state === 'done' ? (
          <p style={{ color: SECONDARY, fontSize: 16, marginTop: 34 }}>
            You’re on the list. First episode lands 2 January.
          </p>
        ) : (
          <form
            onSubmit={submit}
            name={FORM_NAME}
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="flex flex-col sm:flex-row gap-3 justify-center"
            style={{ marginTop: 34 }}
          >
            <input type="hidden" name="form-name" value={FORM_NAME} />
            <p hidden>
              <input name="bot-field" tabIndex={-1} autoComplete="off" />
            </p>
            <label htmlFor="notify-email" className="sr-only">
              Email address
            </label>
            <input
              id="notify-email"
              type="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              style={{
                flex: '1 1 auto',
                maxWidth: 340,
                padding: '13px 16px',
                fontSize: 15,
                color: '#ffffff',
                backgroundColor: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.28)',
                outline: 'none'
              }}
            />
            <Button variant="gold" type="submit" disabled={state === 'sending'}>
              {state === 'sending' ? 'Sending…' : 'Notify me'}
            </Button>
          </form>
        )}

        {state === 'error' && (
          <p style={{ color: '#ffd9d9', fontSize: 14, marginTop: 14 }}>
            That did not go through. Email {' '}
            <a href="mailto:jeremy@roseberrycapital.net" style={{ color: SECONDARY }}>
              jeremy@roseberrycapital.net
            </a>{' '}
            and I will add you myself.
          </p>
        )}
      </div>
    </section>
  );
}
