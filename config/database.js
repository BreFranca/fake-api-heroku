mongoose = require('mongoose'),

mongoose.connect('mongodb://localhost/annotationdb', {
    useUnifiedTopology: true,
    useNewUrlParser: true
})