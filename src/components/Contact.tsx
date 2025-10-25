import { Mail, Phone, Linkedin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "erik.hellman@hellsoft.se",
    href: "mailto:erik.hellman@hellsoft.se",
    ariaLabel: "Send email to Erik Hellman",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+46 (0)705-777-477",
    href: "tel:+46705777477",
    ariaLabel: "Call Erik Hellman",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/erik-hellman",
    href: "https://www.linkedin.com/in/erik-hellman",
    ariaLabel: "Visit Erik Hellman's LinkedIn profile",
  },
  {
    icon: Globe,
    label: "Website",
    value: "www.hellsoft.se",
    href: "https://www.hellsoft.se",
    ariaLabel: "Visit Hellman Software website",
  },
];

export function Contact() {
  return (
    <section 
      id="contact" 
      className="py-20 md:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 id="contact-heading" className="text-3xl md:text-5xl font-bold">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Looking for expertise in mobile, embedded, or IoT development? 
              Let's discuss how I can help bring your project to life.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card 
                  key={index}
                  className="group hover:border-primary/50 hover:shadow-lg transition-all duration-300 border-2"
                >
                  <CardContent className="pt-6">
                    <a 
                      href={method.href}
                      className="flex items-start gap-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring rounded-lg"
                      aria-label={method.ariaLabel}
                      target={method.label === "LinkedIn" || method.label === "Website" ? "_blank" : undefined}
                      rel={method.label === "LinkedIn" || method.label === "Website" ? "noopener noreferrer" : undefined}
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-muted-foreground mb-1">
                          {method.label}
                        </div>
                        <div className="font-medium group-hover:text-primary transition-colors break-all">
                          {method.value}
                        </div>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center space-y-6">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 border-2 border-primary/20">
              <h3 className="text-2xl font-bold mb-3">
                Ready to Start Your Project?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Whether you need a technical consultation, team leadership, or hands-on development, 
                I'm here to help build exceptional software solutions.
              </p>
              <Button 
                size="lg" 
                className="gap-2 shadow-lg shadow-primary/20"
                asChild
              >
                <a href="mailto:erik.hellman@hellsoft.se">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Send a Message
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
