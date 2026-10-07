import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Loader2, Check } from "lucide-react";

const FIELD_BASE =
  "w-full bg-transparent border-b border-line py-3 text-[15px] text-ink placeholder:text-ink-soft/60 focus:outline-none focus:border-ink transition-colors duration-200";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, },
  } = useForm({ mode: "onBlur" });

  const [sent, setSent] = useState(false);

  const onSubmit = async () => {
    // Simulated submission — wire this to your backend or a form service.
    await new Promise((r) => setTimeout(r, 1200));
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-line">
      <div className="mx-auto max-w-350 px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
          className="mb-14"
        >
          <p className="font-mono text-[13px] text-accent mb-3">04 · Contact</p>
          <h2 className="font-display text-3xl md:text-[40px] font-semibold tracking-tight text-ink">
            Let's build something.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <motion.form
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
            onSubmit={handleSubmit(onSubmit)}
            className="md:col-span-7 space-y-7"
            noValidate
          >
            <div>
              <input
                {...register("name", { required: "Your name is required." })}
                placeholder="Name"
                className={FIELD_BASE}
              />
              <FieldError message={errors.name?.message} />
            </div>

            <div>
              <input
                {...register("email", {
                  required: "Your email is required.",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address.",
                  },
                })}
                placeholder="Email"
                className={FIELD_BASE}
              />
              <FieldError message={errors.email?.message} />
            </div>

            <div>
              <input
                {...register("project", { required: "Give this a short title." })}
                placeholder="Project"
                className={FIELD_BASE}
              />
              <FieldError message={errors.project?.message} />
            </div>

            <div>
              <textarea
                {...register("message", {
                  required: "Tell me a bit about it.",
                  minLength: { value: 10, message: "A little more detail helps." },
                })}
                placeholder="Message"
                rows={4}
                className={`${FIELD_BASE} resize-none`}
              />
              <FieldError message={errors.message?.message} />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 bg-ink text-white px-6 py-3 text-[14px] font-medium disabled:opacity-60 hover:bg-accent transition-colors duration-200"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isSubmitting ? (
                  <motion.span
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <Loader2 size={15} className="animate-spin" strokeWidth={1.5} />
                    Sending
                  </motion.span>
                ) : sent ? (
                  <motion.span
                    key="sent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <Check size={15} strokeWidth={1.5} />
                    Sent
                  </motion.span>
                ) : (
                  <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    Send Message
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
            className="md:col-span-5 space-y-6"
          >
            <InfoRow icon={Github} label="GitHub" value="github.com/exequielcalix" href="https://github.com/exequielcalix" />
            <InfoRow icon={Linkedin} label="LinkedIn" value="linkedin.com/in/exequielcalix" href="https://linkedin.com/in/exequielcalix" />
            <InfoRow icon={Mail} label="Email" value="hello@exequielcalix.dev" href="mailto:hello@exequielcalix.dev" />
            <InfoRow icon={MapPin} label="Location" value="Remote · Open to relocation" />

            <div className="pt-6 border-t border-line flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
              <span className="text-[13px] text-ink-soft">Available for freelance work.</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FieldError({ message }) {
  return (
    <AnimatePresence>
      {message && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="mt-1.5 text-[12px] text-red-600"
        >
          {message}
        </motion.p>
      )}
    </AnimatePresence>
  );
}

function InfoRow({ icon: Icon, label, value, href }) {
  const content = (
    <div className="flex items-center gap-4 py-3 border-b border-line group">
      <Icon size={16} strokeWidth={1.5} className="text-ink-soft" />
      <div>
        <div className="font-mono text-[10px] text-ink-soft uppercase tracking-wide">{label}</div>
        <div className="text-[14px] text-ink group-hover:text-accent transition-colors duration-200">
          {value}
        </div>
      </div>
    </div>
  );
  return href ? <a href={href}>{content}</a> : content;
}
