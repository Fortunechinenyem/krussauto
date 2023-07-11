import React, { useState, useEffect } from "react";

const ExclusiveOffers = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    // Fetch exclusive offers and discounts data from API
    fetch("/api/getExclusiveOffers")
      .then((response) => response.json())
      .then((data) => setExclusiveOffers(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Exclusive Offers and Discounts</h2>
      {offers.map((offer) => (
        <div key={offer.id} className="mb-4">
          <h3 className="text-xl font-bold">{offer.title}</h3>
          <p>{offer.description}</p>
          <p className="text-green-500">{offer.discount}</p>
        </div>
      ))}
    </div>
  );
};

export default ExclusiveOffers;
