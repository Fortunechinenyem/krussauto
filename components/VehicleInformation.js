import { useForm } from "react-hook-form";

export default function VehicleInformationSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Handle form submission and data
    console.log(data);
  };

  return (
    <div>
      <h2 className="mb-4">Vehicle Information</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            className="mb-4"
            type="file"
            {...register("vehicleImage", { required: true })}
          />
          {errors.vehicleImage && <span>This field is required.</span>}
        </div>
        <div>
          {" "}
          <input
            className="mb-4"
            type="text"
            {...register("location")}
            placeholder="Location"
          />
          <input
            className="mb-4"
            type="text"
            {...register("make")}
            placeholder="Make"
          />
          <input
            className="mb-4"
            type="text"
            {...register("color")}
            placeholder="Color"
          />
          <input
            className="mb-4"
            type="text"
            {...register("model")}
            placeholder="Model"
          />
          <input
            className="mb-4"
            type="text"
            {...register("year")}
            placeholder="Year"
          />
          <input
            className="mb-4"
            type="text"
            {...register("transmission")}
            placeholder="Transmission"
          />
          <input
            className="mb-4"
            type="text"
            {...register("enginecapacity")}
            placeholder="Engine Capacity"
          />
          <input
            className="mb-4"
            type="text"
            {...register("fueltype")}
            placeholder="Fuel Type"
          />
          <input
            className="mb-4"
            type="text"
            {...register("interiorcolor")}
            placeholder="Interior Color"
          />
          <input
            className="mb-4"
            type="text"
            {...register("country")}
            placeholder="Contry"
          />
          <input
            className="mb-4"
            type="text"
            {...register("bookingid")}
            placeholder="Booking Id"
          />
          <input
            className="mb-4"
            type="text"
            {...register("inspectiontype")}
            placeholder="Inspection Type"
          />
          <input
            className="mb-4"
            type="text"
            {...register("customclearanceport")}
            placeholder="Customs Clearance Port"
          />
          <input
            className="mb-4"
            type="text"
            {...register("customnumber")}
            placeholder="Custom Number"
          />
          <input
            className="mb-4"
            type="text"
            {...register("mileage")}
            placeholder="Mileage"
          />
          <input
            className="mb-4"
            type="text"
            {...register("boughtcondition")}
            placeholder="Bought Condition"
          />
          <input
            className="mb-4"
            type="text"
            {...register("sellingcondition")}
            placeholder="Selling Condition"
          />
          <input
            className="mb-4"
            type="text"
            {...register("registrationtype")}
            placeholder="Registration Type"
          />
          <input
            className="mb-4"
            type="text"
            {...register("registeredcity")}
            placeholder="Registered City"
          />
        </div>

        <button
          type="submit"
          className="inline-block self-start bg-[#006950] text-white font-bold rounded-md px-6 py-2 text-lg px-6 py-3 rounded-md text-sm font-medium mb-7"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
