import { useDropzone } from "react-dropzone";
import { useState } from "react";

export default function DamagedPartsSection() {
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone();
  const [description, setDescription] = useState("");

  const handleUpload = () => {
    console.log("Uploaded Files:", acceptedFiles);
    console.log("Description:", description);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Damaged Parts</h2>
      <div
        {...getRootProps()}
        className="border-2 border-dashed p-6 text-center"
      >
        <input {...getInputProps()} />
        <p className="text-gray-600">
          Drag 'n' drop some files here, or click to select files
        </p>
        {acceptedFiles.length > 0 && (
          <div className="mt-4">
            <h3 className="text-sm font-medium text-gray-700">
              Selected Files:
            </h3>
            <ul className="text-sm text-gray-600">
              {acceptedFiles.map((file) => (
                <li key={file.path}>{file.path}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Description:
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded-md mt-1"
          rows="4"
        />
      </div>
      <button
        onClick={handleUpload}
        className="button text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
      >
        Upload
      </button>
    </div>
  );
}
