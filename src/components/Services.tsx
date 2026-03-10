import { Card, CardHeader, CardTitle } from "./ui/card";
import {
  Bath,
  Cable,
  Grid3X3,
  LayoutDashboard,
  Fence,
  DoorOpen,
  Truck,
  Construction,
  Zap,
  Columns3,
  Layers,
  Speaker,
  Cpu,
  Thermometer,
  ShieldCheck,
  Paintbrush,
  UtensilsCrossed,
  Flower2,
  PackageOpen,
  Hammer,
  PaintBucket,
  Droplets,
  SprayCan,
  Home,
  ShieldAlert,
  Archive,
  PanelLeftClose,
  CloudRain,
  Activity,
  TreePine,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ServiceItem {
  title: string;
  url: string;
  icon: LucideIcon;
  description: string;
  seoTitle: string;
  seoDescription: string;
  longDescription: string;
}

export const serviceList: ServiceItem[] = [
  {
    title: "Bathroom",
    url: "bathroom",
    icon: Bath,
    description: "Full bathroom renovation and remodeling services.",
    seoTitle: "Bathroom Renovation Contractors in Niagara Region",
    seoDescription: "Find trusted bathroom renovation contractors in Niagara. From complete remodels to shower installations, tub replacements, and accessible bathroom conversions. Get listed today.",
    longDescription: "Whether you need a complete bathroom overhaul, walk-in shower installation, bathtub replacement, vanity upgrade, or an accessible bathroom conversion, our directory connects you with the best bathroom renovation professionals in the Niagara Region. From St. Catharines to Niagara Falls, Fort Erie to Welland — find licensed, insured bathroom contractors who deliver exceptional craftsmanship. List your bathroom renovation business here to reach thousands of homeowners actively searching for your services across the Niagara Peninsula."
  },
  {
    title: "Cabling",
    url: "cabling",
    icon: Cable,
    description: "Structured cabling, data, and network wiring.",
    seoTitle: "Cabling & Network Wiring Contractors in Niagara",
    seoDescription: "Expert cabling contractors in the Niagara Region. Structured cabling, data wiring, Ethernet installation, and telecommunications. Add your business today.",
    longDescription: "Professional cabling and network wiring is essential for modern homes and businesses. Our directory features certified cabling contractors across the Niagara Region who specialize in structured cabling, Cat6/Cat6a Ethernet installation, fiber optic runs, home theater wiring, smart home infrastructure, and commercial telecommunications wiring. Whether you're building new or retrofitting an existing property, find the right cabling professional here. Contractors — list your cabling business to connect with property owners seeking reliable network infrastructure services in Niagara."
  },
  {
    title: "Ceramic Tile",
    url: "ceramic-tile",
    icon: Grid3X3,
    description: "Ceramic and porcelain tile installation.",
    seoTitle: "Ceramic Tile Installers in Niagara Region",
    seoDescription: "Professional ceramic tile installation services in Niagara. Floors, backsplashes, showers, and custom patterns. List your tile business today.",
    longDescription: "Transform your space with professional ceramic tile installation. Our Niagara directory features expert tile installers who handle floor tiling, kitchen backsplashes, shower surrounds, bathroom floors, outdoor patios, and custom mosaic work. Serving St. Catharines, Niagara Falls, Welland, Thorold, Grimsby, and all surrounding areas. Tile contractors — add your business to reach homeowners and builders looking for quality tile installation in the Niagara Region."
  },
  {
    title: "Counter Top",
    url: "counter-top",
    icon: LayoutDashboard,
    description: "Granite, quartz, and marble countertop installation.",
    seoTitle: "Countertop Installation Contractors in Niagara",
    seoDescription: "Premium countertop contractors in Niagara. Granite, quartz, marble, and butcher block. Fabrication and installation services. Add your business now.",
    longDescription: "Upgrade your kitchen or bathroom with stunning new countertops from verified Niagara contractors. Our directory connects homeowners with fabricators and installers specializing in granite, quartz, marble, solid surface, butcher block, and engineered stone countertops. Get custom template, fabrication, and professional installation from trusted local businesses serving the entire Niagara Peninsula. Countertop businesses — list your services to reach thousands of homeowners planning kitchen and bathroom renovations."
  },
  {
    title: "Decks",
    url: "decks",
    icon: Fence,
    description: "Custom deck building and repair services.",
    seoTitle: "Deck Builders & Contractors in Niagara Region",
    seoDescription: "Top-rated deck builders in Niagara. Custom wood and composite decks, repairs, staining, and railings. List your deck building business today.",
    longDescription: "Build your dream outdoor living space with professional deck builders in the Niagara Region. From pressure-treated lumber to premium composite decking, our directory features contractors who design and build custom decks, pergolas, railings, and outdoor structures. Serving homeowners in St. Catharines, Niagara-on-the-Lake, Niagara Falls, Pelham, Lincoln, and beyond. Deck builders — add your business to connect with homeowners ready to invest in outdoor living improvements."
  },
  {
    title: "Windows & Doors",
    url: "windows-doors",
    icon: DoorOpen,
    description: "Window and door replacement and installation.",
    seoTitle: "Window & Door Installation Contractors in Niagara",
    seoDescription: "Expert window and door contractors in Niagara Region. Energy-efficient upgrades, replacements, and custom installations. Get your business listed.",
    longDescription: "Improve your home's energy efficiency, security, and curb appeal with professional window and door installation. Our Niagara directory features licensed contractors specializing in vinyl, wood, and fiberglass window replacements, entry doors, patio doors, sliding doors, storm doors, and custom millwork. Energy Star certified options available. Serving all communities across the Niagara Peninsula. Window and door companies — list your business to reach homeowners seeking quality installations."
  },
  {
    title: "Driveways & Concrete",
    url: "driveways-concrete",
    icon: Truck,
    description: "Concrete, asphalt, and interlock driveway services.",
    seoTitle: "Driveway & Concrete Contractors in Niagara",
    seoDescription: "Professional driveway and concrete contractors in Niagara. Poured concrete, asphalt, stamped concrete, and repairs. Add your business today.",
    longDescription: "From new driveway installations to concrete repairs, our directory connects Niagara homeowners with experienced concrete and paving professionals. Find contractors who specialize in poured concrete driveways, stamped concrete, exposed aggregate, asphalt paving, concrete walkways, patios, garage floors, and foundation work. Serving the entire Niagara Region including St. Catharines, Niagara Falls, Welland, and surrounding communities. Concrete contractors — grow your business by listing in our directory."
  },
  {
    title: "Drywall",
    url: "drywall",
    icon: Construction,
    description: "Drywall installation, repair, and finishing.",
    seoTitle: "Drywall Contractors in Niagara Region",
    seoDescription: "Expert drywall contractors in Niagara. Installation, taping, mudding, texturing, and repairs. List your drywall business in our directory.",
    longDescription: "Professional drywall installation and finishing is critical for any renovation or new build. Our Niagara directory features skilled drywall contractors who provide hanging, taping, mudding, sanding, texturing, patching, and complete drywall finishing services. Whether it's a small repair or a full-home installation, find the right drywall professional here. Drywall contractors — add your business to reach builders and homeowners across the Niagara Region."
  },
  {
    title: "Electrical",
    url: "electrical",
    icon: Zap,
    description: "Licensed electrical services and installations.",
    seoTitle: "Licensed Electricians in Niagara Region",
    seoDescription: "Licensed electricians serving the Niagara Region. Panel upgrades, rewiring, lighting, EV chargers, and emergency service. Get listed today.",
    longDescription: "Safety-first electrical work from ESA-licensed electricians in the Niagara Region. Our directory features verified electricians who handle panel upgrades, knob-and-tube replacement, complete rewiring, lighting design, EV charger installation, generator hookups, smart home wiring, and 24/7 emergency electrical service. Serving residential and commercial clients across St. Catharines, Niagara Falls, Welland, Grimsby, and all Niagara communities. Electricians — list your business to connect with clients who need your expertise."
  },
  {
    title: "Fencing",
    url: "fencing",
    icon: Columns3,
    description: "Fence installation, repair, and custom builds.",
    seoTitle: "Fencing Contractors in Niagara Region",
    seoDescription: "Quality fencing contractors in Niagara. Wood, vinyl, chain-link, aluminum, and custom fence installation. Add your fencing business today.",
    longDescription: "Secure your property with professional fencing from trusted Niagara contractors. Our directory features fencing companies that install wood privacy fences, vinyl fencing, chain-link, aluminum ornamental fencing, farm fencing, and custom gate systems. Whether you need a backyard privacy fence or commercial perimeter fencing, find the right contractor here. Fencing companies — list your business to reach homeowners and businesses across the Niagara Region."
  },
  {
    title: "Flooring",
    url: "flooring",
    icon: Layers,
    description: "Hardwood, laminate, vinyl, and carpet installation.",
    seoTitle: "Flooring Contractors in Niagara Region",
    seoDescription: "Professional flooring installation in Niagara. Hardwood, laminate, vinyl plank, tile, and carpet. List your flooring business today.",
    longDescription: "Update your home with beautiful new floors from professional flooring contractors in Niagara. Our directory features installers who specialize in hardwood flooring, engineered wood, luxury vinyl plank (LVP), laminate, ceramic tile, carpet, and specialty flooring. From subfloor preparation to final finishing, find experienced flooring professionals serving St. Catharines, Niagara Falls, Welland, and all Niagara communities. Flooring businesses — get listed to attract homeowners ready for new floors."
  },
  {
    title: "Home Audio",
    url: "home-audio",
    icon: Speaker,
    description: "Home audio and entertainment system installation.",
    seoTitle: "Home Audio Installation in Niagara Region",
    seoDescription: "Home audio and entertainment system installers in Niagara. Whole-home audio, surround sound, and custom theater rooms. Add your business.",
    longDescription: "Elevate your home entertainment with professional audio installation. Our Niagara directory connects homeowners with specialists in whole-home audio systems, surround sound, home theater rooms, outdoor speaker systems, and multi-zone audio setups. From Sonos to custom-built solutions, find the right installer for your project. Audio installation companies — list your services to reach Niagara homeowners investing in entertainment upgrades."
  },
  {
    title: "Home Automation",
    url: "home-automation",
    icon: Cpu,
    description: "Smart home systems and automation integration.",
    seoTitle: "Home Automation Contractors in Niagara",
    seoDescription: "Smart home automation contractors in Niagara. Lighting control, security, thermostats, and whole-home integration. Get your business listed.",
    longDescription: "Make your home smarter with professional home automation services in Niagara. Our directory features contractors who install smart lighting controls, automated blinds, smart thermostats, security camera systems, door locks, voice-controlled systems, and complete smart home ecosystems. Serving homeowners and builders across the Niagara Peninsula. Home automation companies — add your business to reach tech-savvy homeowners."
  },
  {
    title: "HVAC",
    url: "hvac",
    icon: Thermometer,
    description: "Heating, ventilation, and air conditioning services.",
    seoTitle: "HVAC Contractors in Niagara Region",
    seoDescription: "Licensed HVAC contractors in Niagara. Furnace installation, AC repair, heat pumps, and ductwork. List your HVAC business in our directory.",
    longDescription: "Stay comfortable year-round with professional HVAC services from certified Niagara contractors. Our directory features licensed heating and cooling professionals who provide furnace installation and repair, central air conditioning, heat pump systems, ductwork, HRV/ERV installation, boiler service, and in-floor radiant heating. 24/7 emergency service available from many listed contractors. HVAC businesses — list your company to connect with homeowners needing heating and cooling solutions across the Niagara Region."
  },
  {
    title: "Insulation",
    url: "insulation",
    icon: ShieldCheck,
    description: "Home insulation and energy efficiency upgrades.",
    seoTitle: "Insulation Contractors in Niagara Region",
    seoDescription: "Professional insulation contractors in Niagara. Spray foam, blown-in, batt, and attic insulation. Improve energy efficiency. Get listed.",
    longDescription: "Reduce energy costs and improve comfort with professional insulation services in Niagara. Our directory features contractors specializing in spray foam insulation, blown-in cellulose, fiberglass batt, rigid foam board, attic insulation, basement insulation, and complete building envelope upgrades. Many contractors offer energy audits and rebate assistance. Insulation companies — add your business to connect with Niagara homeowners focused on energy efficiency."
  },
  {
    title: "Interior Design",
    url: "interior-design",
    icon: Paintbrush,
    description: "Professional interior design and space planning.",
    seoTitle: "Interior Designers in Niagara Region",
    seoDescription: "Professional interior designers in Niagara. Space planning, color consultation, kitchen design, and full-home styling. List your design business.",
    longDescription: "Transform your living spaces with professional interior design services in Niagara. Our directory features qualified interior designers and decorators who offer space planning, color consultation, kitchen and bathroom design, furniture selection, lighting design, and complete home staging. Whether you're renovating or building new, find the right design professional. Interior designers — list your business to reach Niagara homeowners seeking expert design guidance."
  },
  {
    title: "Irrigation",
    url: "irrigation",
    icon: Droplets,
    description: "Lawn irrigation and sprinkler system services.",
    seoTitle: "Irrigation System Contractors in Niagara",
    seoDescription: "Irrigation and sprinkler system contractors in Niagara. Installation, repair, winterization, and smart controllers. Add your business.",
    longDescription: "Keep your landscape healthy with professional irrigation systems from Niagara contractors. Our directory features irrigation specialists who install underground sprinkler systems, drip irrigation, smart controllers, rain sensors, and provide seasonal startup and winterization services. Serving residential and commercial properties across the Niagara Region. Irrigation companies — list your business to reach property owners who need professional watering solutions."
  },
  {
    title: "Kitchen",
    url: "kitchen",
    icon: UtensilsCrossed,
    description: "Kitchen renovation and remodeling services.",
    seoTitle: "Kitchen Renovation Contractors in Niagara",
    seoDescription: "Expert kitchen renovation contractors in Niagara. Cabinet refacing, custom kitchens, islands, and complete remodels. Get your business listed.",
    longDescription: "Create the kitchen of your dreams with professional renovation contractors in Niagara. Our directory connects homeowners with specialists in complete kitchen remodels, custom cabinetry, cabinet refacing, island construction, countertop installation, backsplash design, and kitchen layout optimization. From budget-friendly updates to luxury custom kitchens, find the right contractor. Kitchen renovation businesses — add your company to reach Niagara homeowners planning their kitchen upgrades."
  },
  {
    title: "Landscaping",
    url: "landscaping",
    icon: Flower2,
    description: "Landscape design, installation, and maintenance.",
    seoTitle: "Landscaping Contractors in Niagara Region",
    seoDescription: "Professional landscaping services in Niagara. Garden design, sod, retaining walls, and seasonal maintenance. List your landscaping business.",
    longDescription: "Enhance your property's curb appeal with professional landscaping services in the Niagara Region. Our directory features landscapers and garden designers who provide landscape architecture, garden installation, sod laying, retaining walls, water features, outdoor lighting, seasonal cleanup, and ongoing lawn maintenance. Serving all communities from Grimsby to Fort Erie. Landscaping contractors — list your business to attract homeowners investing in their outdoor spaces."
  },
  {
    title: "Movers",
    url: "movers",
    icon: PackageOpen,
    description: "Residential and commercial moving services.",
    seoTitle: "Moving Companies in Niagara Region",
    seoDescription: "Trusted moving companies in Niagara. Local and long-distance, residential and commercial. Packing and storage. Add your moving business.",
    longDescription: "Make your next move stress-free with professional movers in the Niagara Region. Our directory features licensed moving companies that handle residential moves, commercial relocations, long-distance transport, packing services, furniture disassembly, and storage solutions. Fully insured and experienced with moves of all sizes. Moving companies — list your services to reach families and businesses relocating within and around Niagara."
  },
  {
    title: "New Renovations",
    url: "new-renovations",
    icon: Hammer,
    description: "Complete home renovation and construction services.",
    seoTitle: "Home Renovation Contractors in Niagara",
    seoDescription: "Full-service home renovation contractors in Niagara. Additions, basement finishing, whole-home renovations, and custom builds. Get listed.",
    longDescription: "Plan your next renovation with experienced contractors in the Niagara Region. Our directory features general contractors and renovation specialists who handle home additions, basement finishing, whole-home renovations, structural modifications, second-story additions, garage conversions, and new custom builds. From design to completion, find the right renovation partner. Renovation contractors — add your business to reach Niagara homeowners with active renovation projects."
  },
  {
    title: "Painters",
    url: "painters",
    icon: PaintBucket,
    description: "Interior and exterior painting services.",
    seoTitle: "Painting Contractors in Niagara Region",
    seoDescription: "Professional painters in Niagara. Interior, exterior, cabinet painting, and specialty finishes. List your painting business today.",
    longDescription: "Refresh your home or business with professional painting services in Niagara. Our directory features experienced painters who specialize in interior painting, exterior house painting, cabinet refinishing, deck staining, wallpaper removal, textured finishes, and commercial painting. Using premium paints and proper preparation techniques for lasting results. Painting contractors — list your business to connect with property owners seeking quality paint jobs across the Niagara Region."
  },
  {
    title: "Pavers",
    url: "pavers",
    icon: SprayCan,
    description: "Interlock paving stone installation and design.",
    seoTitle: "Paver Installation Contractors in Niagara",
    seoDescription: "Interlock paver contractors in Niagara. Driveways, patios, walkways, and retaining walls. Professional installation. Add your paver business.",
    longDescription: "Upgrade your outdoor surfaces with professional interlocking paver installation in Niagara. Our directory features paving contractors who install interlock driveways, patio pavers, walkway stones, pool decks, retaining walls, and garden borders. Using premium paver brands with proper base preparation and drainage. Paving companies — list your business to reach Niagara homeowners seeking beautiful, durable outdoor surfaces."
  },
  {
    title: "Plumbing",
    url: "plumbing",
    icon: Droplets,
    description: "Licensed plumbing services and emergency repairs.",
    seoTitle: "Licensed Plumbers in Niagara Region",
    seoDescription: "Licensed plumbers serving Niagara. Pipe repair, drain cleaning, water heaters, renovations, and 24/7 emergency service. Get listed today.",
    longDescription: "Trust your plumbing to licensed professionals in the Niagara Region. Our directory features certified plumbers who provide drain cleaning, pipe repair and replacement, water heater installation, sump pump service, bathroom and kitchen rough-ins, backflow prevention, and 24/7 emergency plumbing. Serving residential and commercial clients across St. Catharines, Niagara Falls, Welland, and all Niagara communities. Plumbers — add your business to reach customers who need your services."
  },
  {
    title: "Residential Cleaning",
    url: "residential-cleaning",
    icon: Home,
    description: "Professional home cleaning and maid services.",
    seoTitle: "Residential Cleaning Services in Niagara",
    seoDescription: "Professional residential cleaning in Niagara. Regular cleaning, deep cleaning, move-in/move-out, and post-renovation. List your cleaning business.",
    longDescription: "Keep your home spotless with professional residential cleaning services in Niagara. Our directory features cleaning companies that offer regular housekeeping, deep cleaning, move-in and move-out cleaning, post-renovation cleanup, window cleaning, and eco-friendly cleaning options. Bonded and insured cleaning professionals serving the entire Niagara Region. Cleaning companies — list your business to connect with homeowners who value a clean home."
  },
  {
    title: "Roofing",
    url: "roofing",
    icon: Home,
    description: "Roof installation, repair, and maintenance.",
    seoTitle: "Roofing Contractors in Niagara Region",
    seoDescription: "Trusted roofing contractors in Niagara. Shingle replacement, flat roofs, metal roofing, repairs, and inspections. Add your roofing business.",
    longDescription: "Protect your home with professional roofing services from trusted Niagara contractors. Our directory features roofers who handle asphalt shingle installation, metal roofing, flat roof systems, cedar shakes, roof repairs, gutter installation, soffit and fascia, and emergency leak repairs. Free estimates available from many listed contractors. Roofing companies — list your business to reach homeowners needing reliable roof work across the Niagara Region."
  },
  {
    title: "Security & Alarms",
    url: "security-systems-alarms",
    icon: ShieldAlert,
    description: "Home security systems and alarm installation.",
    seoTitle: "Security System Installers in Niagara",
    seoDescription: "Home security and alarm system installers in Niagara. Cameras, monitoring, smart locks, and fire alarms. Get your security business listed.",
    longDescription: "Protect your home and family with professional security systems installed by trusted Niagara contractors. Our directory features security companies that install surveillance cameras, intrusion alarms, smart doorbell cameras, access control systems, fire and carbon monoxide detection, and 24/7 monitoring services. Serving residential and commercial properties. Security companies — add your business to connect with Niagara property owners prioritizing safety."
  },
  {
    title: "Shelving & Storage",
    url: "shelving-storage",
    icon: Archive,
    description: "Custom shelving and storage solutions.",
    seoTitle: "Custom Shelving & Storage in Niagara",
    seoDescription: "Custom shelving and storage solutions in Niagara. Closet organizers, garage storage, pantry systems, and built-ins. List your business.",
    longDescription: "Maximize your space with custom shelving and storage solutions from Niagara professionals. Our directory features companies that design and install custom closet systems, garage organization, pantry shelving, laundry room storage, built-in bookshelves, mudroom cubbies, and workshop storage. Serving homeowners across the Niagara Region. Storage solution companies — list your business to reach homeowners looking to organize their spaces."
  },
  {
    title: "Siding",
    url: "siding",
    icon: PanelLeftClose,
    description: "Exterior siding installation and repair.",
    seoTitle: "Siding Contractors in Niagara Region",
    seoDescription: "Professional siding contractors in Niagara. Vinyl, fiber cement, wood, and aluminum siding installation. Add your siding business today.",
    longDescription: "Upgrade your home's exterior with professional siding installation from Niagara contractors. Our directory features experienced siding companies that install vinyl siding, James Hardie fiber cement, wood cladding, aluminum siding, insulated siding, and stone veneer. Improve energy efficiency and curb appeal with a new exterior. Siding contractors — list your business to reach Niagara homeowners looking for exterior renovations."
  },
  {
    title: "Sprinklers",
    url: "sprinklers",
    icon: CloudRain,
    description: "Fire sprinkler systems for homes and businesses.",
    seoTitle: "Sprinkler System Contractors in Niagara",
    seoDescription: "Fire sprinkler and lawn sprinkler contractors in Niagara. Installation, maintenance, and inspection services. Get your business listed.",
    longDescription: "Keep your property protected and your lawn healthy with professional sprinkler systems in Niagara. Our directory features contractors who install fire suppression sprinkler systems, lawn irrigation sprinklers, commercial fire protection, and residential sprinkler systems compliant with local codes. Sprinkler companies — add your business to connect with property owners across the Niagara Region."
  },
  {
    title: "Thermal Monitoring",
    url: "thermal-heat-monitoring",
    icon: Activity,
    description: "Thermal imaging and heat monitoring services.",
    seoTitle: "Thermal Imaging & Heat Monitoring in Niagara",
    seoDescription: "Thermal imaging and heat monitoring services in Niagara. Energy audits, leak detection, and building diagnostics. List your business.",
    longDescription: "Identify hidden issues in your home with professional thermal imaging and heat monitoring services in Niagara. Our directory features companies that provide infrared thermal scans, energy loss detection, moisture and leak identification, electrical hotspot detection, and comprehensive building diagnostics. Thermal imaging companies — list your business to reach Niagara homeowners and property managers focused on energy efficiency and building health."
  },
  {
    title: "Tree Removal",
    url: "tree-removal",
    icon: TreePine,
    description: "Tree removal, trimming, and stump grinding.",
    seoTitle: "Tree Removal Services in Niagara Region",
    seoDescription: "Professional tree removal in Niagara. Tree cutting, trimming, stump grinding, and emergency storm service. Add your tree service business.",
    longDescription: "Keep your property safe and beautiful with professional tree services in the Niagara Region. Our directory features certified arborists and tree service companies that handle tree removal, pruning, trimming, stump grinding, lot clearing, emergency storm damage cleanup, and tree health assessments. Fully insured with equipment for trees of any size. Tree service companies — list your business to reach Niagara property owners who need expert tree care."
  },
];

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
