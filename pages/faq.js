import React, { useState } from "react";

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "How long does an inspection take?",
      answer: "Typically, an inspection takes about 1-2 hours.",
    },
    {
      id: 2,
      question: "What happens if the car fails the inspection?",
      answer:
        "If the car fails the inspection, we provide a detailed report highlighting the issues.",
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "80px",
    width: "80%",
    maxWidth: "1035px",
    margin: "0 auto",
  };

  const questionStyle = {
    display: "flex",
    width: "100%",
    padding: "35px 48px",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid #ccc",
    marginBottom: "10px",
    cursor: "pointer",
    borderRadius: "10px",
  };

  return (
    <div style={faqStyle}>
      <h4 className="text-xl font-bold">FAQs</h4>
      <ul style={{ width: "100%", padding: 0, margin: 0 }}>
        {faqs.map((faq, index) => (
          <li key={faq.id} style={{ width: "100%" }}>
            <div onClick={() => toggleAnswer(index)} style={questionStyle}>
              <h3>{faq.question}</h3>
              <span>{activeIndex === index ? "v" : "v"}</span>
            </div>
            {activeIndex === index && (
              <p style={{ padding: "10px 48px" }}>{faq.answer}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
