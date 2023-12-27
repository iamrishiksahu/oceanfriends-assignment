import React from 'react'
import CreditCard from './cards/CreditCard'
import { Box, Stack, Typography } from '@mui/material'
import styled from '@emotion/styled'
import PageParent from './layouts/PageParent'

const CardDetails = () => {
    return (
        <PageParent>
            <Typography variant='h1'>
                Salary<br />Card
            </Typography>
            <CreditCard
                number='5489 7452 8726 9827'
                expiry={'04/24'}
                issuer={'Universal Bank'}
                cardName={'CB'}
            />

            <Stack mt={'1rem'} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Stack>
                    <Typography variant='h3'>Balance</Typography>
                    <Typography variant='h2'>$2,748.00</Typography>
                </Stack>

                <Stack direction={'row'} spacing={'0.5rem'}>
                    <ActionIcons>
                        <i className="fi fi-rr-time-past"></i>
                    </ActionIcons>
                    <ActionIcons>
                        <i class="fi fi-br-share-square"></i>
                    </ActionIcons>
                </Stack>
            </Stack >
        </PageParent>
    )
}

export default CardDetails

const ActionIcons = styled(Box)({
    borderRadius: '0.5rem',
    border: '1.5px solid #ffffff30',
    height: '2.5rem',
    width: '2.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
})