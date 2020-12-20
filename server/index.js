const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

// use it to bypass the CORS security of the request
app.get('/search', function (req, res) {
    (async () => {
        const search = req.query.q;
        const response = await fetch(`https://www.habitissimo.es/p/api/autocomplete/category?search=${search}&limit=20&tree_level[]=1&tree_level[]=2`,
            {method: 'get', headers: {accept: 'application/json'}}
        );

        if (!response.ok)
            res.sendStatus(response.status);

        const content = await response.json();
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(content);
    })();
});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});