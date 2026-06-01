import React, { useState } from "react";
import { toast } from "sonner";

interface ContactProps {
  onNavigate: (page: string) => void;
}

const Contact = ({ onNavigate }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "contribute",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields!");
      return;
    }

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message transmitted successfully to Big Medicine!");
      setFormData({
        name: "",
        email: "",
        subject: "contribute",
        message: ""
      });
    }, 1500);
  };

  return (
    <div className="px-4 py-8 text-foreground">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl text-primary font-bold mb-2 uppercase tracking-wide">
          Contact Big Medicine
        </h1>
        <p className="text-base text-muted-foreground italic max-w-xl mx-auto">
          "Email suggestions, wit, bile, or resources to bigmed@nancho.net, or dispatch a message below."
        </p>
      </div>

      <div className="max-w-md mx-auto bg-card p-6 border border-border rounded shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-retro-green mb-1">
              Your Name <span className="text-retro-red">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Alexis de Tocqueville"
              className="w-full bg-background border border-border rounded px-3 py-2 text-sm text-foreground focus:outline-none focus:border-primary"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-retro-green mb-1">
              Your Email <span className="text-retro-red">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. alexis@democracy.org"
              className="w-full bg-background border border-border rounded px-3 py-2 text-sm text-foreground focus:outline-none focus:border-primary"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-retro-green mb-1">
              Subject of Inquiry
            </label>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-background border border-border rounded px-3 py-2 text-sm text-foreground focus:outline-none focus:border-primary"
            >
              <option value="contribute">Lend a Hand (Contributions)</option>
              <option value="allies">Join as an Ally</option>
              <option value="feedback">General Feedback &amp; Suggestions</option>
              <option value="other">Bizarre Talents / Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-retro-green mb-1">
              Message <span className="text-retro-red">*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Type your message, suggestions, or comments..."
              className="w-full bg-background border border-border rounded px-3 py-2 text-sm text-foreground focus:outline-none focus:border-primary"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-red-800 disabled:bg-red-900/50 text-white font-bold py-2 rounded transition-colors text-sm"
          >
            {isSubmitting ? "Transmitting..." : "Send Message"}
          </button>
        </form>
      </div>

      <div className="text-center mt-12 pt-6 border-t border-border">
        <button
          onClick={() => onNavigate("home")}
          className="text-retro-green hover:text-primary font-bold text-base underline"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Contact;
