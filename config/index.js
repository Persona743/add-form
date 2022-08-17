const task = process.NODE_ENV !== 'production';

export const server = task
    ? 'http://localhost:3008'
    : 'https://yourwebsite.com';
