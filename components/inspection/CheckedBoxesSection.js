import { useForm } from "react-hook-form";

export default function CheckedBoxesSection() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Documentation & Checks</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Vehicle License",
            "Original Available",
            "Plate Number Allocation",
            "ECMR",
            "Proof of Ownership",
            "Road Worthiness",
            "Insurance Clearance",
            "Custom Clearance",
            "Purchase Receipt",
            "Tinted Permit",
          ].map((item, index) => (
            <div key={index} className="flex items-center">
              <input
                type="checkbox"
                {...register(item.toLowerCase().replace(/ /g, "_"))}
                className="mr-2"
              />
              <label className="text-sm text-gray-700">{item}</label>
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="button text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
