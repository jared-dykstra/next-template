'use client'

import { useCallback, useState } from 'react'
import { Button, Typography } from '@mui/material'

export const InOut = ({ person = 'Jared' }: { person?: string }) => {
  const [isIn, setIsIn] = useState(true)
  const handleClick = useCallback(() => setIsIn((prev) => !prev), [])

  return (
    <>
      <Typography variant="body1">
        {person} is {isIn ? 'here' : 'away'}
      </Typography>
      <Button variant="outlined" onClick={handleClick}>
        Toggle
      </Button>
    </>
  )
}
