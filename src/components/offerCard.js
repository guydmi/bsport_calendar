import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';


export default function OfferCard(props) {
    const timeHeight = props.cardData.duration * 3
    const delay = props.cardData.min_start * 0.3
    const color = props.cardData.meta_activity_color
  return (
    <Card sx={{ height: timeHeight, mt: delay, width: 600, bgcolor: color}} style={{overflow:'scroll', backgroundColor: color}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.cardData.location}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.cardData.name}
        </Typography>
        <Typography variant="body2">
          duree: {props.cardData.duration}, debut: {props.cardData.hour_start} : {props.cardData.min_start}
        </Typography>
        <div>
            <Typography>{props.cardData.coach.name}</Typography>
            <img src={props.cardData.coach.photo} alt="" width="100" height="100" />
        </div>
      </CardContent>
    </Card>
  );
}

OfferCard.propTypes = {
    cardData: PropTypes.shape({
        duration: PropTypes.number,
        name: PropTypes.string,
        hour_start: PropTypes.number,
        min_start: PropTypes.number,
        coach: PropTypes.shape({
            name: PropTypes.string,
            photo: PropTypes.string
        }),
        location: PropTypes.string,
        meta_activity_color: PropTypes.string
    })
}