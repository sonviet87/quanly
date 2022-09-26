import * as React from 'react';

import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import styled from '@emotion/styled';
import { useController } from 'react-hook-form';
import { FormControl, FormHelperText } from '@mui/material';

export default function BasicDatePicker({ name, lableText, control, ...inputProps }) {
    const {
        field,
        fieldState: { invalid, error },
    } = useController({
        name,
        control,
    });


    return (
        <FormControl>
            <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ m: 2 }}>
                <SlytedDatetimePicker
                    {...inputProps}

                    {...field}
                    label={lableText}
                    renderInput={(params) => <TextField {...params} helperText={error?.message}
                        error={!!error} />}
                // format="DD-MM-YYYY"

                />

            </LocalizationProvider>
        </FormControl>
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