import { useForm } from "react-hook-form";

export default function PercentageChecksSection() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Percentage Checks</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Exterior
            </label>
            <input
              type="range"
              {...register("exterior")}
              className="w-full"
              min="0"
              max="100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Interior
            </label>
            <input
              type="range"
              {...register("interior")}
              className="w-full"
              min="0"
              max="100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Engine, Exhaust & Cooling
            </label>
            <input
              type="range"
              {...register("engineExhaustCooling")}
              className="w-full"
              min="0"
              max="100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Heating, AC & Electrical
            </label>
            <input
              type="range"
              {...register("heatingACElectrical")}
              className="w-full"
              min="0"
              max="100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Transmission
            </label>
            <input
              type="range"
              {...register("transmission")}
              className="w-full"
              min="0"
              max="100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Suspension, Steering & Braking
            </label>
            <input
              type="range"
              {...register("suspensionSteeringBraking")}
              className="w-full"
              min="0"
              max="100"
            />
          </div>
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
