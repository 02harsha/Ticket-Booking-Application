const express = require('express');
require('dotenv').config();

const paymentRouter = express.Router();
const stripe = require('stripe')(process.env.STRIPE_KEY);

paymentRouter.post('/payment', async (req, res) => {
    try {
        const { bookingDetails } = req.body;
        
        const lineItems = bookingDetails.Seats.map(seat => ({
            price_data: {
                currency: 'inr',
                product_data: {
                    name: `${bookingDetails.movie} - Seat ${seat}`,
                    description: `Theatre: ${bookingDetails.theatre}, Show Time: ${bookingDetails.showTime}`,
                },
                unit_amount: bookingDetails.total / bookingDetails.Seats.length * 100,
            },
            quantity: 1,
        }));

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,
            mode: 'payment',
            success_url: 'http://localhost:5173/paymentSuccess',
            cancel_url: 'http://localhost:5173/paymentFailure',
        });

        res.send({ id: session.id });
    } catch (error) {
        console.error('Error creating Stripe session:', error);
        res.status(500).send('An error occurred during payment processing.');
    }
});

module.exports = {
    paymentRouter,
};
