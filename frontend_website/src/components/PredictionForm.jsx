import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid, Paper, InputAdornment } from '@mui/material';
import { styled } from '@mui/system';

const FormPaper = styled(Paper)({
  padding: '2rem',
  borderRadius: '12px',
  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
});

const PredictButton = styled(Button)({
  padding: '12px 24px',
  fontSize: '1rem',
  fontWeight: '600',
  borderRadius: '8px',
  textTransform: 'none',
  marginTop: '1rem',
  width: '100%',
});

const PredictionForm = () => {
  const [symbol, setSymbol] = useState('');
  const [timeframe, setTimeframe] = useState('1m');
  const [prediction, setPrediction] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate prediction
    setTimeout(() => {
      const basePrice = 100 + Math.random() * 50;
      const predictedPrice = basePrice + (Math.random() * 20 - 10);
      setPrediction({
        symbol: symbol || 'AAPL',
        currentPrice: basePrice.toFixed(2),
        predictedPrice: predictedPrice.toFixed(2),
        confidence: (80 + Math.random() * 15).toFixed(1),
      });
    }, 1500);
  };

  return (
    <Box sx={{ maxWidth: '800px', mx: 'auto', my: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Stock Price Predictor
      </Typography>
      
      <FormPaper elevation={3}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Stock Symbol"
                variant="outlined"
                value={symbol}
                onChange={(e) => setSymbol(e.target.value)}
                placeholder="e.g. AAPL, MSFT"
                InputProps={{
                  startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                select
                label="Prediction Timeframe"
                value={timeframe}
                onChange={(e) => setTimeframe(e.target.value)}
                variant="outlined"
              >
                <option value="1w">1 Week</option>
                <option value="1m">1 Month</option>
                <option value="3m">3 Months</option>
                <option value="1y">1 Year</option>
              </TextField>
            </Grid>
          </Grid>
          
          <PredictButton
            type="submit"
            variant="contained"
            size="large"
            disabled={!symbol}
          >
            Predict Price
          </PredictButton>
        </form>
        
        {prediction && (
          <Box sx={{ mt: 4, p: 3, bgcolor: '#f0fdf4', borderRadius: '8px' }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Prediction Result for {prediction.symbol}
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="body1">Current Price:</Typography>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                  ${prediction.currentPrice}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1">Predicted Price ({timeframe}):</Typography>
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#2563eb' }}>
                  ${prediction.predictedPrice}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1">Confidence Level:</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ width: '100%', mr: 2 }}>
                    <Box 
                      sx={{
                        height: '8px',
                        bgcolor: '#e2e8f0',
                        borderRadius: '4px',
                        overflow: 'hidden',
                      }}
                    >
                      <Box 
                        sx={{
                          height: '100%',
                          width: `${prediction.confidence}%`,
                          bgcolor: '#10b981',
                        }}
                      />
                    </Box>
                  </Box>
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    {prediction.confidence}%
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        )}
      </FormPaper>
    </Box>
  );
};

export default PredictionForm;