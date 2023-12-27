import React, { useState } from 'react'
import PageParent from './layouts/PageParent'
import { Stack, Typography, Avatar, Button, Box, Icon } from '@mui/material'
import styled from '@emotion/styled'

const Catalogue = () => {

    const [data, setData] = useState([
        {
            icon: '',
            title: 'Mobile',
            currency_symbol: '$',
            amuont: 34.00,
            tp_pay: true,
        },
        {
            icon: '',
            title: 'Internet and TV',
            currency_symbol: '$',
            amuont: 21.00,
            tp_pay: true,
        },
        {
            icon: '',
            title: 'Traffic fines',
            currency_symbol: '$',
            amuont: 1221.00,
            tp_pay: true,
        },   {
            icon: '',
            title: 'Mobile',
            currency_symbol: '$',
            amuont: 34.00,
            tp_pay: true,
        },
        {
            icon: '',
            title: 'Internet and TV',
            currency_symbol: '$',
            amuont: 21.00,
            tp_pay: true,
        },
        {
            icon: '',
            title: 'Traffic fines',
            currency_symbol: '$',
            amuont: 1221.00,
            tp_pay: true,
        },   {
            icon: '',
            title: 'Mobile',
            currency_symbol: '$',
            amuont: 34.00,
            tp_pay: true,
        },
        {
            icon: '',
            title: 'Internet and TV',
            currency_symbol: '$',
            amuont: 21.00,
            tp_pay: true,
        },
        {
            icon: '',
            title: 'Traffic fines',
            currency_symbol: '$',
            amuont: 1221.00,
            tp_pay: true,
        },
        {
            icon: '',
            title: 'Housing Services',
            currency_symbol: '$',
            amuont: 0.00,
            tp_pay: true,
        },
        {
            icon: '',
            title: 'Utility Payment',
            currency_symbol: '$',
            amuont: 442.00,
            tp_pay: true,
        },
    ])
    return (
        <PageParent>

            <Stack direction={'row'} justifyContent={'space-between'} mt={'2rem'} mb={'1rem'}>
                <Typography variant='h1'>Catalogue</Typography>

                <Avatar sx={{ width: 28, height: 28 }} />

            </Stack>

            {data.map((item, idx) => {
                return (
                    <Stack key={idx} spacing={'1rem'} direction={'row'}>
                        <Box sx={{
                            background: 'linear-gradient(180deg, #67a9ff, #5049ff)',
                            padding: '0.5rem',
                            position: 'relative',
                            width: '24px',
                            height: '24px',
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

                        <Stack direction={'row'} justifyContent={'space-between'} width={'100%'} sx={{
                            borderBottom: '1.5px solid #ffffff10',
                            paddingBottom: '.5rem'
                        }}>

                            <Stack>

                                <Typography >{item.title}</Typography>
                                <Typography color={'#94a3d3'} fontSize={'0.75rem'}>{item.amuont}</Typography>

                            </Stack>

                            <PayButton disabled={item.amuont <= 0}>Pay</PayButton>

                        </Stack>
                    </Stack>
                )
            })}

        </PageParent>
    )
}

export default Catalogue

const PayButton = styled(Button)({
    border: '1px solid #7a91d2',
    color: '#7a91d2',
    borderRadius: '.75rem',

})