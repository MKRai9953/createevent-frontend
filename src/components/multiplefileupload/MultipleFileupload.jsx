import React, { useState } from "react";
import "./MultipleFileupload.css";
import useEvents from "../../hooks/useEvents";

const MultipleFileUpload = () => {
  const [files, setFiles] = useState([]);
  const { setEvents } = useEvents();

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    const filePreviews = selectedFiles.map((file) => ({
      file,
      id: URL.createObjectURL(file), // Use URL.createObjectURL as a unique ID
    }));
    setFiles((prevFiles) => [...prevFiles, ...filePreviews]);

    // Update the event state with the new files
    setEvents((prevEvents) => ({
      ...prevEvents,
      files: [...prevEvents.files, ...selectedFiles],
    }));
  };

  const handleDelete = (fileId) => {
    setFiles((prevFiles) =>
      prevFiles.filter((filePreview) => filePreview.id !== fileId)
    );

    // Update the event state to remove the deleted file
    setEvents((prevEvents) => ({
      ...prevEvents,
      files: prevEvents.files.filter(
        (file) => URL.createObjectURL(file) !== fileId
      ),
    }));
  };

  return (
    <div>
      <h5>Upload Attachments</h5>
      <div className="file-upload-container">
        <input type="file" multiple onChange={handleFileChange} />
        {files.length > 0 && <hr />}
        <div>
          {files.map((filePreview, index) => (
            <div key={index} className="file-item">
              <div className="check-symbol">✓</div>
              <p className="file-name">{filePreview.file.name}</p>
              <p className="file-size">
                {(filePreview.file.size / 1024).toFixed(2)} KB
              </p>
              <button
                className="delete-button"
                onClick={() => handleDelete(filePreview.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MultipleFileUpload;
