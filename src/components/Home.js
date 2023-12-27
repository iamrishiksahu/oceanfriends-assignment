import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import PageParent from './layouts/PageParent'
import { Avatar, Stack, Typography, Box } from '@mui/material'
import CreditCard from './cards/CreditCard'

const Home = () => {

    const navigate = useNavigate()

    const handleCardClick = ({ type }) => {

        if (type == 'orange') {
            navigate('card/orange')
        } else {
            navigate('card/blue')
        }

    }
    return (
        <PageParent>
            <Stack direction={'row'} justifyContent={'space-between'} mt={'2rem'}>
                <Stack sx={{ gap: '0.25rem' }}>
                    <Typography variant='h1'>Bank<br />Cards</Typography>
                    <Typography variant='h3'>Balance</Typography>
                    <Typography variant='h2'>$2,748.00</Typography>
                </Stack>


                <Avatar sx={{ width: 28, height: 28 }}/>

            </Stack>

            <Box sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                overflowX: 'auto',
                // height: '380px',
                gap: '1rem',
                scrollSnapType: 'x mandatory', 
                '& > *': {
                    scrollSnapAlign: 'start'
                },
                '&::-webkit-scrollbar': {
                    display: 'none',
                }
            }}>

                <CreditCard
                    onClick={() => { handleCardClick({ type: 'blue' }) }}
                    
                    orientation={'V'}
                    number='5489 7452 8726 9827'
                    expiry={'04/24'}
                    issuer={'Universal Bank'}
                    cardName={'CB'}
                />
                <CreditCard
                    onClick={() => { handleCardClick({ type: 'orange' }) }}
                    // sx={{
                    //     rotate: '270deg',
                    //     transform: 'translate(-25%, -25%)',
                    //     minWidth: '200px',
                    //     // rotate: '270deg',
                    //     // marginTop: '8rem'
                    // }}
                    orientation={'V'}
                    color={'orange'}
                    number='5489 7452 8726 9827'
                    expiry={'04/24'}
                    issuer={'Universal Bank'}
                    cardName={'CB'}
                />

            </Box>


        </PageParent>
    )
}

export default Home