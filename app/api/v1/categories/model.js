const mongoose = require('mongoose');

const {model , Schema} = mongoose;

let categorySchema = Schema(
    {
        name : {
            type: String,
            minLength : [3,'Minimun length name category is 3 characters'],
            maxLength : [20,'Maximun length name category is 20 characters'],
            require : [true,'Name must be required'],
        },
    },
    {timestamps: true}
);

module.exports = model('Category', categorySchema); 