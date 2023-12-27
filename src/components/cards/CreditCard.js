import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const CreditCard = ({ cardName, issuer, number, expiry, color }) => {


    return (
        <Box sx={{
            position: 'relative',
            padding: '1.25rem',
            borderRadius: '1rem',
            background: 'rgb(233,130,240)',
            background: color == 'orange'? 'rgb(255,137,98)' : 'rgb(255,98,241)',
            background: color == 'orange'? 'linear-gradient(61deg, rgba(255,137,98,1) 20%, rgba(255,5,5,1) 52%, rgba(255,192,0,1) 100%)':  'linear-gradient(61deg, rgba(255,98,241,1) 20%, rgba(5,186,255,1) 52%, rgba(0,91,255,1) 100%)',



        }}>

            <Stack sx={{
                gap: '0.75rem'
            }}>
                <Stack direction={'row'} spacing={'0.25rem'} alignItems={'center'}>
                    <Typography sx={{
                        fontWeight: 800,
                        fontSize: '1.25rem'
                    }}>
                        {cardName}

                    </Typography>

                    <Typography>
                        |
                    </Typography>

                    <Typography sx={{
                        fontSize: '0.75rem'
                    }}>
                        {issuer}
                    </Typography>
                </Stack>

                <Stack direction={'row'} sx={{
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Box sx={{
                        height: '35px',
                        width: '45px',
                        borderRadius: '0.5rem',
                        backgroundColor: '#ffffff80'
                    }}></Box>

                    <i className="fi fi-sr-wifi" style={{
                        rotate: '90deg',
                        fontSize: '1.25rem',
                        color: '#ffffff80'
                    }}></i>
                </Stack>

                <Typography sx={{
                    fontWeight: 800,
                    fontSize: '1.125rem'                 
                }}>
                    {number}
                </Typography>

                <Stack direction={'row'} sx={{
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    marginTop: '-0.75rem'
                }}>
                    <Typography fontSize={'0.75rem'}>{expiry}</Typography>

                </Stack>
                <img src='/mastercard.png' alt='mastercard-image' style={{
                    position: 'absolute',
                    width: '30px',
                    bottom: '0.25rem',
                    right: '1rem',
                }} />
            </Stack>

            

        </Box>
    )
}

export default CreditCard