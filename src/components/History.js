import React, { useState } from 'react'
import PageParent from './layouts/PageParent'
import { Stack, Typography, Box, Avatar } from '@mui/material'
import { compareAsc, compareDesc, format } from 'date-fns'
import TransactionItem from './layouts/TransactionItem'
import transactionHistory from './constants/transactionHistory.json'
import HistoryComponent from './layouts/HistoryComponent'

const History = () => {

    const [data, setData] = useState(transactionHistory)

    return (
        <PageParent>
            <Stack direction={'row'} justifyContent={'space-between'} mt={'2rem'}>
                <Typography variant='h1'>History</Typography>
                <Avatar sx={{ width: 28, height: 28 }} />

            </Stack>

            <HistoryComponent data={data}  source={'history-component'}/>

        </PageParent>
    )
}

export default History