import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import SwapProChart from './SwapProChart';
import { Token } from '@uniswap/sdk';

const useStyles = makeStyles(({ palette, breakpoints }) => ({
  tradeTable: {
    width: '100%',
    '& thead tr th, & tbody tr td': {
      borderRight: `1px solid ${palette.divider}`,
      '&:last-child': {
        borderRight: 'none',
      },
    },
    '& thead tr th': {
      textTransform: 'uppercase',
      padding: '8px 16px',
      background: palette.secondary.main,
      color: palette.text.primary,
      fontWeight: 'normal',
    },
    '& tbody tr td': {
      padding: '8px 16px',
    },
  },
}));

const SwapProChartTrade: React.FC<{
  showChart: boolean;
  showTrades: boolean;
  token1: Token;
  token2: Token;
}> = ({ showChart, showTrades, token1, token2 }) => {
  const classes = useStyles();

  return (
    <>
      {showChart && (
        <Box mt={1}>
          <SwapProChart />
        </Box>
      )}
      {showTrades && (
        <table className={classes.tradeTable} cellSpacing={0}>
          <thead>
            <tr>
              <th align='left'>date</th>
              <th align='left'>type</th>
              <th align='right'>usd</th>
              <th align='right'>{token1.symbol}</th>
              <th align='right'>{token2.symbol}</th>
              <th align='right'>price</th>
              <th align='right'>txn</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td align='left'>111</td>
              <td align='left'>111</td>
              <td align='right'>111</td>
              <td align='right'>111</td>
              <td align='right'>111</td>
              <td align='right'>111</td>
              <td align='right'>111</td>
            </tr>
          </tbody>
        </table>
      )}
    </>
  );
};

export default React.memo(SwapProChartTrade);