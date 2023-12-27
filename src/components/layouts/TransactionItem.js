import React, { useState } from 'react'
import { Box, Typography, Stack } from '@mui/material'
import { format } from 'date-fns'

const TransactionItem = ({item}) => {
    const [show, setShow] = useState(false)
    return (
        <Stack spacing={'1rem'} direction={'row'}
            mt={'.5rem'}
            onClick={() => setShow(prev => !prev)}
            >
            <Box sx={{
                background: 'linear-gradient(180deg, #67a9ff, #5049ff)',
                padding: '0.5rem',
                position: 'relative',
                width: '24px',
                height: '24px',
                transition: 'all 200 ease-in-out',
                // aspectRatio: '1/1',
                // display: 'flex',
                // alignItems: 'center',
                // justifyContent: 'center',
                borderRadius: '10rem',

            }}>
                <i className={item.icon == '' ? 'fi fi-rr-receipt' : item.icon}
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%,-50%)'
                    }}
                ></i>
            </Box>

            <Stack direction={'row'} width={'100%'} sx={{
                borderBottom: '1.5px solid #ffffff10',
                paddingBottom: '0.5rem',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>

                <Stack>

                    <Typography >{item.name}</Typography>
                    <Typography color={'#94a3d3'} fontSize={'0.75rem'}>{item.desc}</Typography>

                    {show?
                        <>
                            <Typography fontSize={'0.75rem'}>xxxx-xxxx-xxx-{item.card}</Typography>

                            <Typography fontSize={'0.75rem'}>{format(item.date, 'dd-MM-yyyy')}</Typography>
                        </>
                        :<></>
                    }

                </Stack>

                <Typography variant='h3' color={'white'}>{item.type == 'D' ? '- ' : '+ '}{item.amount}</Typography>



            </Stack>
        </Stack>
    )
}

export default TransactionItem