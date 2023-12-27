import React, { useState } from 'react'
import PageParent from './layouts/PageParent'
import { Stack, Typography, Box, Avatar } from '@mui/material'
import { compareAsc, compareDesc, format } from 'date-fns'
import TransactionItem from './layouts/TransactionItem'

const History = () => {

    const [data, setData] = useState([
        {
            "icon": "ic1",
            "name": "Uber",
            "desc": "Ride Payment",
            "amount": "$10.00",
            "type": "D",
            "card": "9827",
            "date": "2023-12-25T00:00:00.000Z"
        },
        {
            "icon": "ic2",
            "name": "Apple Music",
            "desc": "Subscription Renewal",
            "amount": "$20.00",
            "type": "D",
            "card": "9827",
            "date": "2023-12-25T00:00:00.000Z"
        },
        {
            "icon": "ic3",
            "name": "Grocery",
            "desc": "Weekly Shopping",
            "amount": "$15.00",
            "type": "D",
            "card": "9827",
            "date": "2023-12-25T00:00:00.000Z"
        },
        {
            "icon": "ic4",
            "name": "Subscription",
            "desc": "Online Service",
            "amount": "$12.50",
            "type": "D",
            "card": "9827",
            "date": "2023-12-25T00:00:00.000Z"
        },
        {
            "icon": "ic5",
            "name": "Grocery",
            "desc": "Fresh Produce",
            "amount": "$8.75",
            "type": "D",
            "card": "9827",
            "date": "2023-12-25T00:00:00.000Z"
        },
        {
            "icon": "ic6",
            "name": "Apple Music",
            "desc": "Subscription Charge",
            "amount": "$30.00",
            "type": "D",
            "card": "9827",
            "date": "2023-12-25T00:00:00.000Z"
        },
        {
            "icon": "ic7",
            "name": "Uber",
            "desc": "Morning Commute",
            "amount": "$5.00",
            "type": "D",
            "card": "9827",
            "date": "2023-12-26T00:00:00.000Z"
        },
        {
            "icon": "ic8",
            "name": "Subscription",
            "desc": "Monthly Fee",
            "amount": "$25.00",
            "type": "D",
            "card": "9827",
            "date": "2023-12-26T00:00:00.000Z"
        },
        {
            "icon": "ic9",
            "name": "Grocery",
            "desc": "Essentials",
            "amount": "$18.50",
            "type": "D",
            "card": "9827",
            "date": "2023-12-26T00:00:00.000Z"
        },
        {
            "icon": "ic10",
            "name": "Apple Music",
            "desc": "Music Subscription",
            "amount": "$22.00",
            "type": "D",
            "card": "9827",
            "date": "2023-12-26T00:00:00.000Z"
        },
        {
            "icon": "ic11",
            "name": "Grocery",
            "desc": "Snacks and Drinks",
            "amount": "$7.50",
            "type": "D",
            "card": "9827",
            "date": "2023-12-26T00:00:00.000Z"
        },
        {
            "icon": "ic12",
            "name": "Subscription",
            "desc": "Digital Service",
            "amount": "$40.00",
            "type": "D",
            "card": "9827",
            "date": "2023-12-24T00:00:00.000Z"
        },
        {
            "icon": "ic13",
            "name": "Uber",
            "desc": "Night Out",
            "amount": "$14.50",
            "type": "D",
            "card": "9827",
            "date": "2023-12-24T00:00:00.000Z"
        },
        {
            "icon": "ic14",
            "name": "Apple Music",
            "desc": "Subscription Fee",
            "amount": "$11.25",
            "type": "D",
            "card": "9827",
            "date": "2023-12-24T00:00:00.000Z"
        },
        {
            "icon": "ic15",
            "name": "Grocery",
            "desc": "Weekend Shopping",
            "amount": "$9.00",
            "type": "D",
            "card": "9827",
            "date": "2023-12-24T00:00:00.000Z"
        },
        {
            "icon": "ic16",
            "name": "Income",
            "desc": "Freelance Work",
            "amount": "$50.00",
            "type": "C",
            "card": "9827",
            "date": "2023-12-27T09:48:52.311Z"
        },
        {
            "icon": "ic17",
            "name": "Expense",
            "desc": "Dinner Out",
            "amount": "$16.75",
            "type": "D",
            "card": "9827",
            "date": "2023-12-27T09:48:52.311Z"
        },
        {
            "icon": "ic18",
            "name": "Income",
            "desc": "Consulting Fee",
            "amount": "$27.50",
            "type": "C",
            "card": "9827",
            "date": "2023-12-27T09:48:52.311Z"
        },
        {
            "icon": "ic19",
            "name": "Expense",
            "desc": "Lunch Out",
            "amount": "$13.50",
            "type": "D",
            "card": "9827",
            "date": "2023-12-27T09:48:52.311Z"
        },
        {
            "icon": "ic20",
            "name": "Income",
            "desc": "Project Payment",
            "amount": "$35.00",
            "type": "C",
            "card": "9827",
            "date": "2023-12-27T09:48:52.311Z"
        }


    ])

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




    console.log(groupArrays);





    return (
        <PageParent>
            <Stack direction={'row'} justifyContent={'space-between'} mt={'2rem'}>
                <Typography variant='h1'>History</Typography>
                <Avatar sx={{ width: 28, height: 28 }} />

            </Stack>

            <Box>


                {groupArrays.map((item, idx) => {
                    return (
                        <Box key={idx}>
                            <Typography variant='h3' sx={{
                                marginTop: '1rem',
                                marginBottom: '1rem',
                            }}>{format(item.date, 'dd MMM yyyy')}</Typography>

                            <Box>

                                {item.transactions.map((it, x) => {
                                   return (<TransactionItem key={x} item={it} />)
                                })}
                            </Box>

                        </Box>
                    )
                })}
            </Box>

        </PageParent>
    )
}

export default History