import React, { useState } from 'react';
import { Mail, Copy, Check, Github, MessageSquare } from 'lucide-react';

const CopyRow = ({ label, value }) => {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch (e) {
      // swallow
    }
  };

  return (
    <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-4">
      <div>
        <p className="text-xs uppercase tracking-wide text-gray-400">{label}</p>
        <p className="text-white font-medium break-all">{value}</p>
      </div>
      <button onClick={onCopy} className="inline-flex items-center gap-2 rounded-md bg-white/10 hover:bg-white/15 text-white px-3 py-2 text-sm font-medium ring-1 ring-inset ring-white/10 transition">
        {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
        {copied ? 'Copied' : 'Copy'}
      </button>
    </div>
  );
};

const Contact = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-t from-transparent to-gray-950/40">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Contact.cmd</h2>
        <p className="mt-3 text-gray-300 max-w-2xl">
          Copy my Discord ID or Email, or visit my GitHub profile. DMs open for collaboration and ideas.
        </p>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <CopyRow label="Discord ID" value="appuzlota" />
          <CopyRow label="Email" value="hello@appuzlota.me" />
        </div>

        <div className="mt-6">
          <a
            href="https://github.com/appuzlotatheog"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 text-sm font-medium shadow ring-1 ring-inset ring-white/10 transition"
          >
            <Github className="h-4 w-4" />
            GitHub: appuzlotatheog
          </a>
        </div>

        <div className="mt-8 grid sm:grid-cols-3 gap-4 text-xs text-gray-400">
          <div className="flex items-center gap-2"><MessageSquare className="h-4 w-4" /><span>Status: Online</span></div>
          <div className="flex items-center gap-2"><Mail className="h-4 w-4" /><span>hello@appuzlota.me</span></div>
          <div className="flex items-center gap-2"><Github className="h-4 w-4" /><span>@appuzlotatheog</span></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
