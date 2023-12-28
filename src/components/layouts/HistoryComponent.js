import React from 'react'
import { compareDesc, format } from 'date-fns'
import TransactionItem from './TransactionItem'
import { Box, Typography } from '@mui/material'

const HistoryComponent = ({ data, source }) => {

    // this gives an object with dates as keys
    const groups = data.reduce((groups, transaction) => {
        const date = transaction.date.split('T')[0];
        if (!groups[date]) {
            groups[date] = [];
        }
        groups[date].push(transaction);
        return groups;
    }, {});


    // Edit: to add it in the array format instead
    const groupArrays = Object.keys(groups).map((date) => {
        return {
            date,
            transactions: groups[date]
        };
    });

    groupArrays.sort((a, b) => {
        return compareDesc(a.date, b.date)
    })

    return (
        <Box>


            {groupArrays.map((item, idx) => {
                return (
                    <Box key={idx}>
                        <Typography variant='h3' sx={{
                            marginTop: '1rem',
                            marginBottom: '1rem',
                            color: 'white',
                        }}>{format(item.date, 'dd MMM yyyy')}</Typography>

                        <Box>

                            {item.transactions.map((it, x) => {
                                return (<TransactionItem key={x} item={it} source={source} />)
                            })}
                        </Box>

                    </Box>
                )
            })}
        </Box>
    )
}

export default HistoryComponent