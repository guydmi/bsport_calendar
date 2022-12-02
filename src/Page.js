import * as React from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Schedule from './components/schedule';

export default function Page() {
    const [value, setValue] = React.useState(new Date().toISOString());

  return (
    <div style={{marginTop: "30px"}}>
        <div style={{ paddingLeft: '45%' }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                label="Pick a date"
                value={value}
                minDate={dayjs('2017-01-01')}
                onChange={(newValue) => {
                    setValue(newValue.toISOString());
                }}
                renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </div>
        
        <Schedule date={value} />
    </div>
    
  );
}