const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

const course = require('./data/course.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('Learning platfrom server is ok')
})

app.get('/courses', (req, res) => {
    res.send(course)
})

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const yourCourse = course.find(cor => cor._id == id)
    console.log(yourCourse)
    res.send(yourCourse)


})


app.listen(port, () => {
    console.log('server is ok')
})






