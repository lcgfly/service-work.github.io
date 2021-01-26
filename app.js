let express = require('express')
let app = express()
let fs = require('fs')
let path = require('path');
app.set('etag', false)
app.use(express.static(path.join(__dirname, './public')))
app.get('/', (req, res) => {
  fs.readFile('./public/index.html', 'utf8', function (err, data) {
    if (err) console.log(err)
    res.set({
      'X-diy': 'fghzzzzz',
      // 'ETag': '12345'
    })
    res.status(200).send(data)
  })

})
app.get('/api/getName', (req, res) => {
  res.set({
    'X-diy': 'fghzzzzz',
    // 'ETag': '8910'
  })
  res.json({ name: '习近平', age: 24, sex: '男' })
})
// app.get('/api/getTotal', (req, res) => {
//   res.set({
//     'X-diy': 'fghzzzzz',
//     // 'ETag': '8910'
//   })
//   res.json({ total: Math.floor(Math.random() * 1000) })
// })
app.listen(3000, function (r) {
  console.log('server is running at  http://localhost:3000/');
})