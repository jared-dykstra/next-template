'use client'

import { useCallback, useState } from 'react'
import { Button } from '@mui/material'

export const InOut = ({ person = 'Jared' }: { person?: string }) => {
  const [isIn, setIsIn] = useState(true)
  const handleClick = useCallback(() => setIsIn((prev) => !prev), [])

  return (
    <div>
      <div>
        {person} is {isIn ? 'here' : 'away'}
      </div>
      <Button variant="outlined" onClick={handleClick}>
        Toggle
      </Button>
    </div>
  )
}
