import express from 'express';

import '@controllers/UserController';

const app = express();

app.get('/', (request, response) => {
    return response.json({ msg: 'Hello World! 2022 Ready to Code' });
});

app.listen(3000);
