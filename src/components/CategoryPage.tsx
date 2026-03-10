import { useParams, Link } from "react-router-dom";
import { serviceList } from "./Services";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";
import { buttonVariants } from "./ui/button";
import { ArrowLeft, MapPin, CheckCircle, Phone } from "lucide-react";

export const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = serviceList.find((s) => s.url === slug);

  if (!category) {
    return (
      <>
        <Navbar />
        <section className="container py-32 text-center">
          <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The category you are looking for does not exist.
          </p>
          <Link
            to="/"
            className={buttonVariants({ variant: "default" })}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </section>
        <Footer />
      </>
    );
  }

  const Icon = category.icon;

  return (
    <>
      <Navbar />

      {/* Hero Banner */}
      <section className="bg-primary/5 border-b">
        <div className="container py-16 md:py-24">
          <Link
            to="/"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to All Categories
          </Link>
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 min-w-[4rem] rounded-2xl bg-primary/10 flex items-center justify-center">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-3">
                {category.seoTitle}
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl">
                {category.seoDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left: Content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">
                About {category.title} Services in Niagara
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {category.longDescription}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">
                Why List Your {category.title} Business?
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Reach thousands of Niagara homeowners actively searching",
                  "Boost your local SEO with a dedicated listing page",
                  "Verified professional badge for trust and credibility",
                  "Priority placement in category search results",
                  "Direct phone and website link from your listing",
                  "Monthly analytics showing your listing performance",
                ].map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-3 p-3 rounded-lg bg-muted/50"
                  >
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 min-w-[1.25rem]" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">
                Areas We Serve
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "St. Catharines",
                  "Niagara Falls",
                  "Welland",
                  "Thorold",
                  "Niagara-on-the-Lake",
                  "Fort Erie",
                  "Grimsby",
                  "Lincoln",
                  "Pelham",
                  "Port Colborne",
                  "Wainfleet",
                  "West Lincoln",
                ].map((city) => (
                  <Link
                    key={city}
                    to={`/city/${city.toLowerCase().replace(/[\s.]+/g, "-")}`}
                    className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                  >
                    <MapPin className="w-3 h-3 inline mr-1" />
                    {city}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Sidebar CTA */}
          <div className="space-y-6">
            <div className="border rounded-xl p-6 bg-card shadow-sm">
              <h3 className="text-xl font-bold mb-3">
                Add Your {category.title} Business
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                Join the Niagara Home Improvement directory and connect with
                homeowners looking for {category.title.toLowerCase()} services
                in the Niagara Region.
              </p>
              <a
                href="/signup"
                className={`w-full ${buttonVariants({ variant: "default", size: "lg" })}`}
              >
                Get Listed Today
              </a>
            </div>

            <div className="border rounded-xl p-6 bg-card shadow-sm">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" />
                Need Help?
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Looking for a {category.title.toLowerCase()} contractor? Browse
                our listings or contact us for a recommendation.
              </p>
              <a
                href="/#categories"
                className={`w-full ${buttonVariants({ variant: "outline" })}`}
              >
                Browse All Categories
              </a>
            </div>
          </div>
        </div>
      </section>

      <ScrollToTop />
      <Footer />
    </>
  );
};
