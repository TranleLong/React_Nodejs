import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import HomeIcon from '@mui/icons-material/Home'
import ThreeDRotation from '@mui/icons-material/ThreeDRotation'
import Button from '@mui/material/Button'
import { pink } from '@mui/material/colors'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="">Trần Lê Long</div>
      <Typography variant="body2" color="text.secondary">Test Typography</Typography>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <HomeIcon color="primary" />
      <HomeIcon color="secondary" />
      <HomeIcon color="success" />
      <HomeIcon color="action" />
      <HomeIcon color="disabled" />
      <HomeIcon sx={{ color: pink[500] }} />
      <AccessAlarmIcon/>
      <ThreeDRotation />
    </>
  )
}

export default App
