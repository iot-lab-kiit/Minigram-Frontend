import React from "react";
import { useRef, useState } from "react";
import Image from "next/image";
import UploadImg from "../public/next.svg";
import styles from "../styles/createPost.module.css";
import { useRouter } from 'next/router';
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
function createpost() {
  const inputRef = useRef(null);
  const router =useRouter();
  const [image, setImage] = useState();
  function handleImageClick() {
    inputRef.current.click();
  }
  function handleImageChange(event) {
    const file = event.target.files[0];
    console.log(file);
    setImage(file);
  }
  function handleSubmit(e){
    e.preventDefault();
    console.log("Image successfully submitted");
    alert("Image submitted sucessfully");
    router.push("/");
  }
  return (
    <div className={styles.miniGramCreatePost}>
      <div
        className={styles.miniGramCreatePostContainer}
        onClick={handleImageClick}
      >
        {image ? (
            <Image
              alt=""
              src={URL.createObjectURL(image)}
              height="200"
              width="200"
              style={{
                height: "auto",
                width: "34.027vw",
                objectFit: "contain",
                position: "relative",
              }}
            />
        ) : (
          <div className={styles.miniGramCreatePostInnerContainer}>
            <h1>Choose an image</h1>
            <FileUploadOutlinedIcon
              className={styles.miniGramCreatePostUploadIcon}
            />
          </div>
        )}

        <input type="file" onChange={handleImageChange} ref={inputRef} />
      </div>
      {image && <button onClick={handleSubmit} type="submit" className={styles.miniGramUploadButton}>Upload</button>}
    </div>
  );
}

export default createpost;
