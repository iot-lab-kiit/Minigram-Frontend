import React from "react";
import { useRef, useState } from "react";
// import TagsInput from "../components/TagsInput";
import Image from "next/image";
import styles from "../styles/createPost.module.css";
import { useRouter } from "next/router";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import { Box, TextField, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";
const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "purple",
  },
  "& label": {
    color: "black",
    fontSize: "1.25rem",
  },
  "& .css-1rcvvn7-MuiInputBase-root-MuiInput-root:after": {
    borderBottom: "2px solid purple",
  },
  "& .MuiFormHelperText-root": {
    color: "black",
    fontSize: "1rem",
  },
  "& .MuiInputBase-colorPrimary": {
    color: "purple",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "1px solid black",
    },
  },
});
function createpost() {
  const inputRef = useRef(null);
  const router = useRouter();
  const [image, setImage] = useState();
  const [filter, setFilter] = useState("");
  const [caption, setCaption] = useState("");
  // console.log(tags);
  // const handleTagChange = (event) => {
  //   const value = event.target.value;
  //   setTags(typeof value === "string" ? value.spilt(",") : value);
  // };
  const handleFilterChange = (event) => {
    const { value } = event.target;
    setFilter(value);
  };
  function handleImageChange(event) {
    const file = event.target.files[0];
    console.log(file);
    setImage(file);
  }
  function handleImageClick() {
    inputRef.current.click();
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Image successfully submitted");
    alert("Image submitted sucessfully");
    router.push("/");
  }
  const [tags, setTags] = React.useState([]);
  const removeTags = (indexToRemove) => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)]);
  };
  const addTags = (event) => {
    if (event.target.value !== "") {
      setTags([...tags, event.target.value]);
      // selectedTags([...tags, event.target.value]);
      event.target.value = "";
    }
  };
  return (
    <div className={styles.miniGramCreatePost}>
      <div className={styles.miniGramCreatePostOuterContainer}>
        <div className={styles.miniGramCreatePostInner1Container}>
          <div className={styles.miniGramCreatePostForm}>
            {/* <Box width="17.36vw" className={styles.box}>
              <CssTextField
                label="Tags"
                select
                SelectProps={{
                  multiple: true,
                }}
                size="small"
                color="secondary"
                variant="standard"
                defaultValue=""
                value={tags}
                onChange={handleTagChange}
                fullWidth
              >
                <MenuItem value="#ipl">#ipl</MenuItem>
                <MenuItem value="#pubg">#pubg</MenuItem>
                <MenuItem value="#parliament">#parliament</MenuItem>
                <MenuItem value="#nature">#nature</MenuItem>
                <MenuItem value="#AI">#AI</MenuItem>
                <MenuItem value="#gaming">#gaming</MenuItem>
                <MenuItem value="#valorant">#valorant</MenuItem>
                <MenuItem value="#global warming">#global warming</MenuItem>
                <MenuItem value="#interet">#interet</MenuItem>
                <MenuItem value="#anime">#anime</MenuItem>
              </CssTextField>
            </Box> */}
            {/* <TagsInput
              selectedTags={selectedTags}
              tags={["Nodejs", "MongoDB"]}
            /> */}
            <Box width="17.36vw" className={styles.box}>
              <CssTextField
                id="standard-multiline-static"
                label="Caption"
                multiline
                rows={3}
                variant="standard"
                fullWidth
                value={caption}
                helperText="Enter the snappy caption😎"
                onChange={(e) => {
                  setCaption(e.target.value);
                }}
              />
            </Box>
            <Box width="17.36vw" className={styles.box}>
              <CssTextField
                label="Filters"
                select
                size="small"
                color="secondary"
                variant="standard"
                value={filter}
                defaultValue=""
                onChange={handleFilterChange}
                fullWidth
              >
                <MenuItem value="Culture">Culture</MenuItem>
                <MenuItem value="Business">Business</MenuItem>
                <MenuItem value="Education">Education</MenuItem>
                <MenuItem value="Health">Health</MenuItem>
                <MenuItem value="News">News</MenuItem>
                <MenuItem value="Science">Science</MenuItem>
                <MenuItem value="Religion">Religion</MenuItem>
                <MenuItem value="Dev">Dev</MenuItem>
                <MenuItem value="Sports">Sports</MenuItem>
                <MenuItem value="Crime">Crime</MenuItem>
              </CssTextField>
            </Box>
            <div className={styles.multitags}>
            <div className={styles.tagsInput}>
              <ul className={styles.tags}>
                {tags.map((tag, index) => (
                  <li key={index} className={styles.tag}>
                    <span className={styles.tagTitle}>{tag}</span>
                    <span
                      className={styles.tagcloseicon}
                      onClick={() => removeTags(index)}
                    >
                      x
                    </span>
                  </li>
                ))}
              </ul>
              <input
                type="text"
                onKeyUp={(event) =>
                  event.key === "Enter" ? addTags(event) : null
                }
                placeholder="Press enter to add tags"
              />
            </div>
            <p>Spotlights🔦</p>
            </div>  
          </div>
        </div>
        <div className={styles.miniGramCreatePostInner2Container}>
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
                  width: "24.027vw",
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
          {image && (
            <button
              onClick={handleSubmit}
              type="submit"
              className={styles.miniGramUploadButton}
            >
              Upload
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default createpost;
