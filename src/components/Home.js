import React from 'react'
import { Outlet } from 'react-router-dom'
import PageParent from './layouts/PageParent'
import { Stack, Typography } from '@mui/material'

const Home = () => {
    return (
        <PageParent>

            <Stack sx={{gap: 0}}>
                <Typography variant='h1'>Bank<br />Cards</Typography>
                <Typography variant='h3'>Balance</Typography>
                <Typography variant='h2'>$2,748.00</Typography>
            </Stack>
        </PageParent>
    )
}

export default Home