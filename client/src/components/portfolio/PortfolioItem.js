import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PortfolioItemEdit from './PortfolioItemEdit'

const styles = {
  card: {
    maxWidth: 500,
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'F4FFFD'
  },
  media: {
    height: 250,
    width: 250
  },
};

const PortfolioItemView = (props) => {

  const [editFlag, setEditShow] = useState(false);
  //let [, updateState] = useState();

  const { classes } = props;
  const { title, description, type, custom_link, api_link, thumbnail } = props.data

  const closeModal = () => {
    setEditShow(false);
  }

  const refreshPortfolioItem = () => {
    setEditShow(false);
    props.refetch();
    //updateState();
  }

  return (
  <div className='pizza'>
    <PortfolioItemEdit 
      editFlag={editFlag}
      closeModal={closeModal}
      portfolioData = {props.data}
      refreshPortfolioItem = {refreshPortfolioItem}
    />
    <Card className={classes.card}>
      {/* <CardActionArea> */}
      <CardMedia 
        className={classes.media}
        image={thumbnail}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Title: {title}
        </Typography>

        <Typography variant="subtitle1" color="textSecondary">
          Description: {description}
        </Typography>

        <Typography variant="subtitle1" color="textSecondary">
          Type: {type}
        </Typography>
        
        <Typography variant="subtitle1" color="textSecondary">
          Custom Link: {custom_link}
        </Typography>

        <Typography variant="subtitle1" color="textSecondary">
          API Link: {api_link}
        </Typography>
        <Button
          onClick={() => setEditShow(true)}
          type="submit" variant="contained" size="small" color="primary">
            Edit
        </Button> 
       

        </CardContent>
    {/* </CardActionArea> */}
    
    </Card>
    <p></p>
  </div>
  )
}

export default withStyles(styles)(PortfolioItemView);
