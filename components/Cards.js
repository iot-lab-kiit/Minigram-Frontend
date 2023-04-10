import * as React from 'react';
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
import { typography } from '@mui/system';


export const Cards=(req, res) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className='Card1' sx={{ maxWidth: 345 }}>
      <div className="headContainer">
          <Avatar aria-label="recipe" src="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRiII9371KsNrl7NJMJiH1MSBljoseqOwOyce6SHU1D63HY3ay0gowModGJ4DeZ6ZlORYbDeFMI7oKkQGA">
          </Avatar>
          <div className='flex-container'>
          <Typography className='name' variant="h6" component="p">
            <strong>Mahendra Dhoni </strong>
          </Typography>
          <Typography className='caption' variant='h6' component="p">
           23min
          </Typography>
          </div>
          <IconButton className='settings' aria-label="settings">
            <MoreHorizIcon />
          </IconButton>
      </div>
      <div className='padding-container'>
        <CardMedia
          component="img" className='A'
          height="194"
          image="https://feeds.abplive.com/onecms/images/uploaded-images/2023/02/20/56c70f393e65f3fbc15b4ece31b7be6c167689957611424_original.jpg?impolicy=abp_cdn&imwidth=720"
          alt="Paella dish"
        />
        <div className='icon-container' >
          <IconButton aria-label="like" className='like'>
            <FavoriteBorderIcon className='icon' />
          </IconButton>

          <IconButton aria-label='Comment'>
            <TextsmsIcon className='icon' />
          </IconButton>

          <IconButton aria-label='Share'>
            <SendSharpIcon className='icon' />
          </IconButton>
        </div>

        <div className='Footer-container'>
          <Typography variant="h6" component="p">
            6456 likes
          </Typography>
          <div className='flex-container'>
          <Typography variant="h6" component="p">
            <strong>Mahendra Dhoni </strong>
          </Typography>
          <Typography className='caption' variant='h6' component="p">
            45 half century
          </Typography>
          </div>
          <Typography variant="h6" component="p">
            See translation
          </Typography>
          <Typography variant="h6" component="p">
            view all 86 comments
          </Typography>
          <Typography className='last' variant="h6" component="p">
            Add comments..
          </Typography>
        </div>
      </div>
    </Card>
  );
}
