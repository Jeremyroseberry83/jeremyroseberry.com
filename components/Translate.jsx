import React, { useEffect } from 'react';
import { Languages } from 'lucide-react';
import { translateLanguages } from '../site.config';

// Google Translate widget, icon-only. Set which languages show in
// site.config.js — every extra language is a maintenance/QA cost, not a
// free feature, so only list markets you actually serve.
export default function Translate() {
  useEffect(() => {
    if (document.getElementById('google-translate-script')) return;

    window.googleTranslateElementInit = () => {
      if (!window.google || !window.google.translate) return;
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: translateLanguages,
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false
        },
        'google_translate_element'
      );
    };

    const script = document.createElement('script');
    script.id = 'google-translate-script';
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    // Icon-only, deliberately secondary to the booking button — a language
    // switcher is a utility, not the primary action. The chrome lives on our
    // own wrapper, not on Google's .goog-te-gadget-simple, which only exists
    // once its script has loaded.
    <div
      className="translate-widget"
      aria-label="Translate this page"
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 36,
        height: 36,
        flexShrink: 0,
        background: 'rgba(255,255,255,0.10)',
        border: '1px solid rgba(153,153,153,0.5)',
        borderRadius: '50%',
        color: '#999999'
      }}
    >
      {/* Google's own gadget renders here, invisible but clickable, filling the button. */}
      <div id="google_translate_element" style={{ position: 'absolute', inset: 0 }} />
      <Languages size={16} strokeWidth={2} style={{ pointerEvents: 'none' }} />
    </div>
  );
}
