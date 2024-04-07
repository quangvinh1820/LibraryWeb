const UserRouter = require('./user');
const BookRouter = require('./book');
const RentRouter = require('./rent');

const routes = (app) => {
    app.use('/api/user', UserRouter);
    app.use('/api/book', BookRouter);
    app.use('/api/rent', RentRouter);
}

module.exports = routes