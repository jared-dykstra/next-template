/** @jsxImportSource @emotion/react */
'use client'

import { Paper } from "@mui/material";
import { css } from '@emotion/react';
import InOut from "../../_components/InOut";

export default () => (
    <Paper css={css`
            width: 80%;
            margin: 50px auto;
            padding: 40px;
        `}>
        <div>The Test Page</div>
        <InOut />
    </Paper>
)
