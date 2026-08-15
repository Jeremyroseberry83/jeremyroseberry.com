import React, { useState } from 'react';
import { X, Mail } from 'lucide-react';
import { Button, SECONDARY, SECONDARY_DEEP, SLATE, MUTED, PRIMARY, INK } from './ui';
import { company } from '../site.config';

// Netlify needs the payload url-encoded, not JSON.
const encode = (data) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
    .join('&');

const FORM_NAME = 'booking';

/**
 * The booking enquiry form.
 *
 * Field discipline: name, email and message are required and nothing else is.
 * Every additional required field measurably costs enquiries, and the details
 * below (date, city, audience) are things an organiser volunteers happily when
 * they are optional — and abandons the form over when they are not.
 *
 * IMPORTANT: Netlify registers forms by scanning static HTML at build time and
 * never sees this React component. public/__forms.html carries a hidden copy
 * with the same form name and the same field names. Change a field here and
 * you must change it there, or submissions silently vanish.
 */
const ENQUIRY_TYPES = ['Speaking', 'Hosting / emcee', 'Podcast', 'Availability', 'Press', 'Content', 'Other'];

export default function ContactForm({ onClose, initialType, initialMessage }) {
  const [form, setForm] = useState({
    type: ENQUIRY_TYPES.includes(initialType) ? initialType : 'Speaking',
    name: '',
    email: '',
    organisation: '',
    eventDate: '',
    location: '',
    audience: '',
    message: initialMessage || ''
  });
  const [state, setState] = useState('idle'); // idle | sending | done | error

  const change = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setState('sending');
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': FORM_NAME, ...form })
      });
      setState(res.ok ? 'done' : 'error');
    } catch {
      setState('error');
    }
  };

  const field = {
    width: '100%',
    padding: '12px 14px',
    borderRadius: 2,
    border: '1px solid #d9d9d9',
    color: SLATE,
    fontSize: 15,
    backgroundColor: '#fff',
    fontFamily: 'inherit'
  };

  const label = {
    display: 'block',
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: MUTED,
    marginBottom: 8
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 p-4 modal-fade-in"
      style={{ backgroundColor: 'rgba(20,20,20,0.72)' }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Booking enquiry"
    >
      <div
        className="bg-white w-full relative"
        style={{ maxWidth: 620, maxHeight: '92vh', overflowY: 'auto' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Charcoal header — carries the brand into the one screen where the
            visitor has actually decided to do something. */}
        <div className="relative overflow-hidden" style={{ backgroundColor: INK, padding: '30px 34px' }}>
          <span
            aria-hidden="true"
            style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 3, backgroundColor: SECONDARY }}
          />
          <button
            onClick={onClose}
            className="absolute"
            style={{ top: 20, right: 20, color: 'rgba(255,255,255,0.65)', background: 'none', border: 'none' }}
            aria-label="Close"
          >
            <X size={22} />
          </button>

          {state === 'done' ? (
            <>
              <p className="eyebrow-wide" style={{ color: SECONDARY, fontSize: 10, marginBottom: 12 }}>
                Received
              </p>
              <h2 className="display" style={{ color: '#ffffff', fontSize: 28 }}>
                Thank you
              </h2>
            </>
          ) : (
            <>
              <p className="eyebrow-wide" style={{ color: SECONDARY, fontSize: 10, marginBottom: 12 }}>
                Booking enquiry
              </p>
              <h2 className="display" style={{ color: '#ffffff', fontSize: 28 }}>
                Let’s find a date
              </h2>
            </>
          )}
        </div>

        <div style={{ padding: '32px 34px 36px' }}>
          {state === 'done' ? (
            <div>
              <p style={{ color: SLATE, fontSize: 17, lineHeight: 1.75, marginBottom: 16 }}>
                That has come straight through to me — not to an inbox somebody else checks.
              </p>
              <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.75, marginBottom: 28 }}>
                You will hear back within one business day. If it is urgent, or the date is close, email{' '}
                <a href={`mailto:${company.email}`} style={{ color: SECONDARY_DEEP, textDecoration: 'underline' }}>
                  {company.email}
                </a>{' '}
                directly and mark it urgent.
              </p>
              <Button variant="navy" onClick={onClose}>
                Close
              </Button>
            </div>
          ) : (
            <>
              <form name={FORM_NAME} method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={submit}>
                <input type="hidden" name="form-name" value={FORM_NAME} />
                <p className="hidden">
                  <label>
                    Leave blank: <input name="bot-field" onChange={change} />
                  </label>
                </p>

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="bk-type" style={label}>
                    This is about
                  </label>
                  <select id="bk-type" name="type" value={form.type} onChange={change} style={field}>
                    {ENQUIRY_TYPES.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div className="grid sm:grid-cols-2 gap-4" style={{ marginBottom: 20 }}>
                  <div>
                    <label htmlFor="bk-name" style={label}>
                      Your name
                    </label>
                    <input id="bk-name" type="text" name="name" required value={form.name} onChange={change} style={field} />
                  </div>
                  <div>
                    <label htmlFor="bk-email" style={label}>
                      Email
                    </label>
                    <input
                      id="bk-email"
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={change}
                      placeholder="you@company.com"
                      style={field}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="bk-org" style={label}>
                    Organisation or event
                  </label>
                  <input id="bk-org" type="text" name="organisation" value={form.organisation} onChange={change} style={field} />
                </div>

                {/* Optional qualifiers. No caption: the fields are visibly
                    unmarked while name/email/message carry `required`, which
                    already tells a browser and a reader which is which. */}
                <div className="grid sm:grid-cols-3 gap-4" style={{ marginBottom: 20 }}>
                  <div>
                    <label htmlFor="bk-date" style={label}>
                      Date
                    </label>
                    <input id="bk-date" type="text" name="eventDate" value={form.eventDate} onChange={change} placeholder="Mar 2027" style={field} />
                  </div>
                  <div>
                    <label htmlFor="bk-loc" style={label}>
                      City
                    </label>
                    <input id="bk-loc" type="text" name="location" value={form.location} onChange={change} placeholder="Miami" style={field} />
                  </div>
                  <div>
                    <label htmlFor="bk-aud" style={label}>
                      Audience
                    </label>
                    <input id="bk-aud" type="text" name="audience" value={form.audience} onChange={change} placeholder="250" style={field} />
                  </div>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <label htmlFor="bk-msg" style={label}>
                    Tell me more
                  </label>
                  <textarea
                    id="bk-msg"
                    name="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={change}
                    placeholder="The event, the date, the audience — whatever you have. A couple of lines is plenty."
                    style={{ ...field, resize: 'vertical' }}
                  />
                </div>

                {state === 'error' && (
                  <p style={{ color: '#b4232b', fontSize: 14, marginBottom: 18 }}>
                    Something went wrong sending that. Email{' '}
                    <a href={`mailto:${company.email}`} style={{ textDecoration: 'underline' }}>
                      {company.email}
                    </a>{' '}
                    and it will get picked up.
                  </p>
                )}

                <Button variant="gold" type="submit" full size="lg" disabled={state === 'sending'}>
                  {state === 'sending' ? 'Sending…' : 'Send enquiry'}
                </Button>

                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.65, marginTop: 14, textAlign: 'center' }}>
                  Replies come from Jeremy personally, usually within one business day.
                </p>
              </form>

              <div style={{ marginTop: 28, paddingTop: 24, borderTop: '1px solid #e2e2e2' }}>
                <a
                  href={`mailto:${company.email}`}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color: PRIMARY, fontSize: 14, fontWeight: 600 }}
                >
                  <Mail size={15} />
                  Prefer email? {company.email}
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
