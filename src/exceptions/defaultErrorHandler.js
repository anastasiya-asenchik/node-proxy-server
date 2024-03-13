export const defaultErrorHandler = (err, req, res) => {
    const status = err.status ?? 500;
    const message = err.message ?? 'Error fetching data from';

    res.status(status).json({ message: `${message}` });
};