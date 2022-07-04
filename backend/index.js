const express = require('express');
const routes = require('./routes/routes');
const logger = require('./middleware/logger');

const app = express();

app.use(logger);
app.use(express.json());


app.use('/api', routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));