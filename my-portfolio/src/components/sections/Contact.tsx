import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { personalInfo, socialLinks } from "@/lib/constants"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Get In Touch</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Let's talk about your project</h3>
            <p className="text-gray-600 mb-8">
              I'm always interested in hearing about new opportunities and projects. 
              Whether you have a question or just want to say hi, I'll get back to you!
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900">Email</h4>
                <p className="text-gray-600">{personalInfo.email}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Location</h4>
                <p className="text-gray-600">{personalInfo.location}</p>
              </div>
            </div>
            <div className="flex gap-4 mt-8">
              {socialLinks.map((social, index) => (
                <Button key={index} variant="outline" size="icon">
                  <span className="sr-only">{social.name}</span>
                  {/* You can add icons here later */}
                  {social.name.charAt(0)}
                </Button>
              ))}
            </div>
          </div>
          <div>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <Input placeholder="Your Name" className="bg-white" />
                <Input placeholder="Your Email" type="email" className="bg-white" />
              </div>
              <Input placeholder="Subject" className="bg-white" />
              <Textarea placeholder="Your Message" rows={5} className="bg-white" />
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}