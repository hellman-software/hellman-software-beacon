import { Smartphone, Cpu, Network } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const expertiseAreas = [
  {
    icon: Smartphone,
    title: "Mobile Application Development",
    description:
      "Expert development of native mobile applications for Android and iOS. Specialized in Android AOSP customization, from smartphones and wearables to automotive and embedded solutions. Deep knowledge of custom AOSP implementations and Android OS internals at the system level.",
    highlights: ["Android & AOSP", "iOS Development", "Kotlin Multiplatform", "Wearables & Automotive"],
  },
  {
    icon: Cpu,
    title: "Embedded Systems",
    description:
      "Comprehensive embedded systems development expertise spanning from low-level firmware to high-level applications. Experience with custom hardware integration, real-time systems, and optimized performance for resource-constrained environments.",
    highlights: ["Embedded C/C++", "Real-time Systems", "Hardware Integration", "Custom Firmware"],
  },
  {
    icon: Network,
    title: "Internet of Things (IoT)",
    description:
      "End-to-end IoT solutions including device firmware, cloud connectivity, and mobile applications. Expert in designing scalable, secure IoT architectures for consumer and industrial applications with focus on reliability and user experience.",
    highlights: ["IoT Architecture", "Cloud Integration", "Device Management", "Sensor Networks"],
  },
];

export function Expertise() {
  return (
    <section 
      id="expertise" 
      className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/20"
      aria-labelledby="expertise-heading"
    >
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 id="expertise-heading" className="text-3xl md:text-5xl font-bold">
            Core Expertise Areas
          </h2>
          <p className="text-lg text-muted-foreground">
            Specialized software engineering across mobile, embedded, and IoT domains with 
            proven track record delivering solutions for industry leaders.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 border-2 hover:border-primary/50"
              >
                <CardHeader className="space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="h-7 w-7 text-primary" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-2xl">{area.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base leading-relaxed">
                    {area.description}
                  </CardDescription>
                  <ul className="space-y-2" aria-label={`${area.title} highlights`}>
                    {area.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
