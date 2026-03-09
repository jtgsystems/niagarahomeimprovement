import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const Pricing = () => {
  return (
    <section id="pricing" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Grow Your
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Niagara Business
        </span>
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8 max-w-2xl mx-auto">
        Join the #1 directory for Niagara contractors. We connect you directly
        with homeowners looking for your exact expertise.
      </h3>
      <div className="flex justify-center">
        <Card className="w-full max-w-xl drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-primary">
          <CardHeader>
            <CardTitle className="flex item-center justify-between">
              Premium Listing
              <Badge variant="secondary" className="text-sm text-primary">
                Most popular
              </Badge>
            </CardTitle>
            <div>
              <span className="text-3xl font-bold">$56.50</span>
              <span className="text-muted-foreground"> /month</span>
            </div>

            <CardDescription>
              Everything you need to grow your client base in the Niagara
              region.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_top"
            >
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input
                type="hidden"
                name="hosted_button_id"
                value="RNPAL5K4GTMGE"
              />
              <Button
                type="submit"
                className="w-full text-lg font-bold py-6 rounded-full shadow-lg"
              >
                START TODAY
              </Button>
            </form>
          </CardContent>

          <hr className="w-4/5 m-auto mb-4" />

          <CardFooter className="flex">
            <div className="space-y-4 text-lg">
              <span className="flex">
                <Check className="text-green-500 mt-1 flex-shrink-0" />{" "}
                <h3 className="ml-2">
                  <strong>Premium Visibility:</strong> Top placement in all your
                  categories.
                </h3>
              </span>
              <span className="flex">
                <Check className="text-green-500 mt-1 flex-shrink-0" />{" "}
                <h3 className="ml-2">
                  <strong>Verified Badge:</strong> Instant trust with
                  homeowners.
                </h3>
              </span>
              <span className="flex">
                <Check className="text-green-500 mt-1 flex-shrink-0" />{" "}
                <h3 className="ml-2">
                  <strong>Direct Leads:</strong> Homeowners contact you
                  directly.
                </h3>
              </span>
            </div>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};
