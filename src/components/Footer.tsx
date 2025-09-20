import { Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Contact', href: '#contact' }
  ];

  const services = [
    { label: 'Strategic Advisory', href: '#services' },
    { label: 'Organizational Transformation', href: '#services' },
    { label: 'Market Research', href: '#services' },
    { label: 'Digital Transformation', href: '#services' }
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: 'mailto:hello@apexconsulting.in', label: 'Email' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Freelance Consulting
            </h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Transforming businesses across Bengaluru and beyond through 
              strategic advisory and organizational excellence.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent rounded-lg flex items-center justify-center transition-all duration-300 hover-lift"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-primary-foreground hover:text-accent-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-foreground">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-foreground">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-foreground">
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  UB City Mall, Vittal Mallya Road<br />
                  Bengaluru 560001, India
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <a 
                  href="tel:+918045678900"
                  className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                >
                  +91 80 4567 XXXX
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a 
                  href="mailto:hello@apexconsulting.in"
                  className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                >
                  hello@apexconsulting.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2025 Freelance Consulting. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;