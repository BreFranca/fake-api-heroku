const restful = require('node-restful')
const mongoose = restful.mongoose

const annotationSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
        },
    body: {
        type: String,
        required: true
    },
    Created_date: {
        type: Date,
        default: Date.now
    }
})

module.exports = restful.model('Annotation', annotationSchema)