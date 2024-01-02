/** @jsxImportSource @emotion/react */
'use client'

import { Paper, Typography } from '@mui/material'
import { css } from '@emotion/react'
import { InOut } from '@/components/InOut'

const TestPage = () => {
  return (
    <Paper
      css={css`
        width: 80%;
        margin: 50px auto;
        padding: 40px;
      `}
    >
      <Typography variant="h1">The Test Page</Typography>
      <InOut />
    </Paper>
  )
}

export default TestPage
