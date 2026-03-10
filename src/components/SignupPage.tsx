import {
  ArrowLeft,
  BarChart3,
  CheckCircle,
  Globe,
  MapPin,
  Phone,
  Shield,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { ScrollToTop } from "./ScrollToTop";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export const SignupPage = () => {
  return (
    <>
      <Navbar />

      {/* Hero Banner */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5" />
        <div className="container relative py-20 md:py-28">
          <Link
            to="/"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Home
          </Link>

          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              JOIN 200+ NIAGARA CONTRACTORS
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Get Your Business{" "}
              <span className="bg-gradient-to-r from-[#60A5FA] to-[#1E3A8A] text-transparent bg-clip-text">
                In Front of Homeowners
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mb-8">
              List your contracting business on Niagara's #1 home improvement
              directory. Reach thousands of homeowners actively searching for
              your services.
            </p>
            <a href="#signup-form">
              <Button
                size="lg"
                className="text-lg px-8 py-6 rounded-full shadow-lg font-bold"
              >
                Get Started Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="border-b bg-muted/30">
        <div className="container py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Users, label: "200+ Listed Contractors" },
              { icon: Star, label: "Trusted Since 2018" },
              { icon: TrendingUp, label: "1000+ Monthly Visitors" },
              { icon: Shield, label: "Verified Professionals" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 justify-center"
              >
                <Icon className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="container py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Contractors Choose{" "}
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Our Directory
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We help Niagara contractors grow their business with targeted
            exposure to homeowners who need their services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Globe,
              title: "Dedicated Business Page",
              desc: "Get your own SEO-optimized listing page with your contact info, service areas, photos, and customer reviews.",
            },
            {
              icon: MapPin,
              title: "Local SEO Boost",
              desc: "Appear in category and city-specific searches. Our pages rank for 50+ Niagara home improvement keywords.",
            },
            {
              icon: Phone,
              title: "Direct Lead Generation",
              desc: "Homeowners contact you directly — no middleman fees. Your phone number and website link front and center.",
            },
            {
              icon: Shield,
              title: "Verified Pro Badge",
              desc: "Stand out with our verified professional badge. We confirm your licensing, insurance, and business credentials.",
            },
            {
              icon: BarChart3,
              title: "Monthly Analytics",
              desc: "Track listing views, clicks, and leads with monthly performance reports delivered to your inbox.",
            },
            {
              icon: Star,
              title: "Premium Placement",
              desc: "Get priority positioning in your category. Be the first contractor homeowners see when searching.",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <Card
              key={title}
              className="border-border/50 hover:border-primary/30 transition-all hover:shadow-md"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing + Signup Form */}
      <section id="signup-form" className="bg-muted/30 border-y">
        <div className="container py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Pricing Info */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Simple, Transparent Pricing
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                One plan, everything included. No hidden fees, no per-lead
                charges, no long-term contracts.
              </p>

              <Card className="border-primary shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl">Premium Listing</CardTitle>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                  <div className="pt-2">
                    <span className="text-5xl font-bold">$56.50</span>
                    <span className="text-muted-foreground text-lg">
                      {" "}
                      /month
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    "Dedicated SEO-optimized listing page",
                    "Verified Professional badge",
                    "Direct phone & website links",
                    "Priority category placement",
                    "Monthly performance analytics",
                    "Listed in all relevant city pages",
                    "Photo gallery for your work",
                    "Customer review integration",
                    "Cancel anytime — no contracts",
                  ].map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 min-w-[1.25rem]" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Right: Signup Form */}
            <div>
              <Card className="shadow-xl border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Submit Your Listing
                  </CardTitle>
                  <p className="text-muted-foreground text-sm">
                    Fill out our quick application form and we'll get your
                    business listed within 24 hours.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    {[
                      "Enter your business details and contact info",
                      "Select your service category and city",
                      "We review and publish your listing within 24 hours",
                      "Start receiving leads from local homeowners",
                    ].map((step, i) => (
                      <div key={step} className="flex items-start gap-3">
                        <div className="w-7 h-7 min-w-[1.75rem] rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                          {i + 1}
                        </div>
                        <span className="text-sm pt-0.5">{step}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="https://forms.gle/YOUR_GOOGLE_FORM_ID"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      className="w-full text-lg font-bold py-6 rounded-full shadow-lg mt-2"
                    >
                      Apply Now — $56.50/mo
                    </Button>
                  </a>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting, you agree to our Terms of Service. Your
                    listing will be reviewed and published within 24 hours.
                    Cancel anytime.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              q: "How quickly will my listing go live?",
              a: "Your listing will be reviewed and published within 24 hours of submission and payment. We verify your business details to ensure quality for homeowners.",
            },
            {
              q: "Can I update my listing information?",
              a: "Yes, you can update your contact info, photos, services, and description at any time by contacting us. We'll make changes within 24 hours.",
            },
            {
              q: "What categories can I list under?",
              a: "You can list under any of our 65 service categories. Your primary category gets priority placement, and you can appear in additional relevant categories.",
            },
            {
              q: "Is there a contract or commitment?",
              a: "No long-term contracts. Your subscription is month-to-month at $56.50/month. Cancel anytime with no penalties.",
            },
            {
              q: "How do homeowners find my listing?",
              a: "Your business appears in category pages, city pages, and search results. Our SEO-optimized pages rank for hundreds of Niagara home improvement keywords.",
            },
            {
              q: "Do I need to be licensed and insured?",
              a: "We welcome all legitimate home improvement businesses. Licensed and insured contractors receive our Verified Professional badge for added trust.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="border rounded-xl p-6 bg-card">
              <h3 className="font-bold text-lg mb-2">{q}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {a}
              </p>
            </div>
          ))}
        </div>
      </section>

      <ScrollToTop />
      <Footer />
    </>
  );
};
