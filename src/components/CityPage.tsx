import { ArrowLeft, Building, MapPin, Star, Users } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { cityList } from "./city-data";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { ScrollToTop } from "./ScrollToTop";
import { serviceList } from "./service-data";
import { buttonVariants } from "./ui/button";

export const CityPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const city = cityList.find((c) => c.slug === slug);

  if (!city) {
    return (
      <>
        <Navbar />
        <section className="container py-32 text-center">
          <h1 className="text-4xl font-bold mb-4">City Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The city page you are looking for does not exist.
          </p>
          <Link to="/" className={buttonVariants({ variant: "default" })}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-primary/5 border-b">
        <div className="container py-16 md:py-24">
          <Link
            to="/"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Home
          </Link>
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 min-w-[3.5rem] rounded-2xl bg-primary/10 flex items-center justify-center">
              <MapPin className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-3">
                {city.seoTitle}
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl">
                {city.seoDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            {/* City Info */}
            <div className="flex gap-6 flex-wrap">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/50">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">
                  Pop. {city.population}
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/50">
                <Building className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">
                  Niagara Region, Ontario
                </span>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">About {city.name}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {city.longDescription}
              </p>
            </div>

            {/* Highlights */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Local Highlights</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {city.highlights.map((h) => (
                  <div
                    key={h}
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/50"
                  >
                    <Star className="w-4 h-4 text-primary min-w-[1rem]" />
                    <span className="text-sm">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories Available */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Services Available in {city.name}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {serviceList.map(({ title, url, icon: Icon }) => (
                  <Link
                    key={url}
                    to={`/${url}`}
                    className="flex items-center gap-2 p-3 rounded-lg border hover:border-primary/50 hover:bg-primary/5 transition-all text-sm"
                  >
                    <Icon className="w-4 h-4 text-primary min-w-[1rem]" />
                    <span className="whitespace-nowrap">{title}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Other Cities */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Other Niagara Cities</h2>
              <div className="flex flex-wrap gap-2">
                {cityList
                  .filter((c) => c.slug !== city.slug)
                  .map((c) => (
                    <Link
                      key={c.slug}
                      to={`/city/${c.slug}`}
                      className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                    >
                      <MapPin className="w-3 h-3 inline mr-1" />
                      {c.name}
                    </Link>
                  ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="border rounded-xl p-6 bg-card shadow-sm">
              <h3 className="text-xl font-bold mb-3">
                List Your Business in {city.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                Reach homeowners in {city.name} looking for home improvement
                professionals. Join the Niagara Home Improvement directory
                today.
              </p>
              <a
                href="/signup"
                className={`w-full ${buttonVariants({ variant: "default", size: "lg" })}`}
              >
                Get Listed Today
              </a>
            </div>

            <div className="border rounded-xl p-6 bg-card shadow-sm">
              <h3 className="text-lg font-bold mb-3">
                Why {city.name} Contractors Choose Us
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  Local SEO boost for {city.name} searches
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  Verified professional badging
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  Direct leads from homeowners
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  Monthly performance analytics
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ScrollToTop />
      <Footer />
    </>
  );
};
