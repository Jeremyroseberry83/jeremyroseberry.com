import React, { useState } from 'react';
import { X, Mail } from 'lucide-react';
import { PRIMARY, PRIMARY_DEEP, SLATE, MUTED, SECONDARY } from './ui';
import { company } from '../site.config';

// Netlify needs the payload url-encoded, not JSON.
const encode = (data) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
    .join('&');

const FORM_NAME = 'contact';

export default function ContactForm({ onClose, initialType, initialMessage }) {
  const [form, setForm] = useState({
    type: initialType || 'General',
    email: '',
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
    padding: '13px 15px',
    borderRadius: 10,
    border: '1px solid #DCE3F7',
    color: SLATE,
    fontSize: 15,
    backgroundColor: '#fff'
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 p-4"
      style={{ backgroundColor: 'rgba(20,28,40,0.55)' }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-lg w-full p-10 relative"
        style={{ maxHeight: '92vh', overflowY: 'auto' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-6 right-6" style={{ color: MUTED }} aria-label="Close">
          <X size={22} />
        </button>

        {state === 'done' ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#E1F4EE' }}>
              <span style={{ color: SECONDARY, fontSize: 26 }}>✓</span>
            </div>
            <h2 className="font-bold mb-3" style={{ color: SLATE, fontSize: 22 }}>
              Thanks — we'll come back to you.
            </h2>
            <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7 }}>
              [Set expectations, e.g. "Within two business days."]
            </p>
            <button
              onClick={onClose}
              className="mt-8 px-7 py-3 rounded-full text-white text-sm font-semibold"
              style={{ background: `linear-gradient(90deg, ${PRIMARY} 0%, ${PRIMARY_DEEP} 100%)` }}
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2 className="font-bold mb-8" style={{ color: SLATE, fontSize: 24, letterSpacing: '-0.02em' }}>
              Let's talk.
            </h2>

            {/* Netlify detects this form at BUILD time by scanning static HTML,
                not this React component — you need a matching plain <form> in
                public/__forms.html with the same name + fields, or Netlify
                Forms won't work. See that file for the template. */}
            <form
              name={FORM_NAME}
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={submit}
              className="space-y-5"
            >
              <input type="hidden" name="form-name" value={FORM_NAME} />
              <p className="hidden">
                <label>
                  Leave blank: <input name="bot-field" onChange={change} />
                </label>
              </p>

              <div>
                <label className="block font-semibold mb-2" style={{ color: SLATE, fontSize: 13 }}>
                  I'm reaching out about
                </label>
                <select name="type" value={form.type} onChange={change} style={field}>
                  <option>General</option>
                  <option>Press</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold mb-2" style={{ color: SLATE, fontSize: 13 }}>
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={change}
                  placeholder="you@company.com"
                  style={field}
                />
              </div>

              <div>
                <label className="block font-semibold mb-2" style={{ color: SLATE, fontSize: 13 }}>
                  Anything else
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={change}
                  placeholder="Optional."
                  style={{ ...field, resize: 'none' }}
                />
              </div>

              {state === 'error' && (
                <p style={{ color: '#B4232B', fontSize: 14 }}>
                  Something went wrong. Email{' '}
                  <a href={`mailto:${company.email}`} style={{ textDecoration: 'underline' }}>
                    {company.email}
                  </a>{' '}
                  directly and we'll pick it up.
                </p>
              )}

              <button
                type="submit"
                disabled={state === 'sending'}
                className="w-full py-3.5 rounded-full text-white font-semibold"
                style={{
                  background: `linear-gradient(90deg, ${PRIMARY} 0%, ${PRIMARY_DEEP} 100%)`,
                  opacity: state === 'sending' ? 0.65 : 1,
                  fontSize: 15
                }}
              >
                {state === 'sending' ? 'Sending…' : 'Send'}
              </button>
            </form>

            <div className="mt-8 pt-7" style={{ borderTop: '1px solid #E4E8F2' }}>
              <p className="mb-4" style={{ color: MUTED, fontSize: 13 }}>
                Prefer email?
              </p>
              <a href={`mailto:${company.email}`} className="inline-flex items-center gap-2.5" style={{ color: PRIMARY, fontSize: 14 }}>
                <Mail size={15} strokeWidth={1.8} />
                {company.email}
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
