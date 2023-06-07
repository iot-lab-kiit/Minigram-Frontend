import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import styles from '../styles/FilterCard.module.css';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import TextsmsIcon from '@mui/icons-material/Textsms';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ModalL from './ModalL';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { format } from 'timeago.js';
import { filterPosts } from '../pages/api/api';

export const FilterCard = (req, res) => {
  const [fav, setFav] = useState(false);
  const [posts, setposts] = useState([])
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    filterPosts('Vocals').then((res) => {
      console.log(res);
      setposts(res.data);
    })
  }, [])
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div className={styles.cardsContainer}>
      {posts.map((post) => (
        <Card className={styles.Card}>
          <div className={styles.header}>
            <Typography className={styles.time} component="p">{format(post.createdAt)}</Typography>
          </div>
          <CardMedia component="img" className={styles.post} image={post.selectedFile} />
          <div className={styles.buttonContainer}>
            {post.tags.map((item,index)=>(
              <Button key={index} className={styles.button} variant="contained">{item}</Button>
              ))}
            </div>
          <div>
            <Typography className={styles.caption}>{post.message}</Typography>
          </div>
          <div className={styles.iconContainer} >
            <IconButton aria-label="like" className='like'>
              {fav ?
                <FavoriteIcon style={{ color: "red" }} className={styles.icon} onClick={() => setFav(!fav)} />
                :
                <FavoriteBorderIcon className={styles.icon} onClick={() => setFav(!fav)} />
              }
            </IconButton>
            <IconButton aria-label='Comment'><TextsmsIcon className={styles.icon} /></IconButton>
          </div>
          <div className={styles.footerContainer}>
            <Typography className={styles.likesComments} onClick={handleOpen}>{post.likes.length} likes</Typography>
            <Modal
              onClose={handleClose}
              open={open}
              style={{
                position: 'absolute',
                border: '2px solid #000',
                backgroundColor: 'gray',
                boxShadow: '2px solid black',
                height: 400,
                width: 400,
                margin: 'auto'
              }}
            >
              <ModalL />
            </Modal>
            <Typography className={styles.likesComments}>view all {post.comments.length} comments</Typography>
          </div>
        </Card>
      ))}
      
    </div>
  );
}
