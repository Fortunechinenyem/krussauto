export default function FAQs() {
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
    // Add more FAQs
  ];

  return (
    <div className="px-4 md:px-8 lg:px-16 text-xl">
      <h2>FAQs</h2>
      <ul>
        {faqs.map((faq) => (
          <li key={faq.id}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
