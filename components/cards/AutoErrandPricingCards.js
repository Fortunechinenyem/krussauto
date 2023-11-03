import React from "react";

const AutoErrandPricing = () => {
  return (
    <div className="p-6 mt-9 mb-7 text-center">
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
        Pricing Information
      </h3>
      <p className="text-lg mt-4">
        Our Auto Errand services come in different packages to suit your needs.
        Here's an overview of our pricing and what you'll get:
      </p>
      <div className="mt-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border p-4 rounded-lg shadow-lg bg-white">
            <div className="bg-[#006291] text-white rounded-lg border mb-4 text-center text-lg font-semibold">
              Basic Errand
            </div>
            <div className="text-center text-3xl font-bold">N25,000</div>
            <ul className="text-center text-base mt-4">
              <li>One simple errand task</li>
              <li>Errand completion report</li>
              <li>Standard service</li>
            </ul>
          </div>
          <div className="border p-4 rounded-lg shadow-lg bg-white relative">
            <div className="mb-4 mt-9 text-center text-lg font-semibold">
              Standard Errand
            </div>
            <div className="text-center text-3xl font-bold">N40,000</div>
            <div className="absolute top-0 left-0 right-0 bg-[#006291] text-white rounded-lg border text-center text-white font-semibold py-1">
              Recommended
            </div>
            <ul className="text-center text-base mt-4">
              <li>Up to two errand tasks</li>
              <li>Errand completion reports</li>
              <li>Premium service</li>
            </ul>
          </div>
          <div className="border p-4 rounded-lg shadow-lg bg-white">
            <div className="bg-[#006291] text-white rounded-lg border mb-4 text-center text-lg font-semibold">
              Premium Errand
            </div>
            <div className="text-center text-3xl text-[#0B2546] font-bold">
              N50,000
            </div>
            <ul className="text-center text-base mt-4">
              <li>Up to three errand tasks</li>
              <li>Errand completion reports</li>
              <li>Priority service</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-lg mt-4">
        For more details and any ongoing promotions, please feel free to contact
        us.
      </p>
    </div>
  );
};

export default AutoErrandPricing;
