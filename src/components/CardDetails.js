import React from 'react'
import CreditCard from './cards/CreditCard'
import { Box, Stack, Typography } from '@mui/material'
import styled from '@emotion/styled'
import PageParent from './layouts/PageParent'
import { useNavigate, useParams } from 'react-router-dom'
import PullableHistory from './layouts/PullableHistory'

const CardDetails = () => {

    const { type } = useParams()
    const navigate = useNavigate()

    return (
        <PageParent sx={{
            position: 'relative',
            height: '100%',
        }}>

            <i className="fi fi-rs-arrow-small-left" style={{
                fontSize: '2rem',
                margin: '0px',
                marginBottom: '-1rem',
                padding: '0px'
            }}
            onClick={() => navigate('/')}
            
            ></i>
            <Typography variant='h1'>
                Salary<br />Card
            </Typography>
            <CreditCard
                orientation={'H'}
                color={type}
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

            <PullableHistory />
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