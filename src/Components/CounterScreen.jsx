import React, { useState } from "react";
import Box from '@mui/material/Box';
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function CounterScreen() {

  const [value, setValue] = useState('')
  const [individualNumbers, setIndividualNumbers] = useState('')
  const [secondnputValue, setSecondInputValue] = useState('')
  const [foundValue, setFoundValue] = useState('')
  const [highlightingIndex, setHighilightingIndex] = useState("")

  const handleChangeValue = (event) => {
    const value = event.target.value
    setValue(value)

    const numbers = value
      .split(',')
      .map((item) => item.trim())
      .filter((item) => item !== '')
      .map(Number);

    setIndividualNumbers(numbers);
    setHighilightingIndex(null)
  }

  const secondInputChange = (event) => {
    setSecondInputValue(event.target.value)
    setFoundValue(event.target.value)
    setHighilightingIndex(null)
  }

  const handleFindClick = () => {
    const foundIndex = individualNumbers.findIndex(num => parseInt(num) === parseInt(foundValue));
    if (foundIndex !== -1) {
      setHighilightingIndex(foundIndex + 1);
    } else {
      setHighilightingIndex(-1);
    }
  };

  console.log(foundValue)
  return <Box>
    <Box><Divider>Time  2Hr</Divider>
    </Box>
    <Box mt={6}>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "5px" }}><TextField variant="outlined" size="small" placeholder="Add comma separated numbers" sx={{ width: "400px" }} value={value} onChange={handleChangeValue}></TextField><TextField TextField variant="outlined" size="small" type="number" sx={{ width: "150px" }} value={secondnputValue} onChange={secondInputChange}></TextField><Button variant="outlined" color="primary" onClick={handleFindClick}>Find</Button></Box>
    </Box>

    {
      individualNumbers.length > 0 ? (<Box sx={{ display: "flex", justifyContent: "center", mt: 5, gap: "10px" }}>{individualNumbers.map((num, index) => (
        <Box key={index} sx={{ display: "flex", alignItems: "center", justifyContent: "center", boxSizing: "border-box", backgroundColor: highlightingIndex !== null && num === highlightingIndex ? " red" : "yellow", height: "50px", width: "50px", gap: "10px" }}><Typography sx={{
          fontWeight: 400, fontSize: "25px",
          color: highlightingIndex !== null && num === highlightingIndex ? "#FFFF" : "#000"
        }}>{num}</Typography></Box>
      ))}</Box>) : (<></>)
    }
  </Box >;
}

export default CounterScreen;
