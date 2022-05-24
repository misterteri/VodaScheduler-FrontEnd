import React, { useState } from "react";
import type { NextPage } from "next";
import Header from "./header";
import styles from "../styles/Square.module.css";
import uploadStyles from "../styles/UploadButton.module.css";
import img from "../asset/file_img.svg";
import Image from "next/image";
import Title from "./title";

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
    <div className={styles.square}>
      <Header />
      <Title />
      <div
        style={{
          marginLeft: `2rem`,
          margin: `2rem`,
          width: "300px",
          padding: "5px",
        }}
      >
        <label className={uploadStyles.uploadbutton}>
          <Image height={25} width={25} src={img} />

          <span
            style={{
              padding: `auto`,
              marginTop: `auto`,
              marginBottom: `auto`,
            }}
          >
            Upload File
          </span>
          {/* THE BUTTON INPUT */}
          <input type="file" name="file" hidden onChange={changeHandler} />
        </label>

        <button
          className={uploadStyles.submitbutton}
          onClick={handleSubmission}
        >
          <span
            style={{
              padding: `auto`,
              marginTop: `auto`,
              marginBottom: `auto`,
            }}
          >
            Submit
          </span>
        </button>
      </div>
    </div>
  );
};

export default Square;
