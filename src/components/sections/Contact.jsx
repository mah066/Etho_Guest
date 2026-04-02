import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';

export function Contact() {
  const [state, handleSubmit] = useForm('mkopvbvy');

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-navy-900 border-t border-white/5 scroll-mt-24">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-teal-500/5 to-transparent pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto glass-card border border-teal-500/20 p-8 md:p-12 rounded-[2.5rem]">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to Transform Your Training?</h2>
            <p className="text-lg text-slate-300">
              Contact us to book a demo and experience EthoGuest for your hospitality business.
            </p>
          </div>

          {state.succeeded ? (
            <div className="text-center text-teal-300 text-lg">
              Thanks — your message has been sent successfully.
            </div>
          ) : (
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-300">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Jane Doe"
                  className="w-full bg-navy-950 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all"
                  required
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-300">Work Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="jane@hotel.com"
                  className="w-full bg-navy-950 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all"
                  required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label htmlFor="company" className="text-sm font-medium text-slate-300">Company / Property Name</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Grand Horizon Hotels"
                  className="w-full bg-navy-950 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Tell us about your training needs..."
                  className="w-full bg-navy-950 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all resize-none"
                  required
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <div className="md:col-span-2">
                <Button type="submit" size="lg" className="w-full text-lg" disabled={state.submitting}>
                  {state.submitting ? 'Sending...' : 'Request a Demo'}
                </Button>
              </div>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}