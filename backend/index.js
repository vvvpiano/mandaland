const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./dbServer');

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {

})

app.post('/login/google', async (req, res) => {
    try {
        // db에서 조회해오고, 값이 있으면 그대로 리턴, 없으면 새로 삽입 후 삽입한 컬럼을 리턴;
        const { data } = await db.get(`/users?userId=${req.body.userId}`);
        console.log("data:", data)
        if (data.length > 0) {
            console.log("User exist");
            res.status('200').json(data).end(); // 200 == success
        }
        else {
            console.log(`New user! Insert ${req.body.name} in users`)
            const { data } = await db.post('/users', req.body);
            res.status('201').json(data[0]).end(); // 201 == created
        }
    } catch (err) {
        console.log(err);
        res.status('400').json(err).end();
    }
})

app.listen(4000, () => {
    console.log('Server is working on 4000');
})