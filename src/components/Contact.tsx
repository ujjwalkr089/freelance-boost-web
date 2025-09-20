import { Mail, Phone, MapPin, Clock, Send, Linkedin, Twitter } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@apexconsulting.in',
      href: 'mailto:hello@apexconsulting.in'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 80 4567 XXXX',
      href: 'tel:+918045678900'
    },
    {
      icon: MapPin,
      label: 'Office',
      value: 'UB City Mall, Vittal Mallya Road, Bengaluru 560001',
      href: 'https://maps.google.com'
    },
    {
      icon: Clock,
      label: 'Hours',
      value: 'Mon-Fri: 9:00 AM - 6:00 PM IST',
      href: null
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: 'mailto:hello@apexconsulting.in', label: 'Email' }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-muted/30 to-accent-light/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Start a <span className="gradient-text">Conversation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business? Get in touch with our team of experts 
            and discover how we can help you achieve your strategic goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Get in Touch
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We're here to help you navigate complex business challenges 
                and unlock new opportunities for growth.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-hover rounded-lg flex items-center justify-center">
                      <info.icon className="h-6 w-6 text-accent-foreground" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {info.label}
                    </h4>
                    {info.href ? (
                      <a 
                        href={info.href}
                        className="text-muted-foreground hover:text-accent transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-muted-foreground">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-border/50">
              <h4 className="font-semibold text-foreground mb-4">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-muted hover:bg-accent rounded-lg flex items-center justify-center transition-all duration-300 hover-lift"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 text-muted-foreground hover:text-accent-foreground" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-scale-in">
            <Card className="shadow-xl border-border/50">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5 border-b border-border/50">
                <h3 className="text-2xl font-bold text-foreground">
                  Send us a Message
                </h3>
                <p className="text-muted-foreground">
                  Tell us about your project and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input 
                        id="firstName" 
                        placeholder="John"
                        className="border-border/50 focus:border-accent"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Doe"
                        className="border-border/50 focus:border-accent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="john@company.com"
                        className="border-border/50 focus:border-accent"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input 
                        id="company" 
                        placeholder="Your Company"
                        className="border-border/50 focus:border-accent"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject" 
                      placeholder="How can we help you?"
                      className="border-border/50 focus:border-accent"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your project, challenges, and goals..."
                      className="min-h-[120px] border-border/50 focus:border-accent resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary-hover hover:to-accent-hover text-lg py-6"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>

                <div className="mt-8 p-6 bg-gradient-to-r from-accent-light/20 to-primary-light/20 rounded-lg border border-accent/20">
                  <p className="text-center text-foreground font-medium">
                    🚀 Free Initial Consultation
                  </p>
                  <p className="text-center text-muted-foreground text-sm mt-2">
                    Schedule a 30-minute discovery call to discuss your business needs
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;