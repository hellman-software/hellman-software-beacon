import { Button } from "@/components/ui/button";
import { ArrowRight, Code2 } from "lucide-react";

export function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Code2 className="h-4 w-4 text-primary" aria-hidden="true" />
            <span className="text-sm font-medium">
              25+ Years of Software Engineering Excellence
            </span>
          </div>

          {/* Main heading */}
          <h1 
            id="hero-heading"
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
          >
            Expert Solutions in{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_8s_linear_infinite]">
              Mobile, Embedded & IoT
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Hellman Software AB specializes in cutting-edge software engineering with deep expertise 
            in Android AOSP, Bluetooth LE, WebRTC, and IoT solutions for industry-leading companies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="gap-2 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
              asChild
            >
              <a href="#contact">
                Get in Touch
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              asChild
            >
              <a href="#expertise">
                View Expertise
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 md:gap-12 pt-12 max-w-2xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">25+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Add this to tailwind.config.ts animations:
  'gradient': 'gradient 8s linear infinite',
And to keyframes:
  'gradient': {
    '0%, 100%': { 'background-position': '0% 50%' },
    '50%': { 'background-position': '100% 50%' },
  },
*/
