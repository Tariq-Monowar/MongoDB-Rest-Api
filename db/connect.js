const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
mongoose.connect('mongodb://127.0.0.1:27017/RESTAPI',{
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
})
.then(_=>console.log(`Connected.......`))
.catch(err=>console.log(err))