import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const CreditCard = ({ cardName, issuer, number, expiry, color, sx, onClick, orientation }) => {

    const verticalStyles = {

    }


    return (

        <>

            {orientation == 'H' ?

                <Box
                    onClick={onClick}
                    sx={{

                        position: 'relative',
                        padding: '1.25rem',
                        borderRadius: '1rem',
                        background: 'rgb(233,130,240)',
                        background: color == 'orange' ? 'rgb(255,137,98)' : 'rgb(255,98,241)',
                        background: color == 'orange' ? 'linear-gradient(61deg, rgba(255,137,98,1) 20%, rgba(255,5,5,1) 52%, rgba(255,192,0,1) 100%)' : 'linear-gradient(61deg, rgba(255,98,241,1) 20%, rgba(5,186,255,1) 52%, rgba(0,91,255,1) 100%)',
                        height: 'auto',
                        width: 'auto',
                        ...sx
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
                :

                <Box
                    onClick={onClick}
                    sx={{
                        
                        position: 'relative',
                        padding: '1.25rem',
                        borderRadius: '1rem',
                        background: 'rgb(233,130,240)',
                        background: color == 'orange' ? 'rgb(255,137,98)' : 'rgb(255,98,241)',
                        background: color == 'orange' ? 'linear-gradient(61deg, rgba(255,137,98,1) 20%, rgba(255,5,5,1) 52%, rgba(255,192,0,1) 100%)' : 'linear-gradient(61deg, rgba(255,98,241,1) 20%, rgba(5,186,255,1) 52%, rgba(0,91,255,1) 100%)',
                        height: '300px',
                        display: 'flex',
                        alignContent: 'flex-start',
                        width: '170px',
                        cursor: 'pointer',
                        ...sx
                    }}>

                    <Stack direction={'row'} sx={{
                        gap: '0.75rem',
                        // writingMode: 'bt-lr'
                    }}>
                        <Stack direction={'column-reverse'} spacing={'0.25rem'} alignItems={'center'}>
                            <Typography sx={{
                                writingMode: 'vertical-rl',
                                rotate: '180deg',
                                fontWeight: 800,
                                fontSize: '1.25rem'
                            }}>
                                {cardName}

                            </Typography>

                            <Typography sx={{
                                 writingMode: 'vertical-rl',
                                 rotate: '180deg',
                            }}>
                                |
                            </Typography>

                            <Typography sx={{
                                fontSize: '0.75rem',
                                writingMode: 'vertical-rl',
                                 rotate: '180deg',
                            }}>
                                {issuer}
                            </Typography>
                        </Stack>

                        <Stack direction={'column-reverse'} sx={{
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <Box sx={{
                                height: '45px',
                                width: '35px',
                                borderRadius: '0.5rem',
                                backgroundColor: '#ffffff80'
                            }}></Box>

                            <i className="fi fi-sr-wifi" style={{
                                // rotate: '90deg',
                                fontSize: '1.25rem',
                                color: '#ffffff80'
                            }}></i>
                        </Stack>

                        <Typography sx={{
                            fontWeight: 800,
                            fontSize: '1.125rem',
                            writingMode: 'vertical-rl',
                            rotate: '180deg',
                        }}>
                            {number}
                        </Typography>

                        <Stack direction={'column-reverse'} sx={{
                            alignItems: 'flex-start',
                            justifyContent: 'space-between',
                            marginTop: '-0.75rem'
                        }}>
                            <Typography sx={{
                                 writingMode: 'vertical-rl',
                                 rotate: '180deg',
                            }} fontSize={'0.75rem'}>{expiry}</Typography>

                        </Stack>
                        <img src='/mastercard.png' alt='mastercard-image' style={{
                            position: 'absolute',
                            width: '30px',
                            top: '1rem',
                            right: '0.25rem',
                            rotate: '270deg',
                        }} />
                    </Stack>



                </Box>


            }

        </>

    )
}

export default CreditCard