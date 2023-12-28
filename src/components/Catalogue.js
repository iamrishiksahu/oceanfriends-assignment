import React, { useState } from 'react'
import PageParent from './layouts/PageParent'
import { Stack, Typography, Avatar, Button, Box, Icon } from '@mui/material'
import styled from '@emotion/styled'
import catalogueData from './constants/catalogueData.json'

const Catalogue = () => {

    const [data, setData] = useState(catalogueData)

    return (
        <PageParent>

            <Stack direction={'row'} justifyContent={'space-between'} mt={'2rem'} mb={'1rem'}>
                <Typography variant='h1'>Catalogue</Typography>

                <Avatar sx={{ width: 28, height: 28 }} />

            </Stack>

            {data.map((item, idx) => {
                return (
                    <Stack key={idx}
                        sx={{
                            flexDirection: 'row',
                            gap: '1rem',
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
                            borderBottom: '1.5px solid #00000020',
                            paddingBottom: '.25rem'
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
    padding: '0.25rem 0.5rem',
    height: 'max-content'

})