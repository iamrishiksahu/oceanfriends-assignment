import { Stack, Typography } from '@mui/material'
import React from 'react'

const TopBar = () => {
    return (
        <Stack direction={'row'} justifyContent={'space-between'} sx={{
            padding: '0.25rem 1rem'
        }}>
            <Stack direction={'row'}>

                <Typography fontWeight={700} fontSize={'0.8rem'}>9:41</Typography>
            </Stack>

            <Stack direction={'row'} gap='0.5rem'>
                <i class="fi fi-sr-signal-alt-2"></i>
                <i class="fi fi-bs-wifi"></i>
                <i class="fi fi-rs-battery-full"></i>
            </Stack>


        </Stack>
    )
}

export default TopBar