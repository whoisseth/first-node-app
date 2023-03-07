const http = require('http');

const server = http.createServer((req, res) => {
    const data = [
        {
            name: 'Utkarsh ',
            course: 'MCA'
        },
        {
            name: 'Aman ',
            course: 'BCA'
        },
        {
            name: 'Ram ',
            course: 'MCA'
        },
    ]

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data));
})

const PORT = process.env.PORT || 3000;
const host = '127.0.0.1';

server.listen(PORT, host, () => { console.log(`listening on port ${PORT} `) })
