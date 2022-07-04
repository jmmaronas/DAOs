const mongoose = require('mongoose')

const connectDB = () => {
    mongoose.connect('url mongo atlas', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(db =>
            console.log('DB is connected' + db.connection.name)
        )
        .catch(err => console.error(err))
}
module.exports = connectDB