mongoose = require('mongoose'),

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/annotationdb', {
    useUnifiedTopology: true,
    useNewUrlParser: true
})