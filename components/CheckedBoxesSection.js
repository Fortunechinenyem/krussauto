import { useForm } from "react-hook-form";

export default function CheckedBoxesSection() {
  const { register, handleSubmit, setValue, watch } = useForm();

  const onSubmit = (data) => {
    // Handle form submission and data
    console.log(data);
  };

  // Watch for changes in the inputs
  const criteria1Value = watch("criteria1");
  const criteria2Value = watch("criteria2");

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <p>Documentation</p>
            <div>
              Vehicle License
              <input
                type="text"
                {...register("criteria1", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria1Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria1", e.target.value)}
              />
            </div>
            <div>
              Original Available
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Plate Number Allocation
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Original Available
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              ECMR
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Original Available
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Proof of Ownership
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Original Available
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Road Worthiness
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Original Available
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Insurance Clearance
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Original Available
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Custom Clearance
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Verification Done
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Purchase Receipt
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Tinted Permit
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
          </div>
          <div>
            <p>Exterior</p>
            <div>
              Frame Type
              <input
                type="text"
                {...register("criteria1", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria1Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria1", e.target.value)}
              />
            </div>
            <div>
              Front Left Door
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Left A Pillar
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Front Windscreen
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Front Left Fender
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Front Left Apron Condition
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Front Left Rail Condition
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Bonnet
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Upper Core Support Condition
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Lower Core Support Condition
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Front Bumper
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Front Right Fender
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Front Right Rail Condition
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Cowl Panel / Dash Panel
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
          </div>
          <div>
            <p>Engine , Exhaust & Cooling</p>
            <div>
              Number Plate
              <input
                type="text"
                {...register("criteria1", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria1Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria1", e.target.value)}
              />
            </div>
            <div>
              Engine Performance
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Has Warning Lights
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Engine Oil Pan Condition
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Radiator Condition
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Radiator Fan & Motor
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Engine Belts / Pulley Condition
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Engine Hose Condition
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Engine Oil Summary
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Exhaust Pipe Condition
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Engine Noise Function
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Catalytic Converter Condition
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
          </div>
          <div>
            <div>
              Front Right Apron Condition
              <input
                type="text"
                {...register("criteria1", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria1Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria1", e.target.value)}
              />
            </div>
            <div>
              Right A Pillar
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Front Right Door
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Right Rocker Panel Condition
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Right B Pillar
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Back Right Door
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Right C Pillar
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Back Right Fender
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Rear Bumper
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Rear Windscreen
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Trunk
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Trunk Floor Pan Condition
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Rear Inner Fender
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Back Left Fender
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Left C Pillar
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
          </div>
          <div>
            <div>
              Exhaust Noise Condition
              <input
                type="text"
                {...register("criteria1", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria1Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria1", e.target.value)}
              />
            </div>
            <div>
              Engine Gaskets Condition
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Engine Mounts Condition
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Starter Motor Condition
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Engine Smoke Condition
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Transmission Condition
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Transmission Function
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Transmission Oil Pan Condition
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Front Differential Condition
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
          </div>
          <div>
            <p>interior</p>
            <div>
              Dashboard Condition
              <input
                type="text"
                {...register("criteria1", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria1Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria1", e.target.value)}
              />
            </div>
            <div>
              Steering Function
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Dashboard Controls
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Driver Seat Condition
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Door Trim Summary
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Headlining Condition
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Power/Manual Window Regulator Function
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Centre Console Condition
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Headrest Condition
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Passenger Seat Condition
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Back Seat Condition
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Interior Carpet Summary
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Interior Door Handle Condition
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Seat Belt Condition
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
            <div>
              Outer Door Handle Condition
              <input
                type="text"
                {...register("criteria2", { required: true })} // Set "required" attribute
                className={`form-input ${
                  criteria2Value === "ok" ? "border" : "border-red-500"
                }`}
                placeholder=""
                onChange={(e) => setValue("criteria2", e.target.value)}
              />
            </div>
          </div>
          <div>
            <div>
              <p>Heating, AC & Electrical</p>
              <div>
                Has Air Conditioning
                <input
                  type="text"
                  {...register("criteria1", { required: true })} // Set "required" attribute
                  className={`form-input ${
                    criteria1Value === "ok" ? "border" : "border-red-500"
                  }`}
                  placeholder=""
                  onChange={(e) => setValue("criteria1", e.target.value)}
                />
              </div>
              <div>
                Air Conditioning Function
                <input
                  type="text"
                  {...register("criteria2", { required: true })} // Set "required" attribute
                  className={`form-input ${
                    criteria2Value === "ok" ? "border" : "border-red-500"
                  }`}
                  placeholder=""
                  onChange={(e) => setValue("criteria2", e.target.value)}
                />
              </div>
              <div>
                Air Conditioning Condensor Condition
                <input
                  type="text"
                  {...register("criteria2", { required: true })} // Set "required" attribute
                  className={`form-input ${
                    criteria2Value === "ok" ? "border" : "border-red-500"
                  }`}
                  placeholder=""
                  onChange={(e) => setValue("criteria2", e.target.value)}
                />
              </div>
              <div>
                Battery Condition
                <input
                  type="text"
                  {...register("criteria2", { required: true })} // Set "required" attribute
                  className={`form-input ${
                    criteria2Value === "ok" ? "border" : "border-red-500"
                  }`}
                  placeholder=""
                  onChange={(e) => setValue("criteria2", e.target.value)}
                />
              </div>
              <div>
                ALternator Condition
                <input
                  type="text"
                  {...register("criteria2", { required: true })} // Set "required" attribute
                  className={`form-input ${
                    criteria2Value === "ok" ? "border" : "border-red-500"
                  }`}
                  placeholder=""
                  onChange={(e) => setValue("criteria2", e.target.value)}
                />
              </div>
              <div>
                Horn Function
                <input
                  type="text"
                  {...register("criteria2", { required: true })} // Set "required" attribute
                  className={`form-input ${
                    criteria2Value === "ok" ? "border" : "border-red-500"
                  }`}
                  placeholder=""
                  onChange={(e) => setValue("criteria2", e.target.value)}
                />
              </div>
              <div>
                Left Head Lamp Condition
                <input
                  type="text"
                  {...register("criteria2", { required: true })} // Set "required" attribute
                  className={`form-input ${
                    criteria2Value === "ok" ? "border" : "border-red-500"
                  }`}
                  placeholder=""
                  onChange={(e) => setValue("criteria2", e.target.value)}
                />
              </div>
              <div>
                Left Head Lamp Function
                <input
                  type="text"
                  {...register("criteria2", { required: true })} // Set "required" attribute
                  className={`form-input ${
                    criteria2Value === "ok" ? "border" : "border-red-500"
                  }`}
                  placeholder=""
                  onChange={(e) => setValue("criteria2", e.target.value)}
                />
              </div>
              <div>
                Right Head Lamp Condition
                <input
                  type="text"
                  {...register("criteria2", { required: true })} // Set "required" attribute
                  className={`form-input ${
                    criteria2Value === "ok" ? "border" : "border-red-500"
                  }`}
                  placeholder=""
                  onChange={(e) => setValue("criteria2", e.target.value)}
                />
              </div>
              <div>
                Right Head Lamp Function
                <input
                  type="text"
                  {...register("criteria2", { required: true })} // Set "required" attribute
                  className={`form-input ${
                    criteria2Value === "ok" ? "border" : "border-red-500"
                  }`}
                  placeholder=""
                  onChange={(e) => setValue("criteria2", e.target.value)}
                />
              </div>
              <div>
                Electrical Wire Summary
                <input
                  type="text"
                  {...register("criteria2", { required: true })} // Set "required" attribute
                  className={`form-input ${
                    criteria2Value === "ok" ? "border" : "border-red-500"
                  }`}
                  placeholder=""
                  onChange={(e) => setValue("criteria2", e.target.value)}
                />
              </div>
              <div>
                Tail Lamp Function
                <input
                  type="text"
                  {...register("criteria2", { required: true })} // Set "required" attribute
                  className={`form-input ${
                    criteria2Value === "ok" ? "border" : "border-red-500"
                  }`}
                  placeholder=""
                  onChange={(e) => setValue("criteria2", e.target.value)}
                />
              </div>
              <div>
                Tail Lamp Condition
                <input
                  type="text"
                  {...register("criteria2", { required: true })} // Set "required" attribute
                  className={`form-input ${
                    criteria2Value === "ok" ? "border" : "border-red-500"
                  }`}
                  placeholder=""
                  onChange={(e) => setValue("criteria2", e.target.value)}
                />
              </div>
            </div>
            <div>
              <div>
                <p>Suspension, Steering & Braking</p>
                <div>
                  Brake Function
                  <input
                    type="text"
                    {...register("criteria1", { required: true })} // Set "required" attribute
                    className={`form-input ${
                      criteria1Value === "ok" ? "border" : "border-red-500"
                    }`}
                    placeholder=""
                    onChange={(e) => setValue("criteria1", e.target.value)}
                  />
                </div>
                <div>
                  Brake Condition Summary
                  <input
                    type="text"
                    {...register("criteria2", { required: true })} // Set "required" attribute
                    className={`form-input ${
                      criteria2Value === "ok" ? "border" : "border-red-500"
                    }`}
                    placeholder=""
                    onChange={(e) => setValue("criteria2", e.target.value)}
                  />
                </div>
                <div>
                  Handbrake Function
                  <input
                    type="text"
                    {...register("criteria2", { required: true })} // Set "required" attribute
                    className={`form-input ${
                      criteria2Value === "ok" ? "border" : "border-red-500"
                    }`}
                    placeholder=""
                    onChange={(e) => setValue("criteria2", e.target.value)}
                  />
                </div>
                <div>
                  Has Antilock Braking System (ABS)
                  <input
                    type="text"
                    {...register("criteria2", { required: true })} // Set "required" attribute
                    className={`form-input ${
                      criteria2Value === "ok" ? "border" : "border-red-500"
                    }`}
                    placeholder=""
                    onChange={(e) => setValue("criteria2", e.target.value)}
                  />
                </div>
                <div>
                  Antilocking Braking System ABS Function
                  <input
                    type="text"
                    {...register("criteria2", { required: true })} // Set "required" attribute
                    className={`form-input ${
                      criteria2Value === "ok" ? "border" : "border-red-500"
                    }`}
                    placeholder=""
                    onChange={(e) => setValue("criteria2", e.target.value)}
                  />
                </div>
                <div>
                  Steering Type
                  <input
                    type="text"
                    {...register("criteria2", { required: true })} // Set "required" attribute
                    className={`form-input ${
                      criteria2Value === "ok" ? "border" : "border-red-500"
                    }`}
                    placeholder=""
                    onChange={(e) => setValue("criteria2", e.target.value)}
                  />
                </div>
                <div>
                  Power Steering Condition
                  <input
                    type="text"
                    {...register("criteria2", { required: true })} // Set "required" attribute
                    className={`form-input ${
                      criteria2Value === "ok" ? "border" : "border-red-500"
                    }`}
                    placeholder=""
                    onChange={(e) => setValue("criteria2", e.target.value)}
                  />
                </div>
                <div>
                  Steering Gear Condition
                  <input
                    type="text"
                    {...register("criteria2", { required: true })} // Set "required" attribute
                    className={`form-input ${
                      criteria2Value === "ok" ? "border" : "border-red-500"
                    }`}
                    placeholder=""
                    onChange={(e) => setValue("criteria2", e.target.value)}
                  />
                </div>
                <div>
                  Has Pneumatic Suspension
                  <input
                    type="text"
                    {...register("criteria2", { required: true })} // Set "required" attribute
                    className={`form-input ${
                      criteria2Value === "ok" ? "border" : "border-red-500"
                    }`}
                    placeholder=""
                    onChange={(e) => setValue("criteria2", e.target.value)}
                  />
                </div>
                <div>
                  Suspension Function
                  <input
                    type="text"
                    {...register("criteria2", { required: true })} // Set "required" attribute
                    className={`form-input ${
                      criteria2Value === "ok" ? "border" : "border-red-500"
                    }`}
                    placeholder=""
                    onChange={(e) => setValue("criteria2", e.target.value)}
                  />
                </div>
                <div>
                  Front Suspension Ball Joints Condition
                  <input
                    type="text"
                    {...register("criteria2", { required: true })} // Set "required" attribute
                    className={`form-input ${
                      criteria2Value === "ok" ? "border" : "border-red-500"
                    }`}
                    placeholder=""
                    onChange={(e) => setValue("criteria2", e.target.value)}
                  />
                </div>
                <div>
                  Back Suspension Ball Joints Condition
                  <input
                    type="text"
                    {...register("criteria2", { required: true })} // Set "required" attribute
                    className={`form-input ${
                      criteria2Value === "ok" ? "border" : "border-red-500"
                    }`}
                    placeholder=""
                    onChange={(e) => setValue("criteria2", e.target.value)}
                  />
                </div>
                <div>
                  Front Shock Absorber Condition
                  <input
                    type="text"
                    {...register("criteria2", { required: true })} // Set "required" attribute
                    className={`form-input ${
                      criteria2Value === "ok" ? "border" : "border-red-500"
                    }`}
                    placeholder=""
                    onChange={(e) => setValue("criteria2", e.target.value)}
                  />
                </div>
                <div>
                  Front Shock Absorber Condition
                  <input
                    type="text"
                    {...register("criteria2", { required: true })} // Set "required" attribute
                    className={`form-input ${
                      criteria2Value === "ok" ? "border" : "border-red-500"
                    }`}
                    placeholder=""
                    onChange={(e) => setValue("criteria2", e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <p>Additional Faetures</p>
              <div>
                Has Bluetooth
                <input
                  type="text"
                  {...register("criteria1", { required: true })} // Set "required" attribute
                  className={`form-input ${
                    criteria1Value === "ok" ? "border" : "border-red-500"
                  }`}
                  placeholder=""
                  onChange={(e) => setValue("criteria1", e.target.value)}
                />
              </div>
              <div>
                Has Car Location Tracker
                <input
                  type="text"
                  {...register("criteria2", { required: true })} // Set "required" attribute
                  className={`form-input ${
                    criteria2Value === "ok" ? "border" : "border-red-500"
                  }`}
                  placeholder=""
                  onChange={(e) => setValue("criteria2", e.target.value)}
                />
              </div>
              <div>
                Has Portable Cooler
                <input
                  type="text"
                  {...register("criteria2", { required: true })} // Set "required" attribute
                  className={`form-input ${
                    criteria2Value === "ok" ? "border" : "border-red-500"
                  }`}
                  placeholder=""
                  onChange={(e) => setValue("criteria2", e.target.value)}
                />
              </div>
              <div>
                Has Heated Seats
                <input
                  type="text"
                  {...register("criteria2", { required: true })} // Set "required" attribute
                  className={`form-input ${
                    criteria2Value === "ok" ? "border" : "border-red-500"
                  }`}
                  placeholder=""
                  onChange={(e) => setValue("criteria2", e.target.value)}
                />
              </div>
              <div>
                Has Navigation
                <input
                  type="text"
                  {...register("criteria2", { required: true })} // Set "required" attribute
                  className={`form-input ${
                    criteria2Value === "ok" ? "border" : "border-red-500"
                  }`}
                  placeholder=""
                  onChange={(e) => setValue("criteria2", e.target.value)}
                />
              </div>
              <div>
                Has Automatic Parking Assist
                <input
                  type="text"
                  {...register("criteria2", { required: true })} // Set "required" attribute
                  className={`form-input ${
                    criteria2Value === "ok" ? "border" : "border-red-500"
                  }`}
                  placeholder=""
                  onChange={(e) => setValue("criteria2", e.target.value)}
                />
              </div>
              <div>
                Has Keyless Start
                <input
                  type="text"
                  {...register("criteria2", { required: true })} // Set "required" attribute
                  className={`form-input ${
                    criteria2Value === "ok" ? "border" : "border-red-500"
                  }`}
                  placeholder=""
                  onChange={(e) => setValue("criteria2", e.target.value)}
                />
              </div>
              <div>
                Has Remote Key
                <input
                  type="text"
                  {...register("criteria2", { required: true })} // Set "required" attribute
                  className={`form-input ${
                    criteria2Value === "ok" ? "border" : "border-red-500"
                  }`}
                  placeholder=""
                  onChange={(e) => setValue("criteria2", e.target.value)}
                />
              </div>
              <div>
                Has Parking Camera
                <input
                  type="text"
                  {...register("criteria2", { required: true })} // Set "required" attribute
                  className={`form-input ${
                    criteria2Value === "ok" ? "border" : "border-red-500"
                  }`}
                  placeholder=""
                  onChange={(e) => setValue("criteria2", e.target.value)}
                />
              </div>
              <div>
                Has Massage Seats
                <input
                  type="text"
                  {...register("criteria2", { required: true })} // Set "required" attribute
                  className={`form-input ${
                    criteria2Value === "ok" ? "border" : "border-red-500"
                  }`}
                  placeholder=""
                  onChange={(e) => setValue("criteria2", e.target.value)}
                />
              </div>
              <div>
                Has Sun Roof
                <input
                  type="text"
                  {...register("criteria2", { required: true })} // Set "required" attribute
                  className={`form-input ${
                    criteria2Value === "ok" ? "border" : "border-red-500"
                  }`}
                  placeholder=""
                  onChange={(e) => setValue("criteria2", e.target.value)}
                />
              </div>
              <div>
                Has Premium Sound System
                <input
                  type="text"
                  {...register("criteria2", { required: true })} // Set "required" attribute
                  className={`form-input ${
                    criteria2Value === "ok" ? "border" : "border-red-500"
                  }`}
                  placeholder=""
                  onChange={(e) => setValue("criteria2", e.target.value)}
                />
              </div>
              <div>
                Has Video Entertainment System
                <input
                  type="text"
                  {...register("criteria2", { required: true })} // Set "required" attribute
                  className={`form-input ${
                    criteria2Value === "ok" ? "border" : "border-red-500"
                  }`}
                  placeholder=""
                  onChange={(e) => setValue("criteria2", e.target.value)}
                />
              </div>
              <div>
                Has Rear Video Entertainment Screens
                <input
                  type="text"
                  {...register("criteria2", { required: true })} // Set "required" attribute
                  className={`form-input ${
                    criteria2Value === "ok" ? "border" : "border-red-500"
                  }`}
                  placeholder=""
                  onChange={(e) => setValue("criteria2", e.target.value)}
                />
              </div>
              <div>
                Has Adaptive Headlamps
                <input
                  type="text"
                  {...register("criteria2", { required: true })} // Set "required" attribute
                  className={`form-input ${
                    criteria2Value === "ok" ? "border" : "border-red-500"
                  }`}
                  placeholder=""
                  onChange={(e) => setValue("criteria2", e.target.value)}
                />
              </div>
              <div>
                Has Parking Sensors
                <input
                  type="text"
                  {...register("criteria2", { required: true })} // Set "required" attribute
                  className={`form-input ${
                    criteria2Value === "ok" ? "border" : "border-red-500"
                  }`}
                  placeholder=""
                  onChange={(e) => setValue("criteria2", e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <button
          className="inline-block self-start bg-[#006950] text-white font-bold rounded-md px-6 py-2 text-lg px-6 py-3 rounded-md text-sm font-medium mb-7 mt-4"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
