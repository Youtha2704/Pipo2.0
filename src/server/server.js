const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 6000; // Définition du port, vous pouvez le changer selon vos besoins

app.get('/leagues', async (req, res) => {
    try {
        const response = await axios.get('https://api.fotmob.com/v1/leagues');
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching leagues:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
