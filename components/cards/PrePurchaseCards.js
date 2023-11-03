import React from "react";

const PrePurchaseInspectionCards = () => {
  return (
    <section className="bg-white p-6 mt-9 mb-7 text-center">
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
        What to Look for During Pre-Purchase Inspection
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="border p-4 rounded-lg shadow-lg bg-white">
          <h4 className="text-xl font-semibold mb-2">Engine</h4>
          <p className="text-lg">
            Check for unusual noises, oil leaks, and any signs of overheating.
          </p>
        </div>

        <div className="border p-4 rounded-lg shadow-lg bg-white">
          <h4 className="text-xl font-semibold mb-2">Transmission</h4>
          <p className="text-lg">
            Ensure smooth gear shifting and no signs of transmission problems.
          </p>
        </div>

        <div className="border p-4 rounded-lg shadow-lg bg-white">
          <h4 className="text-xl font-semibold mb-2">Suspension</h4>
          <p className="text-lg">
            Look for signs of worn-out suspension components and abnormal noises
            when driving over bumps.
          </p>
        </div>
      </div>

      <div className="mt-6">
        <p className="text-lg">
          These are just a few of the things to check during a pre-purchase
          inspection. It's important to have a professional technician inspect
          the vehicle thoroughly to ensure your peace of mind.
        </p>
      </div>
    </section>
  );
};

export default PrePurchaseInspectionCards;
