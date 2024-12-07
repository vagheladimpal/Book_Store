import banner from "../Assets/girl.png";

const Banner = () => {
  return (
    <>
      <section className="bg-white ">
        <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h2>SALE UPTO 20% OFF</h2>
            <h1 className="max-w-2xl mb-4 text-2xl font-extrabold md:leading-6	md:text-6xl xl:text-6xl ">
            Meet your next favorite book
            </h1>

            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
              This free and open-source landing page template was built using
              the utility classNamees from
              <a target="_blank" className="hover:underline">
                Tailwind CSS
              </a>{" "}
              and based on the components from the{" "}
              <a href="#/" className="hover:underline" target="_blank">
                Flowbite Library
              </a>{" "}
              and the
              <a
                href="https://flowbite.com/blocks/"
                target="_blank"
                className="hover:underline"
              >
                Blocks System
              </a>
              .
            </p>

            <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <a
                href="/register"
                className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-500 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-5 ring-black "
              >
                Expore to our Book store
              </a>
            </div>
          </div>

          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={banner} alt="hero image" />
          </div>
        </div>
      </section>
    </>
  );
};
export default Banner;
