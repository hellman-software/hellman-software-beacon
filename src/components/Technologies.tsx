import { Bluetooth, Layers, Video } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const technologies = [
  {
    icon: Bluetooth,
    name: "Bluetooth LE",
    description:
      "Extensive expertise in Bluetooth Low Energy implementation across mobile and embedded platforms. Expert in advanced protocol design, optimization for power consumption, and solving complex connectivity challenges for consumer and industrial products.",
    experience: [
      "Husqvarna Automower - Bluetooth communication architecture",
      "Bosch eBike Platform - Advanced BLE integration",
      "Multiple wearable and IoT device integrations",
    ],
  },
  {
    icon: Layers,
    name: "Android AOSP",
    description:
      "Deep system-level knowledge of Android Open Source Project from smartphones to automotive and custom embedded solutions. Expert in platform customization, framework modifications, and building production-ready custom Android distributions.",
    experience: [
      "KTM Android Automotive for motorbikes",
      "Sony Mobile - Android software architecture",
      "Custom AOSP solutions for various industries",
    ],
  },
  {
    icon: Video,
    name: "WebRTC",
    description:
      "Comprehensive experience with Web Real-Time Communication for video/audio streaming and data channels. Contributed to Google's WebRTC developer documentation and implemented WebRTC solutions in production applications.",
    experience: [
      "Google LLC - WebRTC developer relations contractor",
      "KTM - Advanced WebRTC streaming integration",
      "Real-time communication systems development",
    ],
  },
];

export function Technologies() {
  return (
    <section 
      id="technologies" 
      className="py-20 md:py-32"
      aria-labelledby="technologies-heading"
    >
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 id="technologies-heading" className="text-3xl md:text-5xl font-bold">
            Key Technologies
          </h2>
          <p className="text-lg text-muted-foreground">
            Specialized expertise in critical technologies that power modern connected devices and applications.
          </p>
        </div>

        <div className="space-y-12 max-w-5xl mx-auto">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <article
                key={index}
                className="group relative rounded-2xl border-2 border-border bg-card p-6 md:p-8 hover:border-primary/50 hover:shadow-xl transition-all duration-300"
              >
                {/* Icon and Title */}
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                    <Icon className="h-8 w-8 text-white" aria-hidden="true" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-2xl md:text-3xl font-bold">{tech.name}</h3>
                    <Badge variant="secondary" className="font-mono text-xs">
                      Expert Level
                    </Badge>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {tech.description}
                </p>

                {/* Experience */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    Notable Experience
                  </h4>
                  <ul className="space-y-2" aria-label={`${tech.name} experience`}>
                    {tech.experience.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" aria-hidden="true" />
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
