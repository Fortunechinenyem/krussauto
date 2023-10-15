import React from "react";

const DashboardCard = ({ title, value }) => {
  return (
    <div className="p-6 border border-gray-300 rounded-lg hover:shadow-lg">
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p className="font-semibold">{value}</p>
    </div>
  );
};

export default DashboardCard;
