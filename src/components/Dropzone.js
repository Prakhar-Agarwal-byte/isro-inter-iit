import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button, Alert } from "reactstrap";
import axios from "axios";

export default function Accept(props) {
  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    useDropzone({
      accept: ".txt, .csv, .cdf, .fits",
      maxFiles: 1,
    });

  const [isSuccess, setIsSuccess] = useState(true);

  const handleUploadClick = () => {
    if (acceptedFiles.length !== 1) {
      setIsSuccess(false);
      return;
    }
    setIsSuccess(true);

    const formData = new FormData();

    // Update the formData object
    formData.append("myFile", acceptedFiles[0], acceptedFiles[0].name);

    // Details of the uploaded file
    console.log(acceptedFiles[0]);

    // Request made to the backend api
    // Send formData object
    axios
      .post("https://isro-inter-iit.herokuapp.com/uploads", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const acceptedFileItems = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
      <ul>
        {errors.map((e) => (
          <li key={e.code}>{e.message}</li>
        ))}
      </ul>
    </li>
  ));

  return (
    <section className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
        <p className="text-danger">
          *only ASCII, FITS, CDF, and CSV files are allowed
        </p>
      </div>
      <Button color="primary" size="lg" onClick={handleUploadClick}>
        Upload
      </Button>
      {!isSuccess && (
        <Alert color="danger">Please choose only one accepted file</Alert>
      )}
      <aside>
        <h4>Accepted files</h4>
        <ul>{acceptedFileItems}</ul>
        <h4>Rejected files</h4>
        <ul>{fileRejectionItems}</ul>
      </aside>
    </section>
  );
}
