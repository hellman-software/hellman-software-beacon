export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-muted/20" role="contentinfo">
      <div className="container px-4 py-12">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="font-bold text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Hellman Software AB
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Expert software engineering services specializing in mobile applications, 
                embedded systems, and IoT solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-sm">Quick Links</h3>
              <nav aria-label="Footer navigation">
                <ul className="space-y-2">
                  <li>
                    <a 
                      href="#expertise" 
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                    >
                      Expertise
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#technologies" 
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                    >
                      Technologies
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#about" 
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#contact" 
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="font-semibold text-sm">Contact</h3>
              <address className="not-italic space-y-2 text-sm text-muted-foreground">
                <div>
                  <a 
                    href="mailto:erik.hellman@hellsoft.se"
                    className="hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    erik.hellman@hellsoft.se
                  </a>
                </div>
                <div>
                  <a 
                    href="tel:+46705777477"
                    className="hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    +46 (0)705-777-477
                  </a>
                </div>
              </address>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border/40">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <p>
                © {currentYear} Hellman Software AB. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a 
                  href="https://www.linkedin.com/in/erik-hellman" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  aria-label="Visit LinkedIn profile"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://www.hellsoft.se" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  aria-label="Visit company website"
                >
                  Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
