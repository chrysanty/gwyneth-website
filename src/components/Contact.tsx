import { Mail, Linkedin, Instagram, Twitter } from "lucide-react"; 
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission would be handled here
    console.log("Form submitted:", formData);
    alert("Thanks for reaching out! This is a demo - in a real app, your message would be sent.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-gray-900 text-center mb-4">Get in Touch</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-gray-900 mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  Send Message
                </Button>
              </form>
            </Card>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:your.email@example.com"
                    className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Mail size={20} />
                    <span>chrysxinhui@gmail.com</span>
                  </a>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-gray-900 mb-4">Follow Me</h3>
                <div className="flex gap-4">
                  
                  <a
                    href="https://instagram.com/chrysantyy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition-colors"
                  >
                    <Instagram size={20} />
                  </a>
                  
                  <a
                    href="https://www.linkedin.com/in/chrysanty-gwyneth-990026194?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  
{/*                  <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition-colors">
                    <img
                      src="tiktok.png" // path to your image
                      alt="TikTok"
                      className="w-5 h-5" // adjust size
                    />
                  </a> */}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
