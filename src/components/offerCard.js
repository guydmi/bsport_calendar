import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';


export default function OfferCard(props) {
    const timeWidth = props.duration * 20
  return (
    <Card sx={{ width: timeWidth }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.location}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.name}
        </Typography>
        <Typography variant="body2">
          {props.duration}, {props.startTime}:{props.endTime}
        </Typography>
        <div>
            <Typography>{props.coach.name}</Typography>
            <Typography>{props.coach.img}</Typography>
        </div>
      </CardContent>
      <CardActions>
        <Button size="small">See participant</Button>
      </CardActions>
    </Card>
  );
}

OfferCard.propTypes = {
    duration: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    startTime: PropTypes.string,
    endTime: PropTypes.strimg,
    coach: PropTypes.shape({
        name: PropTypes.name,
        img: PropTypes.string
    }),
    location: PropTypes.string
}