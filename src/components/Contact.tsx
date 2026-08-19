import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Linkedin, Github, Send, Copy, CheckCircle2, MessageSquare, MapPin, Sparkles } from 'lucide-react';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    // Launch mailto fallback
    const subject = encodeURIComponent(`Portfolio Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    setIsSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');
    setTimeout(() => setIsSubmitted(false), 6000);
  };

  return (
    <section id="contact" className="py-20 bg-[#0D1117] relative border-t border-[#30363D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-2 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-600/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-semibold">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>10. GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F0F6FC]">
            Let's Build Something
          </h2>
          <p className="text-sm sm:text-base text-[#8B949E] max-w-xl">
            Have an idea, project, internship opportunity, or collaboration in mind? I'd love to connect and discuss how we can build something practical.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Links & Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-2xl bg-[#161B22] border border-[#30363D] space-y-6">
              
              <div>
                <h4 className="text-base font-bold text-[#F0F6FC]">
                  Direct Contact Channels
                </h4>
                <p className="text-xs text-[#8B949E] mt-1">
                  Fastest response via email or LinkedIn.
                </p>
              </div>

              {/* Email Box with Copy */}
              <div className="p-4 rounded-xl bg-[#0D1117] border border-[#30363D] space-y-2">
                <span className="text-[11px] font-mono text-[#8B949E] block">
                  Primary Email
                </span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    id="contact-email-mailto-link"
                    href={`mailto:${personalInfo.email}`}
                    className="text-xs sm:text-sm font-mono text-indigo-300 font-semibold hover:underline truncate"
                  >
                    {personalInfo.email}
                  </a>
                  <button
                    id="contact-copy-email-btn"
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg bg-[#161B22] hover:bg-[#21262D] text-[#8B949E] hover:text-white border border-[#30363D] transition-colors shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {copiedEmail && (
                  <p className="text-[11px] font-mono text-green-400">
                    Copied to clipboard!
                  </p>
                )}
              </div>

              {/* Social Channels */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  id="contact-linkedin-link"
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#0D1117] border border-[#30363D] hover:border-indigo-500/40 text-center transition-colors group"
                >
                  <Linkedin className="w-5 h-5 mx-auto text-[#8B949E] group-hover:text-indigo-400 mb-1" />
                  <span className="text-xs font-semibold text-[#F0F6FC] block">LinkedIn</span>
                  <span className="text-[10px] font-mono text-[#8B949E]">harishankardansena</span>
                </a>

                <a
                  id="contact-github-link"
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#0D1117] border border-[#30363D] hover:border-indigo-500/40 text-center transition-colors group"
                >
                  <Github className="w-5 h-5 mx-auto text-[#8B949E] group-hover:text-indigo-400 mb-1" />
                  <span className="text-xs font-semibold text-[#F0F6FC] block">GitHub</span>
                  <span className="text-[10px] font-mono text-[#8B949E]">harishankardansena</span>
                </a>
              </div>

              {/* Location Badge */}
              <div className="pt-2 border-t border-[#30363D] flex items-center gap-2 text-xs text-[#8B949E]">
                <MapPin className="w-4 h-4 text-green-400 shrink-0" />
                <span>Based in {personalInfo.location}</span>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#161B22] border border-[#30363D] space-y-6">
              
              <div>
                <h4 className="text-base font-bold text-[#F0F6FC]">
                  Send a Direct Message
                </h4>
                <p className="text-xs text-[#8B949E] mt-1">
                  Fill out the form below to initiate an email dispatch.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-xs font-mono text-[#8B949E]">
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0D1117] border border-[#30363D] focus:border-indigo-500/50 text-xs sm:text-sm text-[#F0F6FC] placeholder-[#8B949E] outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-xs font-mono text-[#8B949E]">
                      Your Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0D1117] border border-[#30363D] focus:border-indigo-500/50 text-xs sm:text-sm text-[#F0F6FC] placeholder-[#8B949E] outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-xs font-mono text-[#8B949E]">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Tell me about your project, idea, or role opportunity..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0D1117] border border-[#30363D] focus:border-indigo-500/50 text-xs sm:text-sm text-[#F0F6FC] placeholder-[#8B949E] outline-none transition-colors resize-none"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md shadow-indigo-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>

                  <span className="text-[11px] font-mono text-[#8B949E]">
                    Dispatches via Email
                  </span>
                </div>

                {isSubmitted && (
                  <div className="p-3 rounded-xl bg-green-950/40 border border-green-800/40 text-green-300 text-xs font-mono flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                    <span>Mail client opened! Looking forward to connecting with you.</span>
                  </div>
                )}
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
