'use client'

import { useContext } from 'react'
import { Button, Typography } from '@mui/material'
import { ReducerContext } from '@/app/(jared)/test/ReducerContext'

export const InOut = ({ person = 'Jared' }: { person?: string }) => {
  const { state, dispatch } = useContext(ReducerContext) ?? {}

  return (
    <>
      <Typography variant="body1">
        {person} is {Boolean(state?.isIn[person]) ? 'here' : 'away'}
      </Typography>
      <Button
        variant="outlined"
        onClick={() =>
          dispatch?.({ type: 'TogglePresence', payload: { name: person } })
        }
      >
        Toggle
      </Button>
    </>
  )
}
