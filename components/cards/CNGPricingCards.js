import React from "react";

const CNGPricingCards = () => {
  return (
    <section className="bg-white p-6 mt-9 mb-7 text-center">
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
        CNG Installation Pricing Plans
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="border p-4 rounded-lg shadow-lg bg-white">
          <h4 className="text-xl font-semibold mb-2">Basic Package</h4>
          <p className="text-lg">Affordable CNG conversion for small cars.</p>
          <p className="text-lg font-bold mt-2">Starting at $500</p>
        </div>

        <div className="border p-4 rounded-lg shadow-lg bg-white">
          <h4 className="text-xl font-semibold mb-2">Standard Package</h4>
          <p className="text-lg">Enhanced CNG system with better mileage.</p>
          <p className="text-lg font-bold mt-2">Starting at $800</p>
        </div>

        <div className="border p-4 rounded-lg shadow-lg bg-white">
          <h4 className="text-xl font-semibold mb-2">Premium Package</h4>
          <p className="text-lg">Advanced CNG kit with premium performance.</p>
          <p className="text-lg font-bold mt-2">Starting at $1200</p>
        </div>
      </div>

      <div className="mt-6">
        <p className="text-lg">
          Choose the best CNG conversion package for your vehicle and start
          saving on fuel costs today!
        </p>
      </div>
    </section>
  );
};

export default CNGPricingCards;
