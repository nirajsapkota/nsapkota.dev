import { Button } from "@/components/ui/button";

const services = [
  {
    name: "Galahad",
    description: "There is nothing noble in being superior to your fellow man.",
    icon: "🛰️",
    url: "https://galahad.nsapkota.dev",
  },
  {
    name: "Plex",
    description: "Where we're going, we don't need roads.",
    icon: "🎬",
    url: "https://plex.nsapkota.dev",
  },
  {
    name: "Photos",
    description: "A camera is a save button for the mind's eye.",
    icon: "📸",
    url: "https://photos.nsapkota.dev",
  },
  {
    name: "Drive",
    description: "Backup not found.",
    icon: "💾",
    url: "https://drive.nsapkota.dev",
  },
  {
    name: "Files",
    description: "I don't need a hard disk in my computer if I can get to the server faster",
    icon: "📁",
    url: "https://files.nsapkota.dev",
  },
];

export default function Services() {
  return (
    <section id="services" className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Services
        </h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          My digital garden 🌱
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.name}
            className="relative overflow-hidden rounded-lg border bg-background p-8"
          >
            <div className="flex items-center gap-4">
              <h3 className="font-bold">
                {service.icon} {service.name}
              </h3>
            </div>
            <p className="mt-2 text-muted-foreground text-sm md:text-md">
              {service.description}
            </p>
            <Button className="mt-4" asChild>
              <a href={service.url} target="_blank" rel="noopener noreferrer">
                Launch
              </a>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
