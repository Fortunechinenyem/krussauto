import React from "react";
import Link from "next/link";
import Image from "next/image";
import { InvestmentImage } from "@/public/images";

const Invest = () => {
  return (
    <div className=" mt-9 shadow-lg rounded-lg overflow-hidden items-center">
      <div className="text-center px-6 py-10 md:py-16">
        <h3 className="text-3xl font-bold">
          Looking to Invest in Automobile Trading?
        </h3>
        <p className="text-lg md:text-xl mt-4">
          Earn High ROI while you Sleep.
        </p>
        <h4 className="text-2xl font-bold mt-8">How it works</h4>
        <p className="text-lg">
          Investing in our automotive trading business is a smart choice to grow
          your wealth. Here's how you can get started:
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 justify-center mb-4">
          <Image
            className="object-cover w-full"
            src={InvestmentImage}
            alt="Investment Image"
            priority
          />
        </div>
        <div className="md:w-1/2 p-6">
          <ul className="text-left mt-4">
            <li className="mb-2">
              <span className="font-bold">Step 1:</span> Sign up and create an
              investor account on our platform.
            </li>
            <li className="mb-2">
              <span className="font-bold">Step 2:</span> Deposit your investment
              amount securely through our trusted payment gateway.
            </li>
            <li className="mb-2">
              <span className="font-bold">Step 3:</span> Our team of experts
              will manage and trade in the automobile market to generate
              profits.
            </li>
            <li className="mb-2">
              <span className="font-bold">Step 4:</span> Monitor your earnings
              and enjoy high returns on your investment.
            </li>
          </ul>
          <div className="mt-6 text-center">
            <Link href="/authentication/investorregister" className="button ">
              Become An Investor
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invest;
