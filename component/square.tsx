import React, { useState } from "react";
import type { NextPage } from "next";
import Header from "./header";
import Navbar from "./navbar";
import styles from "../styles/Square.module.css";
import uploadStyles from "../styles/UploadButton.module.css";
import img from "../asset/file_img.svg";
import Image from "next/image";

const Square: NextPage = () => {
  const [selectedFile, setSelectedFile] = useState<File | string>("");
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFile(event.target.files![0]);
    setIsFilePicked(true);
  };

  const handleSubmission = (event: React.MouseEvent<HTMLButtonElement>) => {
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
    <div style={{ display: "flex" }}>
      <span className={styles.square}>
        <Header />
        <Navbar />
      </span>
      <span style={{ marginTop: `auto`, marginBottom: `auto` }}>
        <div
          style={{
            right: "50px",
            width: "300px",
            position: "absolute",
            padding: "5px",
          }}
        >
          <label className={uploadStyles.uploadbutton}>
            <Image src={img} layout="fixed" width="50" height="50" />
            Upload File
            <input type="file" name="file" hidden onChange={changeHandler} />
          </label>
          <button
            className={uploadStyles.submitbutton}
            onClick={handleSubmission}
          >
            Submit
          </button>
        </div>
      </span>
    </div>
  );
};

export default Square;
