import * as React from 'react';
import { Divider, List } from '@mui/material';

export default function Schedule() {
    const listHours = Array.from({length:25},(v,k)=>k)
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <List 
        sx={{ width: '80%'}}>
            {listHours.map((hour) => (
                <li>
                    <div style={{height: '160px', textAlign: 'left', paddingTop: '5px'}}>{hour}</div>
                    <Divider />
                </li>
            ))}

        </List> 
    </div>
  );
}