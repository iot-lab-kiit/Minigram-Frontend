import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader, { cardHeaderClasses } from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TextsmsIcon from '@mui/icons-material/Textsms';
import SendSharpIcon from '@mui/icons-material/SendSharp';
import styles from '../styles/Cards.module.css'


export const Cards = (req, res) => {
  const numbers = [1, 2, 3, 4, 5]
  const [fav, setFav] = useState(false);
  return (
    <div className={styles.cardsContainer}>
      {numbers.map(()=>(
      <Card className={styles.Card}>
        <div className={styles.header}>
          <Avatar aria-label="recipe" sx={{ width: "40px" }} src="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRiII9371KsNrl7NJMJiH1MSBljoseqOwOyce6SHU1D63HY3ay0gowModGJ4DeZ6ZlORYbDeFMI7oKkQGA" />
          <Typography className={styles.name} component="p">Mahendra Singh Dhoni</Typography>
          <Typography className={styles.time} component="p">23min</Typography>
        </div>
        <CardMedia component="img" className={styles.post} image="https://feeds.abplive.com/onecms/images/uploaded-images/2023/02/20/56c70f393e65f3fbc15b4ece31b7be6c167689957611424_original.jpg?impolicy=abp_cdn&imwidth=720" alt="Paella dish" />
        <div className={styles.iconContainer} >
          <IconButton aria-label="like" className='like'>
            {fav ?
              <FavoriteIcon className={styles.icon} onClick={() => setFav(!fav)} />
              :
              <FavoriteBorderIcon className={styles.icon} onClick={() => setFav(!fav)} />
            }
          </IconButton>
          <IconButton aria-label='Comment'><TextsmsIcon className={styles.icon} /></IconButton>
          <IconButton aria-label='Share'><SendSharpIcon className={styles.icon} /></IconButton>
        </div>
        <div className={styles.footerContainer}>
           <Typography className={styles.likesComments}>6456 likes</Typography>
           <div className={styles.flexContainer}>
            <Typography className={styles.nameInfo}>Mahendra Dhoni</Typography>
            <Typography className={styles.caption}>45 half century</Typography>
           </div>
           <Typography className={styles.likesComments}>view all 86 comments</Typography>
           <input type="text" placeholder="Add Comments..." className={styles.addComments}/>
         </div>
      </Card>
      ))}
    </div>





    // <div className={styles.cardsContainer}>
    //   {numbers.map((number)=>(
    // <Card className={styles.Card1}>
    //   <div className={styles.headContainer}>
    //       <Avatar aria-label="recipe" src="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRiII9371KsNrl7NJMJiH1MSBljoseqOwOyce6SHU1D63HY3ay0gowModGJ4DeZ6ZlORYbDeFMI7oKkQGA">
    //       </Avatar>
    //       <div className={styles.flexContainer}>
    //       <Typography className={styles.name} variant="h6" component="p">
    //         <strong>Mahendra Dhoni </strong>
    //       </Typography>
    //       <Typography className={styles.caption} variant='h6' component="p">
    //        23min
    //       </Typography>
    //       </div>
    //       <IconButton className={styles.settings} aria-label="settings">
    //         <MoreHorizIcon />
    //       </IconButton>
    //   </div>
    //   <div className={styles.paddingContainer}>
    //     <CardMedia
    //       component="img" className={styles.post}
    //       height="194"
    //       image="https://feeds.abplive.com/onecms/images/uploaded-images/2023/02/20/56c70f393e65f3fbc15b4ece31b7be6c167689957611424_original.jpg?impolicy=abp_cdn&imwidth=720"
    //       alt="Paella dish"
    //     />
    //     <div className={styles.iconContainer} >
    //       <IconButton aria-label="like" className='like'>
    //         <FavoriteBorderIcon className={styles.icon} />
    //       </IconButton>

    //       <IconButton aria-label='Comment'>
    //         <TextsmsIcon className={styles.icon} />
    //       </IconButton>

    //       <IconButton aria-label='Share'>
    //         <SendSharpIcon className={styles.icon} />
    //       </IconButton>
    //     </div>

    //     <div className={styles.footerContainer}>
    //       <Typography variant="h6" component="p">
    //         6456 likes
    //       </Typography>
    //       <div className={styles.flexContainer}>
    //       <Typography variant="h6" component="p">
    //         <strong>Mahendra Dhoni </strong>
    //       </Typography>
    //       <Typography className={styles.caption} variant='h6' component="p">
    //         45 half century
    //       </Typography>
    //       </div>
    //       <Typography variant="h6" component="p">
    //         See translation
    //       </Typography>
    //       <Typography variant="h6" component="p">
    //         view all 86 comments
    //       </Typography>
    //       <Typography className='last' variant="h6" component="p">
    //         Add comments..
    //       </Typography>
    //     </div>
    //   </div>
    // </Card>
    // ))}
    // </div>
  );

}


