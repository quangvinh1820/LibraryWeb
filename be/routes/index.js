const UserRouter = require('./user');
const BookRouter = require('./book');

const routes = (app) => {
    app.use('/api/user', UserRouter);
    app.use('/api/book', BookRouter);
}

module.exports = routes