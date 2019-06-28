
const app = require('./express');
const db = require('./mongoose');

const PORT = process.env.PORT || 3000;

const http = require('http').Server(app);

app.use('/', require('./routes'));

db.connect()
    .then(() => {
        http.listen(PORT, () => console.log(`API server listening on ${PORT}`));
    });
