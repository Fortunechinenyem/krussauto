import React, { useState } from "react";
import Image from "next/image";

import { How } from "@/public/images";
import Appointment from "../pages/appointment";

function HowItWorks() {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  const openAppointmentModal = () => {
    setIsAppointmentModalOpen(true);
  };

  const closeAppointmentModal = () => {
    setIsAppointmentModalOpen(false);
  };
  const [activeStep, setActiveStep] = useState(null);

  const steps = [
    {
      title: "Step 1",
      description: "Choose the service you need and book an appointment.",
    },
    {
      title: "Step 2",
      description:
        "Our professionals will provide the service at your convenience.",
    },
    {
      title: "Step 3",
      description:
        "Sit back and enjoy a hassle-free experience with your vehicle.",
    },
  ];

  const handleStepClick = (index) => {
    setActiveStep(index);
  };

  return (
    <div>
      <h4 className="text-[#141414] mb-5 text-center font-bold text-2xl md:text-2xl leading-normal tracking-[0.36px]">
        How it Works
      </h4>
      <div className="flex flex-col md:flex-row items-center justify-evenly">
        <div
          className="md-w-1/2 m-4 "
          data-aos="fade-down"
          data-aos-delay="400"
        >
          <Image
            className="w-full max-w-md"
            src={How}
            alt="how it works"
            priority
          />
          <div className="step-highlight">
            {activeStep !== null && (
              <div className={`step step-${activeStep + 1}`}></div>
            )}
          </div>
        </div>
        <div className="md-w-1/2 mt-8 md:mt-4 md:pl-12 text-center md:text-left">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`rounded-lg p-6 ${
                activeStep === index ? "active-step" : ""
              }`}
              onClick={() => handleStepClick(index)} // Handle step click
            >
              <h4 className="text-xl font-bold mb-2">{step.title}</h4>
              <p className="">{step.description}</p>
            </div>
          ))}
          <div className="mt-8">
            <button
              className="mt-4 button px-4 py-2 ml-4 md:mt-0 sm:mt-2"
              onClick={openAppointmentModal}
            >
              Get started
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .step-highlight {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .step {
          position: absolute;
          width: 30%;
          height: 30%;
          background: rgba(255, 0, 0, 0.2);
          border: 2px solid red;
          transition: all 0.5s ease;
        }

        .step-1 {
          top: 10%;
          left: 10%;
        }

        .step-2 {
          top: 40%;
          left: 40%;
        }

        .step-3 {
          top: 70%;
          left: 70%;
        }

        .active-step {
          background: rgba(0, 255, 0, 0.2);
          border: 2px solid green;
        }
      `}</style>
      {isAppointmentModalOpen && (
        <Appointment onClose={closeAppointmentModal} />
      )}
    </div>
  );
}

export default HowItWorks;
