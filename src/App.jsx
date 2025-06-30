import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import HomeIcon from '@mui/icons-material/Home'
import ThreeDRotation from '@mui/icons-material/ThreeDRotation'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import { deepOrange, deepPurple, pink } from '@mui/material/colors'
import { useColorScheme } from '@mui/material/styles'
import * as React from 'react'
import { pink } from '@mui/material/colors'
import Typography from '@mui/material/Typography'
import { useState } from 'react'

// hàm để chuyển hình nền sang trắng , đen
function ModeToggle() {
  const { mode, setMode } = useColorScheme(); // đã hỗ trợ lưu local storage
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light');
        // localStorage.setItem('trello-dark-light-mode')
        // localStorage.GetItem('trello-dark-light-mode')
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="">Trần Lê Long</div>
      <ModeToggle/>
      <hr></hr>
      <div className="">
        <Avatar>H</Avatar>
        <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
        <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
      </div>
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
