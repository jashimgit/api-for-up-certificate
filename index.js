const express = require('express')
const app = express()
const port = process.env.PORT || 8000;
const cors = require('cors');

app.use(express.json())
app.use(cors());

app.get('/', (req, res) => {
    res.send('hello world');
})


app.listen(port, ()=>{
    console.log(`app listening at http://localhost:${port}`);
})