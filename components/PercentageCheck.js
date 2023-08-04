import { useForm } from "react-hook-form";

export default function PercentageChecksSection() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // Handle form submission and data
    console.log(data);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <input
          className="mb-4"
          type="text"
          {...register("customdutyfee")}
          placeholder="Custom Duty Fee"
        />
        <input
          className="mb-4"
          type="text"
          {...register("color")}
          placeholder="Color"
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          Exterior
          <input
            className="range-input"
            placeholder=""
            type="range"
            {...register("exterior")}
            min="0"
            max="100"
          />
        </div>
        <div>
          Interior
          <input
            className="range-input"
            placeholder=""
            type="range"
            {...register("interior")}
            min="0"
            max="100"
          />
        </div>
        <div>
          Engine, Exhaust % Cooling
          <input
            className="range-input"
            placeholder=""
            type="range"
            {...register("engine,exhaust,cooling")}
            min="0"
            max="100"
          />
        </div>
        <div>
          Heating, AC % Electrical
          <input
            className="range-input"
            placeholder=""
            type="range"
            {...register("heating")}
            min="0"
            max="100"
          />
        </div>
        <div>
          Transmission
          <input
            className="range-input"
            placeholder=""
            type="range"
            {...register("transmission")}
            min="0"
            max="100"
          />
        </div>
        <div>
          Suspension, Steering % Braking
          <input
            className="bg-[#006950]"
            placeholder=""
            type="range"
            {...register("suspension")}
            min="0"
            max="100"
          />
        </div>

        <button
          className="inline-block self-start bg-[#006950] text-white font-bold rounded-md px-6 py-2 text-lg px-6 py-3 rounded-md text-sm font-medium mb-7 mt-5"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
