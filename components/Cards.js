import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ModalL from './ModalL';
import Modal from '@mui/material/Modal'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import TextsmsIcon from '@mui/icons-material/Textsms';
import SendSharpIcon from '@mui/icons-material/SendSharp';
import styles from '../styles/Cards.module.css';
import {fetchPosts,likePost} from '../pages/api/api';
import {format} from 'timeago.js';

export const Cards = (req,res, gridbase) => {
  const [fav, setFav] = useState(false);
  const [posts,setposts]=useState([])
  const [showComponent,setShowComponent]=useState(false);
  const [open, setOpen] = React.useState(false);
  useEffect(()=>{
    fetchPosts().then((res)=>{
      console.log(res);
      setposts(res.data);
    })
  },[])
  const handleClose = () => {
    setOpen(false);
  };
    
  const handleOpen = () => {
    setOpen(true);
  };


  return (
    <div className={styles.cardsContainer}>
      {posts.map((post)=>(
      <Card className={styles.Card}>
        <div className={styles.header}>
          <Avatar className={styles.avatar} aria-label="recipe" src="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRiII9371KsNrl7NJMJiH1MSBljoseqOwOyce6SHU1D63HY3ay0gowModGJ4DeZ6ZlORYbDeFMI7oKkQGA" />
          <Typography className={styles.name} component="p">{post.creator.name} </Typography>
          <Typography className={styles.time} component="p">{format(post.createdAt)}</Typography>
        </div>
        <CardMedia component="img" className={styles.post} image={post.selectedFile} alt="Paella dish" />
        <div className={styles.iconContainer} >
          <IconButton aria-label="like" className='like'>
            {fav ?
              <FavoriteIcon style={{color:"red"}} className={styles.icon} onClick={() => setFav(!fav)} />
              :
              <FavoriteBorderIcon className={styles.icon} onClick={() => setFav(!fav)} />
            }
          </IconButton>
          <IconButton aria-label='Comment'><TextsmsIcon className={styles.icon} /></IconButton>
          <IconButton aria-label='Share'><SendSharpIcon className={styles.icon} /></IconButton>
        </div>
        <div className={styles.footerContainer}>
           <Typography className={styles.likesComments} onClick={handleOpen}>{post.likes.length} likes</Typography>
           <Modal
            onClose={handleClose}
            open={open}
          >
          <ModalL/>
          </Modal>
           <div className={styles.flexContainer}>
            <Typography className={styles.nameInfo}>{post.creator.name}</Typography>
            <Typography className={styles.caption}>{post.message}</Typography>
           </div>
           <Typography className={styles.likesComments}>view all {post.comments.length} comments</Typography>
            <div className={styles.addComments}>
              <input type="text" placeholder="Add Comments..." className={styles.postcomment}/>
              <IconButton aria-label='add comment'><ArrowOutwardIcon/></IconButton>
            </div>
         </div>
      </Card>
      ))}
    </div>
  );
}


