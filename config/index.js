const apiUrl =
    process.env.NODE_ENV === 'development'
        ? 'http://localhost:3008/api'
        : 'http://localhost:3008/api';

export { apiUrl };
