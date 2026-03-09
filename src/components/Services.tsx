import { Card, CardHeader, CardTitle } from "./ui/card";

interface ServiceProps {
  title: string;
  url: string;
}

const serviceList: ServiceProps[] = [
  { title: "Bathroom", url: "bathroom" },
  { title: "Cabling", url: "cabling" },
  { title: "Ceramic Tile", url: "ceramic-tile" },
  { title: "Counter Top", url: "counter-top" },
  { title: "Decks", url: "decks" },
  { title: "Windows / Doors", url: "windows-doors" },
  { title: "Driveways and Concrete", url: "driveways-concrete" },
  { title: "Drywall", url: "drywall" },
  { title: "Electrical", url: "electrical" },
  { title: "Fencing", url: "fencing" },
  { title: "Flooring", url: "flooring" },
  { title: "Home Audio", url: "home-audio" },
  { title: "Home Automation", url: "home-automation" },
  { title: "HVAC", url: "hvac" },
  { title: "Insulation", url: "insulation" },
  { title: "Interior Design", url: "interior-design" },
  { title: "Irrigation", url: "irrigation" },
  { title: "Kitchen", url: "kitchen" },
  { title: "Landscaping", url: "landscaping" },
  { title: "Movers", url: "movers" },
  { title: "New Renovations", url: "new-renovations" },
  { title: "Painters", url: "painters" },
  { title: "Pavers", url: "pavers" },
  { title: "Plumbing", url: "plumbing" },
  { title: "Residential Cleaning", url: "residential-cleaning" },
  { title: "Roofing", url: "roofing" },
  { title: "Security Systems and Alarms", url: "security-systems-alarms" },
  { title: "Shelving and Storage", url: "shelving-storage" },
  { title: "Siding", url: "siding" },
  { title: "Sprinklers", url: "sprinklers" },
  { title: "Thermal Heat Monitoring", url: "thermal-heat-monitoring" },
  { title: "Tree Removal", url: "tree-removal" },
];

export const Services = () => {
  return (
    <section id="categories" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Browse by{" "}
            </span>
            Category
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8">
            Select a specialty to view our verified local partners across the
            Niagara region.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceList.map(({ title, url }: ServiceProps) => (
              <a href={`/${url}`} key={title} className="block group">
                <Card className="hover:border-primary/50 transition-colors shadow-sm group-hover:shadow-md cursor-pointer h-full">
                  <CardHeader className="space-y-1 p-4">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {title}
                    </CardTitle>
                  </CardHeader>
                </Card>
              </a>
            ))}
          </div>
        </div>

        <img
          src="/media/backgrounds/container-bg.webp"
          className="w-[450px] md:w-[600px] object-cover rounded-xl shadow-xl shadow-primary/20"
          alt="Home Improvement Contractor Working"
        />
      </div>
    </section>
  );
};
