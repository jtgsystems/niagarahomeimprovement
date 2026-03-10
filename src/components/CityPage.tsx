import { useParams, Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";
import { buttonVariants } from "./ui/button";
import { serviceList } from "./Services";
import { ArrowLeft, MapPin, Users, Building, Star } from "lucide-react";

interface CityData {
  name: string;
  slug: string;
  population: string;
  description: string;
  longDescription: string;
  seoTitle: string;
  seoDescription: string;
  highlights: string[];
}

export const cityList: CityData[] = [
  {
    name: "St. Catharines",
    slug: "st-catharines",
    population: "136,803",
    seoTitle: "Home Improvement Contractors in St. Catharines, ON",
    seoDescription: "Find trusted home improvement contractors in St. Catharines, Ontario. Renovations, repairs, and specialized services from verified local professionals.",
    description: "The largest city in the Niagara Region and a hub for residential renovation and new construction.",
    longDescription: "St. Catharines is the largest city in the Niagara Region with a thriving residential market and growing demand for quality home improvement services. Known as 'The Garden City', St. Catharines features a diverse mix of heritage homes, mid-century bungalows, and modern new builds — each requiring specialized renovation and maintenance expertise. From downtown character home restorations to suburban deck builds and kitchen renovations, homeowners in St. Catharines rely on skilled local tradespeople. Whether you're a contractor looking to grow your client base or a homeowner searching for the right professional, our directory connects you with verified specialists across every trade category.",
    highlights: ["Garden City with diverse housing stock", "Brock University area developments", "Downtown heritage home restorations", "Growing suburban new-build market"],
  },
  {
    name: "Niagara Falls",
    slug: "niagara-falls",
    population: "94,415",
    seoTitle: "Home Improvement Contractors in Niagara Falls, ON",
    seoDescription: "Top-rated home improvement contractors in Niagara Falls, Ontario. Kitchen renovations, bathroom remodels, roofing, and more. Get listed today.",
    description: "World-famous tourism destination with a strong residential renovation market.",
    longDescription: "Niagara Falls is known worldwide for its spectacular waterfalls, but it's also home to a robust residential community with significant demand for home improvement services. The city features established neighborhoods like Stamford, Chippawa, and Willoughby, where homeowners continuously invest in renovations, energy upgrades, and property improvements. With a mix of older homes needing modernization and newer developments requiring finishing touches, Niagara Falls offers tremendous opportunity for skilled contractors. List your business in our directory to reach homeowners across Niagara Falls who are actively searching for reliable tradespeople.",
    highlights: ["Tourism economy driving property investment", "Stamford and Chippawa neighborhoods", "Energy-efficient home upgrade demand", "Strong rental property renovation market"],
  },
  {
    name: "Welland",
    slug: "welland",
    population: "55,750",
    seoTitle: "Home Improvement Contractors in Welland, ON",
    seoDescription: "Professional home improvement services in Welland, Ontario. Find verified contractors for renovations, repairs, and new construction projects.",
    description: "A growing city with affordable housing and strong demand for renovation services.",
    longDescription: "Welland is experiencing a renaissance as homebuyers discover its affordable housing market and charming canal-side neighborhoods. This growth has created strong demand for home improvement services — from updating older properties to building additions and finishing basements. The city's mix of Victorian-era homes, post-war bungalows, and new subdivisions means contractors with diverse skills are always in demand. Welland homeowners are investing in kitchen renovations, bathroom upgrades, energy-efficient windows, and curb appeal improvements. Contractors — list your Welland business to connect with this growing market.",
    highlights: ["Affordable housing attracting buyers", "Canal district revitalization", "Strong demand for modernization", "Growing new subdivision market"],
  },
  {
    name: "Thorold",
    slug: "thorold",
    population: "23,816",
    seoTitle: "Home Improvement Contractors in Thorold, ON",
    seoDescription: "Find skilled home improvement contractors in Thorold, Ontario. Renovations, landscaping, roofing, and specialty trades. Add your business today.",
    description: "A community with rich heritage homes and new developments along the canal.",
    longDescription: "Thorold offers a unique blend of heritage architecture and modern development, creating diverse opportunities for home improvement professionals. Located along the Welland Canal, the city features historic stone homes, established family neighborhoods, and growing new residential areas near Brock University. Homeowners in Thorold invest in heritage restorations, energy-efficient upgrades, deck and patio builds, and complete home renovations. The proximity to Brock University also drives demand for rental property improvements. Contractors — join our directory to reach Thorold homeowners and property investors.",
    highlights: ["Heritage stone home restorations", "Brock University rental market", "Welland Canal corridor development", "Family-oriented renovation demand"],
  },
  {
    name: "Niagara-on-the-Lake",
    slug: "niagara-on-the-lake",
    population: "19,088",
    seoTitle: "Home Improvement Contractors in Niagara-on-the-Lake, ON",
    seoDescription: "Premium home improvement contractors in Niagara-on-the-Lake. Heritage restorations, luxury renovations, and estate maintenance. Get listed.",
    description: "A prestigious community known for heritage homes, wineries, and luxury properties.",
    longDescription: "Niagara-on-the-Lake is one of Ontario's most prestigious communities, known for its Shaw Festival, award-winning wineries, and beautifully preserved heritage architecture. Homeowners here demand premium craftsmanship for heritage restorations, luxury kitchen and bathroom renovations, estate landscaping, custom millwork, and high-end finishes. The community also features growing vineyard estates and rural properties requiring specialized services. Contractors who serve Niagara-on-the-Lake should showcase their expertise in heritage-sensitive work, premium materials, and meticulous attention to detail. List your business to reach this discerning clientele.",
    highlights: ["Heritage district preservation projects", "Luxury estate renovations", "Winery and vineyard properties", "Premium craftsmanship demand"],
  },
  {
    name: "Fort Erie",
    slug: "fort-erie",
    population: "33,406",
    seoTitle: "Home Improvement Contractors in Fort Erie, ON",
    seoDescription: "Trusted home improvement contractors in Fort Erie, Ontario. Waterfront properties, renovations, and seasonal home maintenance. List your business.",
    description: "A border town with waterfront properties and growing residential investment.",
    longDescription: "Fort Erie sits at the southern tip of the Niagara Region along the Niagara River and Lake Erie shoreline, making it a destination for waterfront property owners who need specialized home improvement services. From crystal beach cottages being converted to year-round homes, to established neighborhoods undergoing renovations, Fort Erie offers strong demand for skilled contractors. Waterfront-specific needs include erosion protection, moisture management, deck building, and energy-efficient window installation. The town's affordable real estate also attracts buyers who invest in renovations upon purchase. Contractors — add your business to serve the Fort Erie market.",
    highlights: ["Waterfront and lakeside properties", "Crystal Beach cottage conversions", "Cross-border real estate investment", "Seasonal to year-round home upgrades"],
  },
  {
    name: "Grimsby",
    slug: "grimsby",
    population: "28,883",
    seoTitle: "Home Improvement Contractors in Grimsby, ON",
    seoDescription: "Quality home improvement contractors in Grimsby, Ontario. Escarpment properties, renovations, and custom builds. Add your contracting business.",
    description: "An upscale community along the Niagara Escarpment with premium housing.",
    longDescription: "Grimsby is one of the most desirable communities in the Niagara Region, nestled between the Niagara Escarpment and Lake Ontario. The town features upscale residential properties, escarpment-view custom homes, established neighborhoods, and growing new developments. Homeowners in Grimsby invest significantly in premium renovations, custom landscaping, outdoor living spaces, kitchen and bathroom upgrades, and energy-efficient home improvements. The proximity to Hamilton and Burlington also attracts commuters who purchase and renovate homes here. Contractors — list your Grimsby services to reach homeowners investing in their properties.",
    highlights: ["Escarpment-view custom homes", "Premium renovation budgets", "GTA commuter market", "Upscale outdoor living projects"],
  },
  {
    name: "Lincoln",
    slug: "lincoln",
    population: "25,921",
    seoTitle: "Home Improvement Contractors in Lincoln, ON",
    seoDescription: "Home improvement professionals in Lincoln, Ontario (Beamsville, Vineland, Jordan). Renovations, agricultural builds, and residential services.",
    description: "A wine country community including Beamsville, Vineland, and Jordan.",
    longDescription: "The Town of Lincoln encompasses the charming communities of Beamsville, Vineland, and Jordan — the heart of Niagara's wine country. This growing area features a mix of newer suburban homes, rural properties, vineyard estates, and village heritage homes, all requiring diverse home improvement services. Lincoln homeowners invest in kitchen renovations, custom outdoor spaces, agricultural building maintenance, energy upgrades, and property expansions. The town's growth as a residential destination means contractors can build long-term client relationships. List your business to serve Lincoln's expanding homeowner community.",
    highlights: ["Wine country estate properties", "Beamsville suburban growth", "Rural and agricultural buildings", "Heritage village restorations"],
  },
  {
    name: "Pelham",
    slug: "pelham",
    population: "18,192",
    seoTitle: "Home Improvement Contractors in Pelham, ON",
    seoDescription: "Home improvement contractors in Pelham, Ontario (Fonthill, Fenwick). Residential renovations, custom builds, and outdoor living. Get listed.",
    description: "A family-friendly town including Fonthill and Fenwick with strong residential demand.",
    longDescription: "Pelham, encompassing the communities of Fonthill and Fenwick, is known as one of Niagara's most family-friendly towns with a strong sense of community and desirable residential neighborhoods. Homeowners in Pelham take pride in their properties and regularly invest in renovations, landscaping, deck builds, basement finishing, and energy-efficient upgrades. The town's mix of established homes and new developments creates consistent demand for skilled contractors. From the Short Hills area to downtown Fonthill, there are renovation projects of every scale. Contractors — add your Pelham business to our directory and connect with engaged homeowners.",
    highlights: ["Family-oriented renovation projects", "Fonthill downtown area upgrades", "Short Hills premium properties", "Strong community investment in homes"],
  },
  {
    name: "Port Colborne",
    slug: "port-colborne",
    population: "19,956",
    seoTitle: "Home Improvement Contractors in Port Colborne, ON",
    seoDescription: "Skilled home improvement contractors in Port Colborne, ON. Waterfront renovations, residential repairs, and commercial services. List your business.",
    description: "A lakeside city with canal heritage and growing residential interest.",
    longDescription: "Port Colborne sits along Lake Erie and the southern terminus of the Welland Canal, offering a unique waterfront lifestyle that attracts homebuyers and renovation investors. The city features charming downtown heritage buildings, established residential neighborhoods, waterfront properties, and rural acreages — all generating demand for skilled contractors. Port Colborne homeowners invest in waterfront deck builds, heritage restorations, energy-efficient upgrades, and complete home renovations. The city's affordable real estate and growing tourism sector create additional opportunities. Contractors — list your Port Colborne services to tap into this market.",
    highlights: ["Lake Erie waterfront properties", "Welland Canal heritage area", "Affordable renovation opportunities", "Growing tourism-related demand"],
  },
  {
    name: "Wainfleet",
    slug: "wainfleet",
    population: "6,534",
    seoTitle: "Home Improvement Contractors in Wainfleet, ON",
    seoDescription: "Home improvement and rural property contractors in Wainfleet, Ontario. Agricultural buildings, renovations, and lakeside properties. Add your business.",
    description: "A rural township with agricultural properties and lakeside cottages.",
    longDescription: "Wainfleet is a picturesque rural township in the Niagara Region featuring agricultural properties, lakeside cottages along Long Beach, and peaceful country homes. Homeowners and property owners in Wainfleet need contractors who understand rural building requirements, agricultural structure maintenance, cottage renovations, well and septic systems, and country property landscaping. The township's growing appeal as a rural retreat from urban centers creates demand for modernization projects. Contractors experienced with rural and agricultural work — list your services to connect with Wainfleet property owners.",
    highlights: ["Agricultural building maintenance", "Long Beach cottage renovations", "Rural property modernization", "Country home energy upgrades"],
  },
  {
    name: "West Lincoln",
    slug: "west-lincoln",
    population: "15,608",
    seoTitle: "Home Improvement Contractors in West Lincoln, ON",
    seoDescription: "Home improvement contractors in West Lincoln, ON (Smithville). Rural renovations, new builds, and agricultural services. Get your business listed.",
    description: "A growing rural municipality centered around Smithville with new development.",
    longDescription: "West Lincoln, centered around the growing community of Smithville, is one of the Niagara Region's fastest-developing municipalities. New residential subdivisions, rural estate lots, and agricultural properties all create strong demand for home improvement services. Homeowners in West Lincoln invest in new home finishing, custom builds, rural property fencing, landscaping, energy-efficient upgrades, and agricultural building maintenance. The municipality's growth trajectory means contractors can establish early relationships in an expanding market. List your West Lincoln business to reach homeowners and builders in this thriving community.",
    highlights: ["Smithville subdivision boom", "Rural estate custom builds", "Agricultural property services", "Fast-growing residential market"],
  },
];

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
                <span className="text-sm font-medium">Pop. {city.population}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/50">
                <Building className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Niagara Region, Ontario</span>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">
                About {city.name}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {city.longDescription}
              </p>
            </div>

            {/* Highlights */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Local Highlights</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {city.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
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
              <h2 className="text-2xl font-bold mb-4">
                Other Niagara Cities
              </h2>
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
                professionals. Join the Niagara Home Improvement directory today.
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
