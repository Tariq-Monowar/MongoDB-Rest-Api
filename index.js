const app = require('./src/app')
require('dotenv').config()
const port = process.env.PORT || 7777

app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})