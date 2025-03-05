import React, { useState } from "react";
import Appointment from "../pages/appointment";

function HowItWorks() {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(null);

  const openAppointmentModal = () => {
    setIsAppointmentModalOpen(true);
  };

  const closeAppointmentModal = () => {
    setIsAppointmentModalOpen(false);
  };

  const steps = [
    {
      title: "Step 1: Choose Your Service",
      description:
        "Select the service you need and book an appointment online.",
    },
    {
      title: "Step 2: Professional Service",
      description:
        "Our experts will handle everything at your preferred time and location.",
    },
    {
      title: "Step 3: Enjoy the Results",
      description:
        "Relax and experience a seamless, hassle-free service for your vehicle.",
    },
  ];

  const handleStepClick = (index) => {
    setActiveStep(index);
  };

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          How It Works
        </h2>
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`group cursor-pointer p-6 rounded-lg transition-all duration-300 ${
                activeStep === index
                  ? "bg-blue-50 border-l-4 border-blue-500"
                  : "bg-white hover:bg-gray-100"
              }`}
              onClick={() => handleStepClick(index)}
              onMouseEnter={() => setActiveStep(index)}
              onMouseLeave={() => setActiveStep(null)}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <button
            onClick={openAppointmentModal}
            className="  button inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Get Started
          </button>
        </div>
      </div>
      {isAppointmentModalOpen && (
        <Appointment onClose={closeAppointmentModal} />
      )}
    </div>
  );
}

export default HowItWorks;
