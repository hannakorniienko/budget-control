import React, { useState } from 'react'
import { savingProps } from '../types/saving'

const Saving = ({saving}: savingProps) => {
  const [target, setTarget] = useState(0)
  return (
    <div>
      <p>Current saving: {saving}</p>
      <p>Current target: {target}</p>
      <progress value={saving} max={target}/>
      <form>
      <label htmlFor="">Set target</label>
      <input type="number" name='target' id='target' onChange={(e) => setTarget(Number(e.target.value))}/>
      </form>
    </div>
  )
}

export default Saving