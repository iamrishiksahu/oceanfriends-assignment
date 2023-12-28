import React, { useState } from 'react'
import { Box, Typography, Stack, Paper } from '@mui/material'
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom'

const TransactionItem = ({ item, source }) => {
    const [show, setShow] = useState(false)
    const navigate = useNavigate()

    const handleItemClick = () => {
        if (source == 'card-component') {
            setShow(prev => !prev)
        } else {
            navigate('/card/blue')
        }
    }
    return (
        <Stack
            onClick={handleItemClick}
            sx={{
                flexDirection: 'row',
                gap: '1rem',
                marginTop: '0.5rem',
                cursor: 'pointer',
                alignItems: 'center'
            }}
        >
            <Box sx={{
                background: 'linear-gradient(180deg, #67a9ff, #5049ff)',
                width: '3rem',
                aspectRatio: '1/1',
                borderRadius: '4rem',
                position: 'relative'

            }}>
                <i className={item?.icon == '' ? 'fi fi-rr-receipt' : item?.icon}
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%,-50%)'
                    }}
                ></i>
            </Box>

            <Stack direction={'row'} width={'100%'} sx={{
                borderBottom: '1.5px solid #00000020',
                paddingBottom: '0.5rem',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>

                <Stack>

                    <Typography >{item.name}</Typography>
                    <Typography color={'#94a3d3'} fontSize={'0.75rem'}>{item.desc}</Typography>

                    {show ?
                        <>
                            <Typography fontSize={'0.75rem'}>xxxx-xxxx-xxx-{item.card}</Typography>

                            <Typography fontSize={'0.75rem'}>{format(item.date, 'dd-MM-yyyy')}</Typography>
                        </>
                        : <></>
                    }

                </Stack>

                <Typography variant='h3' color={'white'}>{item.type == 'D' ? '- ' : '+ '}{item.amount}</Typography>



            </Stack>
        </Stack>
    )
}

export default TransactionItem