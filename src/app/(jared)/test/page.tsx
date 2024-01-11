/** @jsxImportSource @emotion/react */
'use client'

import { Paper, Typography } from '@mui/material'
import { css } from '@emotion/react'
import { InOut } from '@/components/InOut'
import { useReducer } from 'react'
import { reducer, initialState } from './reducer'
import { ReducerContext } from './ReducerContext'

const TestPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <ReducerContext.Provider value={{ state, dispatch }}>
      <Paper
        css={css`
          width: 80%;
          margin: 50px auto;
          padding: 40px;
        `}
      >
        <Typography variant="h1">The Test Page</Typography>
        <InOut person="Alice" />
        <InOut person="Bob" />
      </Paper>
    </ReducerContext.Provider>
  )
}

export default TestPage
