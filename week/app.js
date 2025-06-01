const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/podcasts', require('./routes/podcast.routes'));
app.use('/api/comments', require('./routes/comment.routes'));
app.use('/api/analytics', require('./routes/analytics.routes'));

module.exports = app;
