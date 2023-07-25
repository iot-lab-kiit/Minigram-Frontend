import React, { useState, useEffect, Fragment } from 'react';
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
import styles1 from '../styles/Loader.module.css'
import {format} from 'timeago.js';

export const FilteredPosts = ({filteredPosts}) => {
    
  const [fav, setFav] = useState(false);
  const [open, setOpen] = React.useState(false);
  const loading = false
  const handleClose = () => {
    setOpen(false);
  };
    
  const handleOpen = () => {
    setOpen(true);
  };
  const handleLike=()=>{
    if(!fav)
    setFav(true);
    else
    setFav(false);
  }
  return (
    <Fragment>
        
        <h1 className={'text-6xl font-bold text-start text-purple-500'}>{filteredPosts.length > 0 ? 'Filtered Posts' : 'No Posts Found'}</h1>
    <div className={`${styles.cardsContainer}  grid grid-cols-1 md:grid-cols-2 `}>
    { loading ? (
      <div className={styles1.loaderContainer}>
        <div className={styles1.customLoader}></div> 
      </div>
     ) : (
     filteredPosts?.map((post)=>(
         <Card className={`${styles.Card}`}>
        <div className={styles.header}>
          <Avatar className={styles.avatar} aria-label="recipe" src="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRiII9371KsNrl7NJMJiH1MSBljoseqOwOyce6SHU1D63HY3ay0gowModGJ4DeZ6ZlORYbDeFMI7oKkQGA" />
          <Typography className={styles.name} component="p">{post.creator.name} </Typography>
          <Typography className={styles.time} component="p">{format(post.createdAt)}</Typography>
        </div>
        <CardMedia component="img" className={styles.post} image={post.selectedFile} alt="Paella dish" />
        <div className={styles.iconContainer} >
          <IconButton aria-label="like" className='like'>
            {fav ?
              <FavoriteIcon style={{color:"red"}} className={styles.icon} onClick={handleLike} /> 
              :
              <FavoriteBorderIcon className={styles.icon} onClick={handleLike} />
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
          <ModalL post={post}/>
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
      ))
     )};
    </div>
      </Fragment>
    
  );
}


