const express = require('express');
const app = express();
const port = 3000;

app.get('/time', (req, res) => {
    const currentTime = new Date().toISOString();
    res.json({ current_time: currentTime });
});

app.listen(port, () => {
    console.log(`Time API listening at http://localhost:${port}`);
});

