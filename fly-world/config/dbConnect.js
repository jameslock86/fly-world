import mongoose from 'mongoose'

const dbConnect = () => {
    if(mongoose.connection.readyState >= 1){
        return
    }


    mongoose.connect(process.env.DB_LOCAL_URI, {
        // useNewUrlParse: true,
        // useUnifiedTopology: true,
        // useFindAndModify: false,
        // useCreateIndex: true
    }).then(con => console.log('Yeah it works !'))

}



export default dbConnect;