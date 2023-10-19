import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

import { testimonials } from "./constants";
import { TestimonialImage } from "@/public/images";

const Testimonial = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <style jsx>{`
        .testimonialsection {
          padding: 2rem 1rem;
          text-align: center;
        }

        .testimonial-image {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          overflow: hidden;
        }

        .testimonial-slider {
          display: flex;
          justify-content: center;
          margin-top: 8px;
        }

        .testimonial-card {
          max-width: 300px;
          border-radius: 0.375rem;
          background-color: #ffffff;
          margin: 0 8px;
          padding: 1rem;
        }

        .testimonial-card h3 {
          color: #f57e7c;
        }

        .testimonial-card p {
          color: #595959;
          margin-bottom: 1rem;
        }

        .testimonial-card .flex-container {
          display: flex;
          align-items: flex-start;
        }

        .testimonial-card .testimonial-info {
          flex-grow: 1;
        }

        .testimonial-card .testimonial-info p {
          color: #555555;
        }
      `}</style>

      <div className="testimonialsection">
        <Slider className="testimonial-slider" {...sliderSettings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div style={{ textAlign: "left", marginBottom: "1rem" }}>
                <div className="">
                  <p className="text-[#3a9ea3] mb-4 gap-2">*****</p>
                </div>
                <p>{testimonial.quote}</p>
              </div>

              <div className="flex-container">
                <div className="testimonial-image">
                  <Image src={TestimonialImage} alt="Testimonial" />
                </div>
                <div className="testimonial-info">
                  <p className="italic">- {testimonial.author}</p>
                  <p>{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Testimonial;
