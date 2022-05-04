import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect(props) {
  const [material, setMaterial] = React.useState('');

  const handleChange = (event) => {
    setMaterial(event.target.value);
  };

  return (
    <Box className={props.className}>
      <FormControl fullWidth>
        <InputLabel id="label">Material</InputLabel>
        <Select
          labelId="label"
          id="demo-simple-select"
          value={material}
          label="Material"
          onChange={handleChange}
        >
          <MenuItem value={10}>PPR PN10</MenuItem>
          <MenuItem value={20}>PPR PN16</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
