import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Input = props => {
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    id={props.id}
                    label={props.label}
                    type={props.type}
                    value={props.value}
                    onChange={props.onChange}
                />
            </div>
        </Box >
    )
};

export default Input;