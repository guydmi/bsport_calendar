import * as React from 'react';
import { Divider, List } from '@mui/material';
import getCardData from '../api/getData';
import OfferCard from './offerCard';


export default function Schedule(props) {
    const listHours = Array.from({length:25},(v,k)=>k)
    const [cardData, setCardData] = React.useState([])
    const date = props.date

    React.useEffect(() => {
        async function fetchData() {
            const res = await getCardData(date)
            setCardData(res)
        }
        fetchData()
    }, [date])
    console.log(cardData)

    

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <List 
        sx={{ width: '80%'}}>
            {listHours.map((hour) => (
                <li key={hour}>
                    <div style={{maxHeight: '180px', minHeight: '180px', display:'flex', flexDirection:'row'}}>
                        <div style={{maxHeight: '180px', minHeight: '180px', textAlign: 'left', paddingTop: '5px', width: '15px'}}>{hour}</div>
                        <div style= {{display: 'flex', marginLeft: 'auto',marginRight: 'auto', gap: '20px'}}>
                            {cardData.filter(cd => cd.hour_start === hour).map((cd) => {
                                return (
                                    <OfferCard cardData={cd} />
                                )
                            })}
                        </div>
                    </div>
                    <Divider />
                </li>
            ))}
        </List> 
    </div>
  );
}