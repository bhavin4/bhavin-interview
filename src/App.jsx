import { useState } from 'react'
import './App.css'
import CounterScreen from './Components/CounterScreen';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}><CounterScreen /></Box>
    </Container>
  )
}

export default App
