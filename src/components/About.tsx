import { Award, BookOpen, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const highlights = [
  {
    icon: Award,
    title: "Årets Frilansare 2023",
    description: "Awarded Freelance Contractor of the Year at Developer Days 2023",
  },
  {
    icon: BookOpen,
    title: "Published Author",
    description: "Author of two advanced Android development books published by Apress and Wiley",
  },
  {
    icon: Users,
    title: "Google Developer Expert",
    description: "Recognized expert by Google in Android development",
  },
];

export function About() {
  return (
    <section 
      id="about" 
      className="py-20 md:py-32 bg-gradient-to-b from-muted/20 to-background"
      aria-labelledby="about-heading"
    >
      <div className="container px-4">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 id="about-heading" className="text-3xl md:text-5xl font-bold">
              About Erik Hellman
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Founder & Lead Software Engineer
            </p>
          </div>

          {/* Bio */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I am a seasoned Software Engineer with an extensive 25-year professional tenure, 
              specialising in a wide array of programming languages, technologies, platforms, and tools. 
              Presently, I am engaged as a freelance software engineer and technical lead, with a 
              concentrated expertise in mobile application development, embedded systems, and Internet 
              of Things (IoT) solutions.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              One of my main areas of expertise is Android and AOSP development, from smartphones, 
              wearables, to automotive and custom embedded solutions. I have deep and extensive knowledge 
              on how to work with custom AOSP based solutions, as well as how the internals of Android OS 
              can be utilised on a system level.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I also bring a wealth of experience in roles such as engineering manager, team leader, 
              and software architect, particularly in the realm of large-scale project management. 
              Additionally, my career encompasses a dynamic range of activities beyond consultancy. 
              I am actively involved in the tech community, delivering tech talks, leading workshops, 
              organising meetups, and participating in international conferences.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                  <CardContent className="pt-6 text-center space-y-4">
                    <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="h-7 w-7 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="font-semibold text-lg">{highlight.title}</h3>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Notable Projects */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center">Notable Contributions</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2">
                <CardContent className="pt-6 space-y-3">
                  <h4 className="font-semibold text-lg">Öppna Skolplattformen</h4>
                  <p className="text-sm text-muted-foreground">
                    Founder and developer of the open-source alternative app for Stockholm public schools, 
                    helping parents access their children's school information. Featured in Wired Magazine 
                    in August 2021.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="pt-6 space-y-3">
                  <h4 className="font-semibold text-lg">Patent Holder</h4>
                  <p className="text-sm text-muted-foreground">
                    Patent application (US20130198264) for a distributed system for synchronized music 
                    playback, demonstrating innovation in real-time distributed systems.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
