import React, { useState } from "react";
import styles from "../styles/UploadButton.module.css";

export default function Upload() {
  const [selectedFile, setSelectedFile] = useState<any | null>(null);
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFile(event.target.files);
    setIsFilePicked(true);
  };

  const handleSubmission = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", selectedFile);
    fetch("http://localhost:9090/post", {
      method: "POST",
      mode: "no-cors",
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => console.log("Success:", res))
      .catch((err) => console.error("Error:", err));
  };

  return (
    <div>
      <input
        className={styles.inputbutton}
        type="file"
        name="file"
        onChange={changeHandler}
      />
      <button className={styles.uploadbutton} onClick={handleSubmission}>
        Submit
      </button>
    </div>
  );
}
