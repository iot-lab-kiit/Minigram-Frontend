import React from "react";
import { useRef, useState,useEffect } from "react";
import Image from "next/image";
import styles from "../styles/createPost.module.css";
import styles1 from "../styles/Loader.module.css";
import { useRouter } from "next/router";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import { Box, TextField, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import FileBase from 'react-file-base64'
import ReactImageFileToBase64 from 'react-file-image-to-base64' 
import {createPost} from "./api/api.js";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "purple",
  },
  "& label": {
    color: "black",
    fontSize: "1.5rem",
  },
  "& .css-1rcvvn7-MuiInputBase-root-MuiInput-root:after": {
    borderBottom: "2px solid purple",
  },
  "& .MuiFormHelperText-root": {
    color: "black",
    fontSize: "1.3rem",
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
  const [post, setPost] = useState({creator: "", message: "", filter: "", selectedFile: "", tags: []});
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user_info'));
    const userid = user.result._id;
    console.log(tags);
    console.log(userid);

    const updatedPost = {...post,creator: userid,tags: tags,};

    console.log(updatedPost);

    await createPost(updatedPost).then((res) => {
        console.log(res.data);
      }).catch((error) => {
        console.log(error);
      });

    router.push("/");
  };

  const CustomisedButton = ({ triggerInput }) => {
    return (
           <div className={styles.miniGramCreatePostInnerContainer} onClick={triggerInput}>
                <h1>Choose an image</h1>
                <FileUploadOutlinedIcon className={styles.miniGramCreatePostUploadIcon} />
              </div>
    );
};

//sets and unsets tags
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


  function handleFileInputChange(event) {
    const file = event.target.files[0];
  
    const reader = new FileReader();
  
    reader.onloadend = () => {
      const base64 = reader.result;
      setPost((prevPost) => ({
        ...prevPost,
        selectedFile: base64,
      }));
    };
  
    reader.readAsDataURL(file);
  }
  
  
  return (
    <div className={styles.miniGramCreatePost}>

      <div className={styles.miniGramCreatePostOuterContainer}>
        <div className={styles.miniGramCreatePostInner1Container}>
          <div className={styles.miniGramCreatePostForm}>
            <Box width="17.36vw" className={styles.box}>
              <CssTextField
                id="standard-multiline-static"
                label="Caption"
                multiline
                rows={4}
                variant="standard"
                fullWidth
                value={post.message}
                helperText="Enter the snappy caption😎"
                onChange={(e) => {
                  setPost({...post,message: e.target.value});
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
                value={post.filter}
                defaultValue=""
                onChange={(e) => {
                  setPost({...post,filter: e.target.value});
                }}
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
          </div>
        </div>
        <div className={styles.miniGramCreatePostInner2Container}>
          <div
            className={styles.miniGramCreatePostContainer}

          >
            {post.selectedFile ? (
              <Image alt="" src={post.selectedFile} height="200" width="200" style={{ height: "auto", width: "24.027vw", objectFit: "contain", position: "relative" }} />
            ) : (
              <ReactImageFileToBase64 onCompleted={(files)=>setPost({...post, selectedFile: files[0].base64_file})} CustomisedButton={CustomisedButton} multiple={true} />
            )}
          </div>
          {post.selectedFile && (
            <button onClick={handleSubmit} type="submit"className={styles.miniGramUploadButton}>
              Upload
            </button>
          )}
        </div>
      }
    </div>
  );
}

export default createpost;
