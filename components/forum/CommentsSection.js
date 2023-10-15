import { useForm } from "react-hook-form";

export default function CommentsSection() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // Handle form submission and data
    console.log(data);
  };

  return (
    <div className="mt-7">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" m-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {" "}
          <div>
            <textarea
              {...register("exteriorComment")}
              placeholder="Comments Transmission"
            ></textarea>
          </div>
          <div>
            <textarea
              {...register("engineComment")}
              placeholder="Comments Electrical"
            ></textarea>
          </div>
          <div>
            {" "}
            <textarea
              {...register("exteriorComment")}
              placeholder="Comments Interior"
            ></textarea>
          </div>
          <div>
            <textarea
              {...register("engineComment")}
              placeholder="Comments AC"
            ></textarea>
          </div>
          <div>
            <textarea
              {...register("exteriorComment")}
              placeholder="Comments Exterior"
            ></textarea>
          </div>
          <div>
            <textarea
              {...register("engineComment")}
              placeholder="Comments Suspension"
            ></textarea>
          </div>
          <div>
            <textarea
              {...register("engineComment")}
              placeholder="Comments Engine"
            ></textarea>
          </div>
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
