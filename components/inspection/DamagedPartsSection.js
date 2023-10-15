import { useDropzone } from "react-dropzone";
import { useState } from "react";

export default function DamagedPartsSection() {
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone();
  const [description, setDescription] = useState("");

  const handleUpload = () => {
    // Handle image upload and data
    console.log("Uploaded Files:", acceptedFiles);
    console.log("Description:", description);
  };

  return (
    <div>
      <h2>Upload Images of Damaged Parts</h2>
      <div {...getRootProps()} className="border-2 p-4 mt-4">
        <input {...getInputProps()} />
        <p className="text-center">
          Drag 'n' drop some files here, or click to select files
        </p>
        {acceptedFiles.length > 0 && (
          <div className="mt-4">
            <h3>Selected Files:</h3>
            <ul>
              {acceptedFiles.map((file) => (
                <li key={file.path}>{file.path}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="mt-4">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 block w-full mt-1"
        />
      </div>

      <button
        className="mt-4 inline-block bg-[#006950] text-white font-bold rounded-md px-4 py-2 text-lg"
        onClick={handleUpload}
      >
        Upload
      </button>
    </div>
  );
}
