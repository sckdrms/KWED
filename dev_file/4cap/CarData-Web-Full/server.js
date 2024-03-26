const express = require('express')
const path = require('path');
const app = express()

app.listen(8081, () => {
    console.log('http://localhost:8081 에서 서버 실행중')
})

// app.use(express.static(__dirname + '/build'))
app.use(express.static(path.join(__dirname, 'web', 'build')));

app.get('/', (요청, 응답) => {
  응답.sendFile(path.join(__dirname, 'build', 'web', 'index.html'));
}) 




