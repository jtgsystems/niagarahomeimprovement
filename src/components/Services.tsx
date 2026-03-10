import { serviceList } from "./service-data";
import { Card, CardHeader, CardTitle } from "./ui/card";

export const Services = () => {
  return (
    <section id="categories" className="container py-24 sm:py-32">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Browse by{" "}
          </span>
          Category
        </h2>
        <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
          Select a specialty to view our verified local partners across the
          Niagara region.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {serviceList.map(({ title, url, icon: Icon }) => (
          <a href={`/${url}`} key={title} className="block group">
            <Card className="hover:border-primary/50 transition-all duration-200 shadow-sm group-hover:shadow-lg group-hover:-translate-y-1 cursor-pointer h-full border-border/50">
              <CardHeader className="flex flex-row items-center gap-3 p-4">
                <div className="w-10 h-10 min-w-[2.5rem] rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <CardTitle className="text-sm font-semibold whitespace-nowrap group-hover:text-primary transition-colors">
                  {title}
                </CardTitle>
              </CardHeader>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
};
