export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex items-center"
          >
            <img
              src="/media/logo.webp"
              alt="Niagara Home Improvement Logo"
              className="h-10 max-w-full mr-2 object-contain"
            />
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Quick Links</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#categories"
              className="opacity-60 hover:opacity-100"
            >
              Browse Categories
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="/contractors"
              className="opacity-60 hover:opacity-100"
            >
              Contractor Directory
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="/jobs"
              className="opacity-60 hover:opacity-100"
            >
              Job Board
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="/signup"
              className="opacity-60 hover:opacity-100"
            >
              Submit Listing
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Company</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#pricing"
              className="opacity-60 hover:opacity-100"
            >
              Pricing
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; {new Date().getFullYear()} Niagara Home Improvement. All Rights
          Reserved.
        </h3>
      </section>
    </footer>
  );
};
