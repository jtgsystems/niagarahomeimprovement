import type { LucideIcon } from "lucide-react";
import {
  Accessibility,
  Activity,
  Anvil,
  Archive,
  Axe,
  Bath,
  BatteryCharging,
  Blend,
  BrickWall,
  Bug,
  Building2,
  Cable,
  CarFront,
  CircleDot,
  CloudRain,
  Columns3,
  Construction,
  Container,
  Cpu,
  DoorOpen,
  Droplet,
  Droplets,
  Fan,
  Fence,
  Flame,
  Flower2,
  GlassWater,
  Grid3X3,
  Hammer,
  HardDriveDownload,
  HardHat,
  Home,
  Infinity,
  KeyRound,
  Layers,
  LayoutDashboard,
  LayoutGrid,
  PackageOpen,
  PaintBucket,
  Paintbrush,
  Palette,
  PanelLeftClose,
  PanelTop,
  SearchCheck,
  ShieldAlert,
  ShieldCheck,
  Shovel,
  Snowflake,
  Sofa,
  Sparkles,
  Speaker,
  SprayCan,
  Sun,
  Thermometer,
  Trash2,
  TreePine,
  Truck,
  Umbrella,
  UtensilsCrossed,
  Waves,
  Wind,
  Wrench,
  Zap,
} from "lucide-react";

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
    seoDescription:
      "Find trusted bathroom renovation contractors in Niagara. From complete remodels to shower installations, tub replacements, and accessible bathroom conversions. Get listed today.",
    longDescription:
      "Whether you need a complete bathroom overhaul, walk-in shower installation, bathtub replacement, vanity upgrade, or an accessible bathroom conversion, our directory connects you with the best bathroom renovation professionals in the Niagara Region. From St. Catharines to Niagara Falls, Fort Erie to Welland — find licensed, insured bathroom contractors who deliver exceptional craftsmanship. List your bathroom renovation business here to reach thousands of homeowners actively searching for your services across the Niagara Peninsula.",
  },
  {
    title: "Cabling",
    url: "cabling",
    icon: Cable,
    description: "Structured cabling, data, and network wiring.",
    seoTitle: "Cabling & Network Wiring Contractors in Niagara",
    seoDescription:
      "Expert cabling contractors in the Niagara Region. Structured cabling, data wiring, Ethernet installation, and telecommunications. Add your business today.",
    longDescription:
      "Professional cabling and network wiring is essential for modern homes and businesses. Our directory features certified cabling contractors across the Niagara Region who specialize in structured cabling, Cat6/Cat6a Ethernet installation, fiber optic runs, home theater wiring, smart home infrastructure, and commercial telecommunications wiring. Whether you're building new or retrofitting an existing property, find the right cabling professional here. Contractors — list your cabling business to connect with property owners seeking reliable network infrastructure services in Niagara.",
  },
  {
    title: "Ceramic Tile",
    url: "ceramic-tile",
    icon: Grid3X3,
    description: "Ceramic and porcelain tile installation.",
    seoTitle: "Ceramic Tile Installers in Niagara Region",
    seoDescription:
      "Professional ceramic tile installation services in Niagara. Floors, backsplashes, showers, and custom patterns. List your tile business today.",
    longDescription:
      "Transform your space with professional ceramic tile installation. Our Niagara directory features expert tile installers who handle floor tiling, kitchen backsplashes, shower surrounds, bathroom floors, outdoor patios, and custom mosaic work. Serving St. Catharines, Niagara Falls, Welland, Thorold, Grimsby, and all surrounding areas. Tile contractors — add your business to reach homeowners and builders looking for quality tile installation in the Niagara Region.",
  },
  {
    title: "Counter Top",
    url: "counter-top",
    icon: LayoutDashboard,
    description: "Granite, quartz, and marble countertop installation.",
    seoTitle: "Countertop Installation Contractors in Niagara",
    seoDescription:
      "Premium countertop contractors in Niagara. Granite, quartz, marble, and butcher block. Fabrication and installation services. Add your business now.",
    longDescription:
      "Upgrade your kitchen or bathroom with stunning new countertops from verified Niagara contractors. Our directory connects homeowners with fabricators and installers specializing in granite, quartz, marble, solid surface, butcher block, and engineered stone countertops. Get custom template, fabrication, and professional installation from trusted local businesses serving the entire Niagara Peninsula. Countertop businesses — list your services to reach thousands of homeowners planning kitchen and bathroom renovations.",
  },
  {
    title: "Decks",
    url: "decks",
    icon: Fence,
    description: "Custom deck building and repair services.",
    seoTitle: "Deck Builders & Contractors in Niagara Region",
    seoDescription:
      "Top-rated deck builders in Niagara. Custom wood and composite decks, repairs, staining, and railings. List your deck building business today.",
    longDescription:
      "Build your dream outdoor living space with professional deck builders in the Niagara Region. From pressure-treated lumber to premium composite decking, our directory features contractors who design and build custom decks, pergolas, railings, and outdoor structures. Serving homeowners in St. Catharines, Niagara-on-the-Lake, Niagara Falls, Pelham, Lincoln, and beyond. Deck builders — add your business to connect with homeowners ready to invest in outdoor living improvements.",
  },
  {
    title: "Windows & Doors",
    url: "windows-doors",
    icon: DoorOpen,
    description: "Window and door replacement and installation.",
    seoTitle: "Window & Door Installation Contractors in Niagara",
    seoDescription:
      "Expert window and door contractors in Niagara Region. Energy-efficient upgrades, replacements, and custom installations. Get your business listed.",
    longDescription:
      "Improve your home's energy efficiency, security, and curb appeal with professional window and door installation. Our Niagara directory features licensed contractors specializing in vinyl, wood, and fiberglass window replacements, entry doors, patio doors, sliding doors, storm doors, and custom millwork. Energy Star certified options available. Serving all communities across the Niagara Peninsula. Window and door companies — list your business to reach homeowners seeking quality installations.",
  },
  {
    title: "Driveways & Concrete",
    url: "driveways-concrete",
    icon: Truck,
    description: "Concrete, asphalt, and interlock driveway services.",
    seoTitle: "Driveway & Concrete Contractors in Niagara",
    seoDescription:
      "Professional driveway and concrete contractors in Niagara. Poured concrete, asphalt, stamped concrete, and repairs. Add your business today.",
    longDescription:
      "From new driveway installations to concrete repairs, our directory connects Niagara homeowners with experienced concrete and paving professionals. Find contractors who specialize in poured concrete driveways, stamped concrete, exposed aggregate, asphalt paving, concrete walkways, patios, garage floors, and foundation work. Serving the entire Niagara Region including St. Catharines, Niagara Falls, Welland, and surrounding communities. Concrete contractors — grow your business by listing in our directory.",
  },
  {
    title: "Drywall",
    url: "drywall",
    icon: Construction,
    description: "Drywall installation, repair, and finishing.",
    seoTitle: "Drywall Contractors in Niagara Region",
    seoDescription:
      "Expert drywall contractors in Niagara. Installation, taping, mudding, texturing, and repairs. List your drywall business in our directory.",
    longDescription:
      "Professional drywall installation and finishing is critical for any renovation or new build. Our Niagara directory features skilled drywall contractors who provide hanging, taping, mudding, sanding, texturing, patching, and complete drywall finishing services. Whether it's a small repair or a full-home installation, find the right drywall professional here. Drywall contractors — add your business to reach builders and homeowners across the Niagara Region.",
  },
  {
    title: "Electrical",
    url: "electrical",
    icon: Zap,
    description: "Licensed electrical services and installations.",
    seoTitle: "Licensed Electricians in Niagara Region",
    seoDescription:
      "Licensed electricians serving the Niagara Region. Panel upgrades, rewiring, lighting, EV chargers, and emergency service. Get listed today.",
    longDescription:
      "Safety-first electrical work from ESA-licensed electricians in the Niagara Region. Our directory features verified electricians who handle panel upgrades, knob-and-tube replacement, complete rewiring, lighting design, EV charger installation, generator hookups, smart home wiring, and 24/7 emergency electrical service. Serving residential and commercial clients across St. Catharines, Niagara Falls, Welland, Grimsby, and all Niagara communities. Electricians — list your business to connect with clients who need your expertise.",
  },
  {
    title: "Fencing",
    url: "fencing",
    icon: Columns3,
    description: "Fence installation, repair, and custom builds.",
    seoTitle: "Fencing Contractors in Niagara Region",
    seoDescription:
      "Quality fencing contractors in Niagara. Wood, vinyl, chain-link, aluminum, and custom fence installation. Add your fencing business today.",
    longDescription:
      "Secure your property with professional fencing from trusted Niagara contractors. Our directory features fencing companies that install wood privacy fences, vinyl fencing, chain-link, aluminum ornamental fencing, farm fencing, and custom gate systems. Whether you need a backyard privacy fence or commercial perimeter fencing, find the right contractor here. Fencing companies — list your business to reach homeowners and businesses across the Niagara Region.",
  },
  {
    title: "Flooring",
    url: "flooring",
    icon: Layers,
    description: "Hardwood, laminate, vinyl, and carpet installation.",
    seoTitle: "Flooring Contractors in Niagara Region",
    seoDescription:
      "Professional flooring installation in Niagara. Hardwood, laminate, vinyl plank, tile, and carpet. List your flooring business today.",
    longDescription:
      "Update your home with beautiful new floors from professional flooring contractors in Niagara. Our directory features installers who specialize in hardwood flooring, engineered wood, luxury vinyl plank (LVP), laminate, ceramic tile, carpet, and specialty flooring. From subfloor preparation to final finishing, find experienced flooring professionals serving St. Catharines, Niagara Falls, Welland, and all Niagara communities. Flooring businesses — get listed to attract homeowners ready for new floors.",
  },
  {
    title: "Home Audio",
    url: "home-audio",
    icon: Speaker,
    description: "Home audio and entertainment system installation.",
    seoTitle: "Home Audio Installation in Niagara Region",
    seoDescription:
      "Home audio and entertainment system installers in Niagara. Whole-home audio, surround sound, and custom theater rooms. Add your business.",
    longDescription:
      "Elevate your home entertainment with professional audio installation. Our Niagara directory connects homeowners with specialists in whole-home audio systems, surround sound, home theater rooms, outdoor speaker systems, and multi-zone audio setups. From Sonos to custom-built solutions, find the right installer for your project. Audio installation companies — list your services to reach Niagara homeowners investing in entertainment upgrades.",
  },
  {
    title: "Home Automation",
    url: "home-automation",
    icon: Cpu,
    description: "Smart home systems and automation integration.",
    seoTitle: "Home Automation Contractors in Niagara",
    seoDescription:
      "Smart home automation contractors in Niagara. Lighting control, security, thermostats, and whole-home integration. Get your business listed.",
    longDescription:
      "Make your home smarter with professional home automation services in Niagara. Our directory features contractors who install smart lighting controls, automated blinds, smart thermostats, security camera systems, door locks, voice-controlled systems, and complete smart home ecosystems. Serving homeowners and builders across the Niagara Peninsula. Home automation companies — add your business to reach tech-savvy homeowners.",
  },
  {
    title: "HVAC",
    url: "hvac",
    icon: Thermometer,
    description: "Heating, ventilation, and air conditioning services.",
    seoTitle: "HVAC Contractors in Niagara Region",
    seoDescription:
      "Licensed HVAC contractors in Niagara. Furnace installation, AC repair, heat pumps, and ductwork. List your HVAC business in our directory.",
    longDescription:
      "Stay comfortable year-round with professional HVAC services from certified Niagara contractors. Our directory features licensed heating and cooling professionals who provide furnace installation and repair, central air conditioning, heat pump systems, ductwork, HRV/ERV installation, boiler service, and in-floor radiant heating. 24/7 emergency service available from many listed contractors. HVAC businesses — list your company to connect with homeowners needing heating and cooling solutions across the Niagara Region.",
  },
  {
    title: "Insulation",
    url: "insulation",
    icon: ShieldCheck,
    description: "Home insulation and energy efficiency upgrades.",
    seoTitle: "Insulation Contractors in Niagara Region",
    seoDescription:
      "Professional insulation contractors in Niagara. Spray foam, blown-in, batt, and attic insulation. Improve energy efficiency. Get listed.",
    longDescription:
      "Reduce energy costs and improve comfort with professional insulation services in Niagara. Our directory features contractors specializing in spray foam insulation, blown-in cellulose, fiberglass batt, rigid foam board, attic insulation, basement insulation, and complete building envelope upgrades. Many contractors offer energy audits and rebate assistance. Insulation companies — add your business to connect with Niagara homeowners focused on energy efficiency.",
  },
  {
    title: "Interior Design",
    url: "interior-design",
    icon: Paintbrush,
    description: "Professional interior design and space planning.",
    seoTitle: "Interior Designers in Niagara Region",
    seoDescription:
      "Professional interior designers in Niagara. Space planning, color consultation, kitchen design, and full-home styling. List your design business.",
    longDescription:
      "Transform your living spaces with professional interior design services in Niagara. Our directory features qualified interior designers and decorators who offer space planning, color consultation, kitchen and bathroom design, furniture selection, lighting design, and complete home staging. Whether you're renovating or building new, find the right design professional. Interior designers — list your business to reach Niagara homeowners seeking expert design guidance.",
  },
  {
    title: "Irrigation",
    url: "irrigation",
    icon: Droplets,
    description: "Lawn irrigation and sprinkler system services.",
    seoTitle: "Irrigation System Contractors in Niagara",
    seoDescription:
      "Irrigation and sprinkler system contractors in Niagara. Installation, repair, winterization, and smart controllers. Add your business.",
    longDescription:
      "Keep your landscape healthy with professional irrigation systems from Niagara contractors. Our directory features irrigation specialists who install underground sprinkler systems, drip irrigation, smart controllers, rain sensors, and provide seasonal startup and winterization services. Serving residential and commercial properties across the Niagara Region. Irrigation companies — list your business to reach property owners who need professional watering solutions.",
  },
  {
    title: "Kitchen",
    url: "kitchen",
    icon: UtensilsCrossed,
    description: "Kitchen renovation and remodeling services.",
    seoTitle: "Kitchen Renovation Contractors in Niagara",
    seoDescription:
      "Expert kitchen renovation contractors in Niagara. Cabinet refacing, custom kitchens, islands, and complete remodels. Get your business listed.",
    longDescription:
      "Create the kitchen of your dreams with professional renovation contractors in Niagara. Our directory connects homeowners with specialists in complete kitchen remodels, custom cabinetry, cabinet refacing, island construction, countertop installation, backsplash design, and kitchen layout optimization. From budget-friendly updates to luxury custom kitchens, find the right contractor. Kitchen renovation businesses — add your company to reach Niagara homeowners planning their kitchen upgrades.",
  },
  {
    title: "Landscaping",
    url: "landscaping",
    icon: Flower2,
    description: "Landscape design, installation, and maintenance.",
    seoTitle: "Landscaping Contractors in Niagara Region",
    seoDescription:
      "Professional landscaping services in Niagara. Garden design, sod, retaining walls, and seasonal maintenance. List your landscaping business.",
    longDescription:
      "Enhance your property's curb appeal with professional landscaping services in the Niagara Region. Our directory features landscapers and garden designers who provide landscape architecture, garden installation, sod laying, retaining walls, water features, outdoor lighting, seasonal cleanup, and ongoing lawn maintenance. Serving all communities from Grimsby to Fort Erie. Landscaping contractors — list your business to attract homeowners investing in their outdoor spaces.",
  },
  {
    title: "Movers",
    url: "movers",
    icon: PackageOpen,
    description: "Residential and commercial moving services.",
    seoTitle: "Moving Companies in Niagara Region",
    seoDescription:
      "Trusted moving companies in Niagara. Local and long-distance, residential and commercial. Packing and storage. Add your moving business.",
    longDescription:
      "Make your next move stress-free with professional movers in the Niagara Region. Our directory features licensed moving companies that handle residential moves, commercial relocations, long-distance transport, packing services, furniture disassembly, and storage solutions. Fully insured and experienced with moves of all sizes. Moving companies — list your services to reach families and businesses relocating within and around Niagara.",
  },
  {
    title: "New Renovations",
    url: "new-renovations",
    icon: Hammer,
    description: "Complete home renovation and construction services.",
    seoTitle: "Home Renovation Contractors in Niagara",
    seoDescription:
      "Full-service home renovation contractors in Niagara. Additions, basement finishing, whole-home renovations, and custom builds. Get listed.",
    longDescription:
      "Plan your next renovation with experienced contractors in the Niagara Region. Our directory features general contractors and renovation specialists who handle home additions, basement finishing, whole-home renovations, structural modifications, second-story additions, garage conversions, and new custom builds. From design to completion, find the right renovation partner. Renovation contractors — add your business to reach Niagara homeowners with active renovation projects.",
  },
  {
    title: "Painters",
    url: "painters",
    icon: PaintBucket,
    description: "Interior and exterior painting services.",
    seoTitle: "Painting Contractors in Niagara Region",
    seoDescription:
      "Professional painters in Niagara. Interior, exterior, cabinet painting, and specialty finishes. List your painting business today.",
    longDescription:
      "Refresh your home or business with professional painting services in Niagara. Our directory features experienced painters who specialize in interior painting, exterior house painting, cabinet refinishing, deck staining, wallpaper removal, textured finishes, and commercial painting. Using premium paints and proper preparation techniques for lasting results. Painting contractors — list your business to connect with property owners seeking quality paint jobs across the Niagara Region.",
  },
  {
    title: "Pavers",
    url: "pavers",
    icon: SprayCan,
    description: "Interlock paving stone installation and design.",
    seoTitle: "Paver Installation Contractors in Niagara",
    seoDescription:
      "Interlock paver contractors in Niagara. Driveways, patios, walkways, and retaining walls. Professional installation. Add your paver business.",
    longDescription:
      "Upgrade your outdoor surfaces with professional interlocking paver installation in Niagara. Our directory features paving contractors who install interlock driveways, patio pavers, walkway stones, pool decks, retaining walls, and garden borders. Using premium paver brands with proper base preparation and drainage. Paving companies — list your business to reach Niagara homeowners seeking beautiful, durable outdoor surfaces.",
  },
  {
    title: "Plumbing",
    url: "plumbing",
    icon: Droplets,
    description: "Licensed plumbing services and emergency repairs.",
    seoTitle: "Licensed Plumbers in Niagara Region",
    seoDescription:
      "Licensed plumbers serving Niagara. Pipe repair, drain cleaning, water heaters, renovations, and 24/7 emergency service. Get listed today.",
    longDescription:
      "Trust your plumbing to licensed professionals in the Niagara Region. Our directory features certified plumbers who provide drain cleaning, pipe repair and replacement, water heater installation, sump pump service, bathroom and kitchen rough-ins, backflow prevention, and 24/7 emergency plumbing. Serving residential and commercial clients across St. Catharines, Niagara Falls, Welland, and all Niagara communities. Plumbers — add your business to reach customers who need your services.",
  },
  {
    title: "Residential Cleaning",
    url: "residential-cleaning",
    icon: Home,
    description: "Professional home cleaning and maid services.",
    seoTitle: "Residential Cleaning Services in Niagara",
    seoDescription:
      "Professional residential cleaning in Niagara. Regular cleaning, deep cleaning, move-in/move-out, and post-renovation. List your cleaning business.",
    longDescription:
      "Keep your home spotless with professional residential cleaning services in Niagara. Our directory features cleaning companies that offer regular housekeeping, deep cleaning, move-in and move-out cleaning, post-renovation cleanup, window cleaning, and eco-friendly cleaning options. Bonded and insured cleaning professionals serving the entire Niagara Region. Cleaning companies — list your business to connect with homeowners who value a clean home.",
  },
  {
    title: "Roofing",
    url: "roofing",
    icon: Home,
    description: "Roof installation, repair, and maintenance.",
    seoTitle: "Roofing Contractors in Niagara Region",
    seoDescription:
      "Trusted roofing contractors in Niagara. Shingle replacement, flat roofs, metal roofing, repairs, and inspections. Add your roofing business.",
    longDescription:
      "Protect your home with professional roofing services from trusted Niagara contractors. Our directory features roofers who handle asphalt shingle installation, metal roofing, flat roof systems, cedar shakes, roof repairs, gutter installation, soffit and fascia, and emergency leak repairs. Free estimates available from many listed contractors. Roofing companies — list your business to reach homeowners needing reliable roof work across the Niagara Region.",
  },
  {
    title: "Security & Alarms",
    url: "security-systems-alarms",
    icon: ShieldAlert,
    description: "Home security systems and alarm installation.",
    seoTitle: "Security System Installers in Niagara",
    seoDescription:
      "Home security and alarm system installers in Niagara. Cameras, monitoring, smart locks, and fire alarms. Get your security business listed.",
    longDescription:
      "Protect your home and family with professional security systems installed by trusted Niagara contractors. Our directory features security companies that install surveillance cameras, intrusion alarms, smart doorbell cameras, access control systems, fire and carbon monoxide detection, and 24/7 monitoring services. Serving residential and commercial properties. Security companies — add your business to connect with Niagara property owners prioritizing safety.",
  },
  {
    title: "Shelving & Storage",
    url: "shelving-storage",
    icon: Archive,
    description: "Custom shelving and storage solutions.",
    seoTitle: "Custom Shelving & Storage in Niagara",
    seoDescription:
      "Custom shelving and storage solutions in Niagara. Closet organizers, garage storage, pantry systems, and built-ins. List your business.",
    longDescription:
      "Maximize your space with custom shelving and storage solutions from Niagara professionals. Our directory features companies that design and install custom closet systems, garage organization, pantry shelving, laundry room storage, built-in bookshelves, mudroom cubbies, and workshop storage. Serving homeowners across the Niagara Region. Storage solution companies — list your business to reach homeowners looking to organize their spaces.",
  },
  {
    title: "Siding",
    url: "siding",
    icon: PanelLeftClose,
    description: "Exterior siding installation and repair.",
    seoTitle: "Siding Contractors in Niagara Region",
    seoDescription:
      "Professional siding contractors in Niagara. Vinyl, fiber cement, wood, and aluminum siding installation. Add your siding business today.",
    longDescription:
      "Upgrade your home's exterior with professional siding installation from Niagara contractors. Our directory features experienced siding companies that install vinyl siding, James Hardie fiber cement, wood cladding, aluminum siding, insulated siding, and stone veneer. Improve energy efficiency and curb appeal with a new exterior. Siding contractors — list your business to reach Niagara homeowners looking for exterior renovations.",
  },
  {
    title: "Sprinklers",
    url: "sprinklers",
    icon: CloudRain,
    description: "Fire sprinkler systems for homes and businesses.",
    seoTitle: "Sprinkler System Contractors in Niagara",
    seoDescription:
      "Fire sprinkler and lawn sprinkler contractors in Niagara. Installation, maintenance, and inspection services. Get your business listed.",
    longDescription:
      "Keep your property protected and your lawn healthy with professional sprinkler systems in Niagara. Our directory features contractors who install fire suppression sprinkler systems, lawn irrigation sprinklers, commercial fire protection, and residential sprinkler systems compliant with local codes. Sprinkler companies — add your business to connect with property owners across the Niagara Region.",
  },
  {
    title: "Thermal Monitoring",
    url: "thermal-heat-monitoring",
    icon: Activity,
    description: "Thermal imaging and heat monitoring services.",
    seoTitle: "Thermal Imaging & Heat Monitoring in Niagara",
    seoDescription:
      "Thermal imaging and heat monitoring services in Niagara. Energy audits, leak detection, and building diagnostics. List your business.",
    longDescription:
      "Identify hidden issues in your home with professional thermal imaging and heat monitoring services in Niagara. Our directory features companies that provide infrared thermal scans, energy loss detection, moisture and leak identification, electrical hotspot detection, and comprehensive building diagnostics. Thermal imaging companies — list your business to reach Niagara homeowners and property managers focused on energy efficiency and building health.",
  },
  {
    title: "Tree Removal",
    url: "tree-removal",
    icon: TreePine,
    description: "Tree removal, trimming, and stump grinding.",
    seoTitle: "Tree Removal Services in Niagara Region",
    seoDescription:
      "Professional tree removal in Niagara. Tree cutting, trimming, stump grinding, and emergency storm service. Add your tree service business.",
    longDescription:
      "Keep your property safe and beautiful with professional tree services in the Niagara Region. Our directory features certified arborists and tree service companies that handle tree removal, pruning, trimming, stump grinding, lot clearing, emergency storm damage cleanup, and tree health assessments. Fully insured with equipment for trees of any size. Tree service companies — list your business to reach Niagara property owners who need expert tree care.",
  },
  {
    title: "Appliance Repair",
    url: "appliance-repair",
    icon: Wrench,
    description: "Home appliance repair and maintenance services.",
    seoTitle: "Appliance Repair Services in Niagara Region",
    seoDescription:
      "Expert appliance repair in Niagara. Fridge, dishwasher, washer, dryer, oven, and stove repair by certified technicians. List your repair business.",
    longDescription:
      "Keep your home running smoothly with professional appliance repair services in the Niagara Region. Our directory features certified technicians who repair refrigerators, dishwashers, washing machines, dryers, ovens, stoves, microwaves, and range hoods. Same-day and emergency service available from many listed professionals. Whether it's a warranty repair or an older unit, find the right appliance repair technician. Appliance repair businesses — list your services to reach Niagara homeowners needing fast, reliable repairs.",
  },
  {
    title: "Basement Waterproofing",
    url: "basement-waterproofing",
    icon: Waves,
    description: "Basement waterproofing and moisture control.",
    seoTitle: "Basement Waterproofing Contractors in Niagara",
    seoDescription:
      "Basement waterproofing specialists in Niagara. Interior and exterior waterproofing, sump pumps, French drains, and crack repair. Get listed.",
    longDescription:
      "Protect your home's foundation and basement from water damage with professional waterproofing services in the Niagara Region. Our directory features specialized contractors who provide interior and exterior waterproofing, sump pump installation, French drain systems, foundation crack repair, weeping tile replacement, and moisture barrier installation. Niagara's high water table makes waterproofing essential. Waterproofing contractors — list your business to reach homeowners dealing with wet basements.",
  },
  {
    title: "Carpentry",
    url: "carpentry",
    icon: Axe,
    description: "Custom carpentry, framing, and woodworking.",
    seoTitle: "Carpenters & Carpentry Services in Niagara",
    seoDescription:
      "Skilled carpenters in the Niagara Region. Custom cabinetry, framing, trim work, stairs, and furniture building. Add your carpentry business.",
    longDescription:
      "From custom cabinetry to structural framing, professional carpenters in the Niagara Region bring craftsmanship to every project. Our directory features skilled carpenters who specialize in trim and crown molding, custom built-ins, staircase construction, door and window framing, furniture building, deck framing, and heritage woodwork restoration. Whether you need rough carpentry or fine finishing, find the right professional here. Carpenters — list your business to connect with Niagara homeowners and builders.",
  },
  {
    title: "Chimney Services",
    url: "chimney-services",
    icon: Flame,
    description: "Chimney cleaning, repair, and inspection.",
    seoTitle: "Chimney Services & Repair in Niagara Region",
    seoDescription:
      "Chimney cleaning, inspection, and repair services in Niagara. WETT certified professionals for fireplaces, wood stoves, and flue systems. Get listed.",
    longDescription:
      "Maintain your fireplace and chimney safely with professional chimney services in the Niagara Region. Our directory features WETT-certified chimney sweeps and technicians who provide chimney cleaning, annual inspections, flue liner installation, cap and crown repair, tuckpointing, wood stove installation, and fireplace insert service. Regular chimney maintenance prevents house fires and carbon monoxide risks. Chimney service companies — list your business to reach Niagara homeowners with fireplaces and wood stoves.",
  },
  {
    title: "Demolition",
    url: "demolition",
    icon: HardHat,
    description: "Residential and commercial demolition services.",
    seoTitle: "Demolition Contractors in Niagara Region",
    seoDescription:
      "Professional demolition services in Niagara. Interior demo, full structure removal, selective demolition, and debris hauling. List your demo business.",
    longDescription:
      "Clear the way for your next project with professional demolition services in the Niagara Region. Our directory features licensed demolition contractors who handle interior demolition, full structure teardown, selective demolition, concrete removal, pool removal, garage demolition, and complete site clearing with debris hauling. Proper permits and safety protocols followed on every job. Demolition contractors — add your business to reach Niagara property owners planning renovation and redevelopment projects.",
  },
  {
    title: "Excavation",
    url: "excavation",
    icon: Shovel,
    description: "Excavation, grading, and earthwork services.",
    seoTitle: "Excavation Contractors in Niagara Region",
    seoDescription:
      "Professional excavation services in Niagara. Grading, trenching, foundation digging, septic installation, and site prep. Add your excavation business.",
    longDescription:
      "Get your site ready with professional excavation services in the Niagara Region. Our directory features experienced excavation contractors who provide site grading, foundation excavation, trenching for utilities, septic tank installation, drainage solutions, land clearing, and backfill services. From small residential projects to large lot preparations, find the right excavator here. Excavation companies — list your business to connect with builders, homeowners, and developers across Niagara.",
  },
  {
    title: "Foundation Repair",
    url: "foundation-repair",
    icon: Building2,
    description: "Foundation crack repair and structural support.",
    seoTitle: "Foundation Repair Contractors in Niagara",
    seoDescription:
      "Foundation repair specialists in Niagara Region. Crack repair, underpinning, wall stabilization, and structural assessments. Get your business listed.",
    longDescription:
      "Protect your home's structural integrity with professional foundation repair services in the Niagara Region. Our directory features specialized contractors who handle foundation crack repair, wall stabilization, underpinning, bowing wall correction, pier installation, and complete foundation assessments. Niagara's freeze-thaw cycles and clay soils can cause significant foundation issues. Foundation repair companies — list your business to reach homeowners who need expert structural solutions.",
  },
  {
    title: "Garage Doors",
    url: "garage-doors",
    icon: CarFront,
    description: "Garage door installation, repair, and openers.",
    seoTitle: "Garage Door Installation & Repair in Niagara",
    seoDescription:
      "Garage door contractors in Niagara. New installations, repairs, opener replacement, and insulated doors. List your garage door business today.",
    longDescription:
      "Upgrade your home's curb appeal and functionality with professional garage door services in the Niagara Region. Our directory features contractors who install and repair residential garage doors, automatic openers, insulated doors, steel and wood carriage doors, and commercial overhead doors. Emergency repair service available. Garage door companies — add your business to reach Niagara homeowners needing installation, repair, or replacement services.",
  },
  {
    title: "Glass & Mirrors",
    url: "glass-mirrors",
    icon: GlassWater,
    description: "Glass installation, mirrors, and shower enclosures.",
    seoTitle: "Glass & Mirror Services in Niagara Region",
    seoDescription:
      "Glass and mirror contractors in Niagara. Custom mirrors, shower enclosures, glass railings, and window glass replacement. Add your business.",
    longDescription:
      "Add elegance and functionality to your home with professional glass and mirror services in the Niagara Region. Our directory features glass specialists who install custom mirrors, frameless shower enclosures, glass railings, tabletops, backsplashes, replacement window glass, and decorative glass features. Custom cutting and templating for perfect fits. Glass companies — list your services to reach Niagara homeowners and builders looking for quality glass work.",
  },
  {
    title: "Gutters & Eavestrough",
    url: "gutters-eavestrough",
    icon: PanelTop,
    description: "Gutter installation, cleaning, and repair.",
    seoTitle: "Gutter & Eavestrough Contractors in Niagara",
    seoDescription:
      "Gutter and eavestrough services in Niagara. Seamless installation, cleaning, repair, leaf guards, and downspout extensions. Get listed today.",
    longDescription:
      "Protect your home from water damage with professional gutter and eavestrough services in the Niagara Region. Our directory features contractors who install seamless aluminum gutters, copper gutters, gutter guards and leaf protection systems, downspout extensions, and provide seasonal gutter cleaning and repair. Proper drainage prevents foundation damage, fascia rot, and landscape erosion. Gutter companies — list your business to reach Niagara homeowners needing gutter services.",
  },
  {
    title: "Handyman Services",
    url: "handyman-services",
    icon: CircleDot,
    description: "General repairs and household maintenance.",
    seoTitle: "Handyman Services in Niagara Region",
    seoDescription:
      "Reliable handyman services in Niagara. General repairs, furniture assembly, drywall patches, fixture installation, and honey-do lists. Add your business.",
    longDescription:
      "Get those household projects done right with professional handyman services in the Niagara Region. Our directory features skilled handymen who handle general repairs, furniture assembly, drywall patching, fixture and hardware installation, door adjustments, weatherstripping, caulking, minor plumbing and electrical, and all types of home maintenance tasks. No job too small. Handyman businesses — list your services to reach Niagara homeowners with ongoing maintenance needs.",
  },
  {
    title: "Home Inspection",
    url: "home-inspection",
    icon: SearchCheck,
    description: "Pre-purchase and maintenance home inspections.",
    seoTitle: "Home Inspectors in Niagara Region",
    seoDescription:
      "Certified home inspectors in Niagara. Pre-purchase, pre-listing, maintenance inspections, and radon testing. List your inspection business.",
    longDescription:
      "Make informed property decisions with professional home inspection services in the Niagara Region. Our directory features certified home inspectors who provide pre-purchase inspections, pre-listing seller inspections, maintenance inspections, new construction inspections, radon testing, mold assessments, and detailed reporting with photos. Inspectors follow OAHI and InterNACHI standards. Home inspectors — list your business to reach buyers, sellers, and property owners across Niagara.",
  },
  {
    title: "Masonry & Brickwork",
    url: "masonry-brickwork",
    icon: BrickWall,
    description: "Brick, stone, and masonry construction and repair.",
    seoTitle: "Masonry & Brick Contractors in Niagara Region",
    seoDescription:
      "Expert masonry contractors in Niagara. Brick repair, stone veneer, tuckpointing, retaining walls, and chimney rebuild. Add your masonry business.",
    longDescription:
      "Build lasting structures with professional masonry services in the Niagara Region. Our directory features skilled masons who specialize in bricklaying, stone veneer installation, tuckpointing and repointing, retaining wall construction, chimney rebuilds, concrete block work, natural stone patios, and heritage masonry restoration. Quality masonry adds value and beauty to any property. Masonry contractors — list your business to reach Niagara homeowners and builders.",
  },
  {
    title: "Pest Control",
    url: "pest-control",
    icon: Bug,
    description: "Pest and wildlife removal and prevention.",
    seoTitle: "Pest Control Services in Niagara Region",
    seoDescription:
      "Professional pest control in Niagara. Ants, mice, raccoons, wasps, bed bugs, termites, and wildlife removal. Get your pest control business listed.",
    longDescription:
      "Keep your home pest-free with professional pest control services in the Niagara Region. Our directory features licensed pest control companies that handle ant infestations, mouse and rat removal, raccoon and wildlife exclusion, wasp nest removal, bed bug treatment, termite inspection, carpenter ant control, and ongoing preventive pest management programs. Humane wildlife removal options available. Pest control companies — list your services to reach Niagara homeowners dealing with pest problems.",
  },
  {
    title: "Pool & Spa",
    url: "pool-spa",
    icon: Infinity,
    description: "Pool and hot tub installation and maintenance.",
    seoTitle: "Pool & Spa Contractors in Niagara Region",
    seoDescription:
      "Pool and spa contractors in Niagara. Inground pools, hot tub installation, pool maintenance, and seasonal opening/closing. List your pool business.",
    longDescription:
      "Create your backyard oasis with professional pool and spa services in the Niagara Region. Our directory features contractors who build inground pools, install above-ground pools, handle hot tub and spa installation, provide weekly pool maintenance, seasonal opening and closing, liner replacement, equipment repair, and pool deck construction. Pool companies — add your business to reach Niagara homeowners looking to add or maintain pools and spas.",
  },
  {
    title: "Pressure Washing",
    url: "pressure-washing",
    icon: Wind,
    description: "Power washing for driveways, decks, and siding.",
    seoTitle: "Pressure Washing Services in Niagara Region",
    seoDescription:
      "Professional pressure washing in Niagara. Driveway cleaning, deck washing, siding restoration, and commercial power washing. Add your business.",
    longDescription:
      "Restore your property's appearance with professional pressure washing services in the Niagara Region. Our directory features power washing companies that clean driveways, sidewalks, decks, patios, vinyl siding, brick, fences, and commercial properties. Soft wash options available for delicate surfaces. Regular pressure washing prevents mold, mildew, and algae buildup. Pressure washing companies — list your business to reach Niagara homeowners and property managers who want clean, maintained exteriors.",
  },
  {
    title: "Septic Services",
    url: "septic-services",
    icon: Container,
    description: "Septic tank pumping, installation, and repair.",
    seoTitle: "Septic Services in Niagara Region",
    seoDescription:
      "Septic tank services in Niagara. Pumping, installation, inspection, repair, and maintenance for residential and rural properties. Get listed.",
    longDescription:
      "Maintain your septic system properly with professional septic services in the Niagara Region. Our directory features licensed septic contractors who provide tank pumping, new septic system installation, repairs, inspections for real estate transactions, drain field maintenance, and emergency septic service. Essential for rural properties throughout Niagara. Septic companies — list your business to reach property owners who rely on septic systems across the region.",
  },
  {
    title: "Snow Removal",
    url: "snow-removal",
    icon: Snowflake,
    description: "Residential and commercial snow clearing services.",
    seoTitle: "Snow Removal Services in Niagara Region",
    seoDescription:
      "Reliable snow removal in Niagara. Driveway plowing, salting, sidewalk clearing, and seasonal contracts. List your snow removal business.",
    longDescription:
      "Stay safe and accessible through Niagara's harsh winters with professional snow removal services. Our directory features snow removal companies that provide driveway plowing, parking lot clearing, sidewalk shoveling, salting and sanding, roof snow removal, and emergency storm response. Seasonal contracts and per-visit options available. Niagara's lake-effect snow makes reliable snow removal essential. Snow removal companies — list your business to reach homeowners and businesses needing winter maintenance.",
  },
  {
    title: "Solar Energy",
    url: "solar-energy",
    icon: Sun,
    description: "Solar panel installation and energy systems.",
    seoTitle: "Solar Energy Installers in Niagara Region",
    seoDescription:
      "Solar panel installation in Niagara. Residential solar systems, battery storage, grid-tie systems, and energy assessments. Add your solar business.",
    longDescription:
      "Harness clean energy with professional solar installation services in the Niagara Region. Our directory features certified solar installers who design and install residential solar panel systems, battery storage solutions, grid-tie inverters, EV solar charging, and off-grid systems. Many installers help with Ontario micro-FIT and net metering applications. Solar companies — list your business to reach environmentally conscious Niagara homeowners looking to reduce energy costs and their carbon footprint.",
  },
  {
    title: "Waterproofing",
    url: "waterproofing",
    icon: Umbrella,
    description: "Exterior waterproofing and drainage solutions.",
    seoTitle: "Waterproofing Contractors in Niagara Region",
    seoDescription:
      "Waterproofing contractors in Niagara. Exterior membranes, drainage systems, window wells, and water management. Get your business listed.",
    longDescription:
      "Protect your entire property from water intrusion with professional waterproofing services in the Niagara Region. Our directory features contractors who specialize in exterior waterproofing membranes, perimeter drainage systems, window well installation, grading corrections, downspout management, and crawl space encapsulation. Comprehensive water management protects your investment. Waterproofing companies — list your business to reach Niagara homeowners facing water management challenges.",
  },
  {
    title: "General Contractor",
    url: "general-contractor",
    icon: HardDriveDownload,
    description: "Full-service general contracting and project management.",
    seoTitle: "General Contractors in Niagara Region",
    seoDescription:
      "Licensed general contractors in Niagara. Full home renovations, additions, project management, and new builds. List your GC business today.",
    longDescription:
      "From major renovations to complete new builds, general contractors in the Niagara Region manage every aspect of your construction project. Our directory features licensed GCs who handle full home renovations, room additions, second-storey additions, custom home builds, permit coordination, sub-trade management, and project scheduling. A reliable general contractor saves you time, money, and stress. General contractors — list your business to connect with Niagara homeowners planning their next big project.",
  },
  {
    title: "Junk Removal",
    url: "junk-removal",
    icon: Trash2,
    description: "Residential and commercial junk hauling and disposal.",
    seoTitle: "Junk Removal Services in Niagara Region",
    seoDescription:
      "Fast junk removal in Niagara. Furniture, appliances, renovation debris, estate cleanouts, and yard waste hauling. Add your junk removal business.",
    longDescription:
      "Clear out clutter quickly with professional junk removal services in the Niagara Region. Our directory features junk hauling companies that handle furniture removal, appliance disposal, renovation debris, estate cleanouts, hoarding cleanup, yard waste, and e-waste recycling. Most companies offer same-day service and donate or recycle whenever possible. Junk removal businesses — list your services to reach Niagara homeowners, landlords, and property managers who need fast, reliable hauling.",
  },
  {
    title: "Duct Cleaning",
    url: "duct-cleaning",
    icon: Fan,
    description: "Air duct and dryer vent cleaning services.",
    seoTitle: "Duct Cleaning Services in Niagara Region",
    seoDescription:
      "Professional duct cleaning in Niagara. HVAC duct cleaning, dryer vent cleaning, and indoor air quality improvement. Get your business listed.",
    longDescription:
      "Breathe cleaner air with professional duct cleaning services in the Niagara Region. Our directory features NADCA-certified technicians who provide complete HVAC duct cleaning, dryer vent cleaning, furnace cleaning, air handler sanitization, and indoor air quality assessments. Regular duct cleaning reduces allergens, improves airflow efficiency, and lowers energy bills. Niagara's cold winters mean long furnace seasons. Duct cleaning companies — list your business to reach health-conscious Niagara homeowners.",
  },
  {
    title: "Stucco",
    url: "stucco",
    icon: Blend,
    description: "Stucco application, repair, and exterior finishing.",
    seoTitle: "Stucco Contractors in Niagara Region",
    seoDescription:
      "Expert stucco contractors in Niagara. New stucco application, repair, EIFS, parging, and exterior finishing. List your stucco business.",
    longDescription:
      "Give your home a durable and beautiful exterior with professional stucco services in the Niagara Region. Our directory features experienced stucco contractors who handle new stucco application, stucco repair, EIFS (External Insulation Finishing System), parging, acrylic stucco, colour matching, and heritage stucco restoration. Stucco provides excellent weather resistance and curb appeal. Stucco contractors — list your business to reach Niagara homeowners looking for quality exterior finishes.",
  },
  {
    title: "Patio & Sunrooms",
    url: "patio-sunrooms",
    icon: Sofa,
    description: "Patio construction and sunroom additions.",
    seoTitle: "Patio & Sunroom Contractors in Niagara Region",
    seoDescription:
      "Patio and sunroom builders in Niagara. Three-season rooms, four-season sunrooms, screened porches, and patio construction. Add your business.",
    longDescription:
      "Extend your living space with professional patio and sunroom services in the Niagara Region. Our directory features contractors who build three-season rooms, four-season sunrooms, screened-in porches, glass enclosures, patio covers, pergolas, and custom outdoor living spaces. Enjoy Niagara's beautiful seasons from the comfort of a well-built sunroom. Patio and sunroom builders — list your business to reach homeowners looking to add usable space and value to their properties.",
  },
  {
    title: "EV Charger Installation",
    url: "ev-charger-installation",
    icon: BatteryCharging,
    description: "Electric vehicle charger installation and wiring.",
    seoTitle: "EV Charger Installation in Niagara Region",
    seoDescription:
      "EV charger installers in Niagara. Level 2 home charging, Tesla Wall Connector, panel upgrades, and commercial EV stations. Get listed.",
    longDescription:
      "Charge your electric vehicle at home with professional EV charger installation in the Niagara Region. Our directory features licensed electricians who install Level 2 home chargers, Tesla Wall Connectors, ChargePoint units, panel upgrades for EV capacity, and commercial EV charging stations. As EV adoption accelerates across Ontario, reliable home charging is essential. EV charger installers — list your business to reach the growing number of Niagara EV owners.",
  },
  {
    title: "Window Cleaning",
    url: "window-cleaning",
    icon: Sparkles,
    description: "Residential and commercial window cleaning.",
    seoTitle: "Window Cleaning Services in Niagara Region",
    seoDescription:
      "Professional window cleaning in Niagara. Interior and exterior windows, screens, tracks, skylights, and high-rise access. List your window cleaning business.",
    longDescription:
      "Let the light in with professional window cleaning services in the Niagara Region. Our directory features window cleaning companies that handle interior and exterior residential windows, commercial storefronts, screen cleaning, track and sill detailing, skylight cleaning, and hard water stain removal. Many offer seasonal packages and gutter cleaning add-ons. Window cleaning businesses — list your services to reach Niagara homeowners and businesses who want crystal-clear windows year-round.",
  },
  {
    title: "Hot Water Tanks",
    url: "hot-water-tanks",
    icon: Droplet,
    description: "Water heater installation, repair, and replacement.",
    seoTitle: "Hot Water Tank Services in Niagara Region",
    seoDescription:
      "Hot water tank contractors in Niagara. Tank and tankless installation, repair, rental programs, and emergency service. Add your business.",
    longDescription:
      "Never run out of hot water with professional water heater services in the Niagara Region. Our directory features licensed contractors who install and repair traditional tank water heaters, tankless on-demand systems, heat pump water heaters, and power-vent units. Rental and purchase options available. Emergency same-day replacement when your tank fails. Hot water tank companies — list your business to reach Niagara homeowners needing reliable hot water solutions.",
  },
  {
    title: "Locksmith",
    url: "locksmith",
    icon: KeyRound,
    description: "Lock installation, rekeying, and emergency lockout.",
    seoTitle: "Locksmith Services in Niagara Region",
    seoDescription:
      "24/7 locksmith services in Niagara. Emergency lockouts, lock changes, deadbolt installation, key cutting, and smart locks. Get your business listed.",
    longDescription:
      "Secure your home with professional locksmith services in the Niagara Region. Our directory features licensed locksmiths who provide emergency lockout service, lock installation and rekeying, deadbolt upgrades, smart lock installation, key duplication, safe opening, and master key systems. 24/7 emergency service available from many listed professionals. Locksmiths — list your business to reach Niagara homeowners and property managers who need reliable security solutions.",
  },
  {
    title: "Home Staging",
    url: "home-staging",
    icon: Palette,
    description: "Professional home staging for real estate sales.",
    seoTitle: "Home Staging Services in Niagara Region",
    seoDescription:
      "Professional home staging in Niagara. Furniture rental, styling, photography prep, and staging consultations for faster sales. List your staging business.",
    longDescription:
      "Sell your home faster and for more money with professional home staging services in the Niagara Region. Our directory features staging companies that provide full-home staging with furniture rental, partial staging, vacant property staging, staging consultations, decluttering services, and pre-photography preparation. Staged homes in Niagara sell significantly faster than unstaged properties. Home staging companies — list your business to reach sellers and real estate agents across the Niagara region.",
  },
  {
    title: "Cabinet Refinishing",
    url: "cabinet-refinishing",
    icon: LayoutGrid,
    description: "Cabinet painting, refinishing, and refacing.",
    seoTitle: "Cabinet Refinishing Services in Niagara Region",
    seoDescription:
      "Cabinet refinishing in Niagara. Kitchen cabinet painting, refacing, staining, hardware upgrades, and bathroom vanity refinishing. Add your business.",
    longDescription:
      "Transform your kitchen without a full renovation through professional cabinet refinishing services in the Niagara Region. Our directory features skilled contractors who provide cabinet painting, spray finishing, wood staining, cabinet refacing with new doors, hardware replacement, and bathroom vanity refinishing. Cabinet refinishing costs a fraction of full replacement while delivering a dramatic transformation. Cabinet refinishing businesses — list your services to reach budget-conscious Niagara homeowners wanting a kitchen refresh.",
  },
  {
    title: "Accessibility & Mobility",
    url: "accessibility-mobility",
    icon: Accessibility,
    description: "Home accessibility modifications and mobility aids.",
    seoTitle: "Accessibility & Mobility Contractors in Niagara",
    seoDescription:
      "Accessibility contractors in Niagara. Wheelchair ramps, stairlifts, grab bars, walk-in tubs, and aging-in-place modifications. Get listed.",
    longDescription:
      "Make your home safe and accessible for every stage of life with professional accessibility services in the Niagara Region. Our directory features contractors who install wheelchair ramps, stairlifts, platform lifts, grab bars, walk-in bathtubs, roll-in showers, door widening, threshold removal, and complete aging-in-place renovations. With an aging population in Niagara, accessibility modifications are increasingly essential. Accessibility contractors — list your business to reach families making their homes safer for loved ones.",
  },
  {
    title: "Welding",
    url: "welding",
    icon: Anvil,
    description: "Residential and commercial welding and fabrication.",
    seoTitle: "Welding Services in Niagara Region",
    seoDescription:
      "Professional welding in Niagara. Custom railings, structural steel, ornamental iron, gate fabrication, and mobile welding. List your welding business.",
    longDescription:
      "Get custom metalwork built to last with professional welding services in the Niagara Region. Our directory features certified welders who provide custom railing fabrication, structural steel work, ornamental iron, gate and fence fabrication, fire pit construction, trailer repair, and mobile welding services. MIG, TIG, and stick welding for residential and commercial applications. Welding businesses — list your services to reach Niagara homeowners and contractors needing quality metal fabrication.",
  },
];
