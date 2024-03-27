const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    contact: String,
    clearanceLevel: Number,
    department: String,
    addedAt: Date,
    deletedAt: Date,
});
const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;