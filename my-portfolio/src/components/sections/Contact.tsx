import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { personalInfo } from "@/lib/constants";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      subject: `Portfolio Contact from ${formData.name}`,
      message: formData.message,
      time: new Date().toLocaleString(),
      reply_to: formData.email,
    };

    emailjs
      .send(
        "service_2omxh0p", 
        "template_9gkpd68", 
        templateParams, 
        {
          publicKey: "WmDYYbRKkAkgkCHNE",
        }
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response);
          setSuccess(true);
          // Reset form
          setFormData({
            name: '',
            email: '',
            message: ''
          });
          
          // Reset success message after 5 seconds
          setTimeout(() => setSuccess(false), 5000);
        },
        (error) => {
          console.log("FAILED...", error);
          
          // Error handling
          if (error.text) {
            if (error.text.includes("Invalid")) {
              setError("Invalid EmailJS configuration. Please check your Service ID, Template ID, and Public Key.");
            } else if (error.text.includes("template")) {
              setError("Template not found. Please check your Template ID in EmailJS.");
            } else {
              setError(`Error: ${error.text}`);
            }
          } else {
            setError("Network error. Please check your connection.");
          }
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="min-h-screen px-6 py-20 bg-gray-50 flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Let's create something together</h2>
          <p className="text-gray-600 text-lg">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <Card className="border-0 shadow-sm bg-white p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="bg-gray-50 border-gray-200 focus:border-gray-400 focus:ring-0"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="bg-gray-50 border-gray-200 focus:border-gray-400 focus:ring-0"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Your Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or just say hi..."
                rows={6}
                className="bg-gray-50 border-gray-200 focus:border-gray-400 focus:ring-0 resize-none"
                required
              />
            </div>

            {/* Success Message */}
            {success && (
              <div className="p-4 bg-gray-50 border-l-4 border-gray-900">
                <p className="text-gray-700 text-sm font-medium">
                  Message sent successfully! I'll get back to you soon.
                </p>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="p-4 bg-red-50 border-l-4 border-red-600">
                <p className="text-red-700 text-sm">
                  {error}
                </p>
              </div>
            )}

            <div className="flex justify-center">
              <Button
                type="submit"
                disabled={!formData.name || !formData.email || !formData.message || loading}
                className="px-12 py-6 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-none disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </div>
                ) : (
                  'Send Message'
                )}
              </Button>
            </div>
          </form>

          <div className="mt-12 pt-8 border-t border-gray-100 text-center">
            <p className="text-gray-500 text-sm mb-2">Or reach out directly at</p>
            <a 
              href={`mailto:${personalInfo.email}`}
              className="text-gray-900 font-medium hover:text-gray-600 transition-colors"
            >
              {personalInfo.email}
            </a>
          </div>
        </Card>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Currently based in {personalInfo.location}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;