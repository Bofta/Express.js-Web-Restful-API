import colors from 'colors';

const logger = () => (req, res, next) => {
    const methodColors = {
        GET: 'green',
        POST: 'blue',
        PUT: 'yellow',
        DELETE: 'red'
    }

    const colors = methodColors[req.method] || white;


    console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`)['red'];
    res.JSON.stringify('Hello I AM THE ERROR');
    next(res.status);
}

export default logger;