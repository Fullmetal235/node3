 // server.js
        const express = require('express');
        
        const server = express();
        
        server.get('/', (req, res) => {
            res.status(200).json({ api: 'up..'})
        })
        
        module.exports = server;
​