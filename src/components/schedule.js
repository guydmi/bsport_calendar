import * as React from 'react';
import { Divider, List } from '@mui/material';
import getCardData from '../api/getData';


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
                    <div style={{height: '160px', textAlign: 'left', paddingTop: '5px'}}>{hour}</div>
                    <Divider />
                </li>
            ))}
        </List> 
    </div>
  );
}