import React, { useState } from 'react'
import PageParent from './PageParent'
import { Box, Stack, Typography } from '@mui/material'
import transactionHistory from '../constants/transactionHistory.json'
import { compareDesc, format } from 'date-fns'
import TransactionItem from './TransactionItem'
import HistoryComponent from './HistoryComponent'


const PullableHistory = () => {

    const [pullLevel, setPullLevel] = useState(0)

    const handlePullClick = () => {
        if (pullLevel == 2) {

            setPullLevel(0)
        } else {
            setPullLevel(prev => prev + 1)
        }
    }

    const [data, setData] = useState(transactionHistory)


    return (
        <PageParent sx={{
            height: pullLevel == 0 ? '150px' : pullLevel == 1 ? '250px' : '85%',
            borderRadius: '1rem 1rem 0 0',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            background: 'linear-gradient(200deg, #303b5b, #1b2542)',
            transition: 'all 400ms ease',
            boxShadow: '10px 0px 1rem #00000040',
            overflowY: 'auto',
            '&::-webkit-scrollbar':{
                display: 'none',
            }
        }}>

            <Stack>
                <Stack direction={'row'} justifyContent={'center'}>
                    <Box
                        onClick={handlePullClick}
                        sx={{
                            width: '50px',
                            border: '3px solid #00000040',
                            borderRadius: '2rem',
                            cursor: 'pointer',
                            marginBottom  : '0.25rem',
                        }}></Box>
                </Stack>
                <HistoryComponent data={data} source={'card-component'} />

            </Stack>

        </PageParent>
    )
}

export default PullableHistory