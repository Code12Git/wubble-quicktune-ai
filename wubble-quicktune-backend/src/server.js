const express = require('express');
const { fromEnv } = require('./utils');
const logger  = require('./utils/logger');
const routes = require('./routes');
const cors = require('cors');

const app = express();
const PORT = fromEnv('PORT') || 3001;

app.use(cors());

app.use(express.json());
app.use('/api', routes);

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'UP',
    timestamp: new Date().toISOString(),
    service: 'Your Service Name'
  });
});

app.listen(PORT, () => {
  logger.info(`🚀 Server running at http://localhost:${PORT}`);
});

module.exports = app;