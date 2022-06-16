const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const users = [
  {
    id: 1,
    name: 'QWERT ASDFG',
  },
  {
    id: 2,
    name: 'YUIOP VBNMC'
  },
  {
    id: 3,
    name: 'ZXCVB KLHGH'
  }
]



app.get('/', (req, res) => {
  res.json({message: 'msg'})
  console.log("test2");
})

app.get('/user/', (req, res) => {
    res.json(users)
    console.log("test1");
  })
  
  app.get('/user/:id', (req, res) => {
    const user = users.find(user => user.id === parseInt(req.params.id))
    user ? res.json(user) : res.status(404).json({message: 'User not found.'})
  })
  
  app.post('/user/create', (req, res) => {
    users.push(req.body)
    res.json(req.body)
  })
  
  app.listen(3000)