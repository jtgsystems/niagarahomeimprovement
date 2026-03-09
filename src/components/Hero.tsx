import { buttonVariants } from "./ui/button";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <span className="bg-primary/10 text-primary px-3 py-2 rounded-full mb-4 animate-in fade-in slide-in-from-top-4 inline-block font-semibold">
          TRUSTED SINCE 2018
        </span>
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            Find Your Next{" "}
            <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
              Expert Contractor
            </span>
          </h1>{" "}
          <br className="hidden md:block" />
          in Niagara
        </main>

        <p className="text-xl text-muted-foreground mx-auto lg:mx-0">
          Niagara region's most comprehensive directory for home renovation,
          repair, and specialized services.
        </p>

        <div className="space-y-4 md:space-y-0 flex flex-col md:flex-row md:space-x-4">
          <a
            href="#categories"
            className={`w-full md:w-1/3 text-md font-bold py-6 rounded-full shadow-lg ${buttonVariants({ variant: "default" })}`}
          >
            Explore Categories
          </a>

          <a
            href="https://niagarahomeimprovement.com/signup"
            className={`w-full md:w-1/3 font-bold py-6 rounded-full ${buttonVariants(
              {
                variant: "outline",
              },
            )}`}
          >
            List Your Business
          </a>
        </div>
      </div>

      {/* Side Image */}
      <div className="z-10 w-full xl:min-h-[600px] min-h-[400px] bg-[url('/media/backgrounds/home2-bg.webp')] bg-cover bg-center rounded-3xl shadow-2xl border border-muted"></div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
