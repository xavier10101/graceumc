'use client';

import { useEffect, useMemo, useState } from 'react';

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
  securityAnswer: string;
};

const initialState: FormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
  securityAnswer: '',
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Simple captcha: sum of two numbers
  const [n1, n2] = useMemo(() => {
    const a = Math.floor(Math.random() * 8) + 1; // 1-9
    const b = Math.floor(Math.random() * 8) + 1; // 1-9
    return [a, b];
  }, []);
  const securityQuestion = `${n1} + ${n2}`;
  const expectedAnswer = String(n1 + n2);

  const isValidEmail = (value: string) => /.+@.+\..+/.test(value);
  const allRequiredFilled =
    form.name.trim() !== '' &&
    isValidEmail(form.email) &&
    form.subject.trim() !== '' &&
    form.message.trim() !== '' &&
    form.securityAnswer.trim() === expectedAnswer;

  useEffect(() => {
    if (success) {
      setForm(initialState);
    }
  }, [success]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    if (!allRequiredFilled) {
      setError('Please complete all fields correctly.');
      return;
    }
    setBusy(true);
    // For now, do not send email. Simulate success response.
    await new Promise((r) => setTimeout(r, 600));
    setBusy(false);
    setSuccess(true);
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-black/[.08] dark:border-white/[.145] p-6 bg-white/60 dark:bg-black/30 backdrop-blur space-y-4">
      <h2 className="text-xl font-semibold" style={{ color: 'var(--brand-red)' }}>Send us a message</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input
            required
            type="text"
            className="w-full rounded border border-black/[.12] dark:border-white/[.18] bg-transparent px-3 py-2"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            required
            type="email"
            className="w-full rounded border border-black/[.12] dark:border-white/[.18] bg-transparent px-3 py-2"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm mb-1">Subject</label>
        <input
          required
          type="text"
          className="w-full rounded border border-black/[.12] dark:border-white/[.18] bg-transparent px-3 py-2"
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Message</label>
        <textarea
          required
          rows={5}
          className="w-full rounded border border-black/[.12] dark:border-white/[.18] bg-transparent px-3 py-2"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Security Code</label>
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center rounded bg-black/[.04] dark:bg-white/[.06] px-3 py-2 text-sm">
            {securityQuestion}
          </span>
          <input
            required
            inputMode="numeric"
            placeholder="Answer"
            className="flex-1 rounded border border-black/[.12] dark:border-white/[.18] bg-transparent px-3 py-2"
            value={form.securityAnswer}
            onChange={(e) => setForm({ ...form, securityAnswer: e.target.value })}
          />
        </div>
      </div>

      {error && <div className="text-sm" style={{ color: 'var(--brand-red)' }}>{error}</div>}
      {success && <div className="text-sm" style={{ color: 'var(--brand-blue)' }}>Thank you! Your message has been sent.</div>}

      <button
        type="submit"
        disabled={!allRequiredFilled || busy}
        className="inline-flex items-center rounded-lg px-5 py-3 text-white disabled:opacity-60"
        style={{ backgroundColor: 'var(--brand-red)' }}
      >
        {busy ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  );
}


