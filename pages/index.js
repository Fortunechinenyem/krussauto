import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Logo from "../public/assets/images/kruss (1).jpg";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="container">
        <div className="mt-9 mb-7 flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
              Make an informed decision – Get a professional used car
              inspection.
            </h1>
            <p className="text-lg md:text-xl mt-4">
              Don't get stuck with a lemon – Get a comprehensive inspection
              before purchasing a used car.
            </p>
            <div>
              <input
                className="mt-8 py-2 px-4 rounded-lg bg-gray-200"
                placeholder="Enter your email"
              />
              <button className="m-4 btn text-black bg-[#3ADFF1]  hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Submit
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
            <Image className="w-full max-w-md" src={Logo} alt="logo" priority />
          </div>
        </div>

        <div className="mt-9 flex flex-col md:flex-row">
          <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
            <Image className="w-full max-w-md" src={Logo} alt="logo" priority />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
              Know what you’re buying.
            </h1>
            <p className="text-lg md:text-xl mt-4">
              Our experienced inspectors conduct thorough inspections to
              identify any issues. Our reports provide a detailed analysis of
              the car’s condition, giving you peace of mind.
            </p>
          </div>
        </div>

        <div className="mt-9 flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
              Negotiate with confidence.
            </h1>
            <p className="text-lg md:text-xl mt-4">
              Armed with a KrussAuto report, you are in a better position to
              negotiate a fair price with the seller.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
            <Image className="w-full max-w-md" src={Logo} alt="logo" priority />
          </div>
        </div>

        <div className="mt-9 flex flex-col md:flex-row">
          <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
            <Image className="w-full max-w-md" src={Logo} alt="logo" priority />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
              Ensure safety on the road.
            </h1>
            <p className="text-lg md:text-xl mt-4">
              Our inspection will identify any safety issues with the car. You
              can be confident that you and your loved ones are safe on the
              road.
            </p>
          </div>
        </div>

        <div className="bg-[#364B45] text-white card mt-9 mb-7">
          <p>
            "I highly recommend CarCheck to anyone looking to buy a used car.
            It's the peace of mind you need when making a big purchase." Kerry
            White
          </p>
        </div>

        <div className=" border rounded-border">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <Image className="w-32 max-w-md" src={Logo} alt="logo" priority />
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <Image className="w-32 max-w-md" src={Logo} alt="logo" priority />
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <Image className="w-32 max-w-md" src={Logo} alt="logo" priority />
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <Image className="w-32 max-w-md" src={Logo} alt="logo" priority />
            </div>
            <Image className="w-32 max-w-md" src={Logo} alt="logo" priority />
          </div>

          <p className="text-lg md:text-xl mt-4">
            Get your CarCheck report now.
          </p>
          <div>
            <input
              className="mt-8 py-2 px-4 rounded-lg bg-gray-200"
              placeholder="Enter your email"
            />
            <button className="m-4 btn text-black bg-[#3ADFF1]  hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Submit
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
