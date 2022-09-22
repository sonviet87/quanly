import * as React from 'react';

import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import styled from '@emotion/styled';

export default function BasicDatePicker({ lable, ...props }) {
    const [value, setValue] = React.useState(null);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ m: 2 }}>
            <SlytedDatetimePicker
                size="small"

                label={lable}
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    );
}

export const SlytedDatetimePicker = styled(DatePicker)(({ theme }) => ({
    '& .MuiInputLabel-root': {
        top: '-8px'
    },
    '& .MuiInputBase-input': {
        padding: '8px 10px'
    },
    margin: '0 5px'
}))