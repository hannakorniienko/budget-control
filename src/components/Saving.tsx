import { useEffect, useState } from 'react'
import { TextField, Box} from '@mui/material'

import '../styles/saving.css'
import { savingProps } from '../types/saving'


const Saving = ({saving}: savingProps) => {
  const [target, setTarget] = useState(0)
  useEffect(() =>{
  }, [])
  const progress = (Math.round(saving/target*100)) || 0
  return (
    <Box>
      <p>Current saving: {saving}</p>
      <p>Current target: {target}</p>
      <p>Progress: {progress}%</p>
      <progress value={saving} max={target}/>
      <Box
      component="form">
      <TextField 
        label="Set target"
        type="number" 
        name='target'
        onChange={(e) => setTarget(Number(e.target.value))}/>
      </Box>
    </Box>
  )
}

export default Saving