import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styled from '@emotion/styled';

export default function BasicSelect({ name, label, control, options = [], ...inputProps }) {



    return (

        <FormControl
            sx={{ minWidth: 120, marginBottom: '8px' }}
            fullWidth
            size="small"
        >
            <InputLabel id={`select-${name}`}>{label}</InputLabel>
            <SlytedSelect labelId={`select-${name}`} label={label} >

                {options.map((row, i) => (
                    <MenuItem key={i} value={row.value}>
                        {row.label}
                    </MenuItem>
                ))}
            </SlytedSelect>

        </FormControl>

    );
}

export const SlytedSelect = styled(Select)(({ theme }) => ({
    '& .MuiSelect-select': {
        padding: '8px 14px'
    },
    margin: '0 5px'
}))