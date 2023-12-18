
const mongoose = require('mongoose');

const encounterSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  type: { type: String, enum: ['Emergency', 'OPD', 'Specialist Care'] },
});

const vitalSchema = new mongoose.Schema({
  bloodPressure: { type: String },
  temperature: { type: String },
  pulse: { type: String },
  spo2: { type: String },
});

const patientSchema = new mongoose.Schema({
  patientId: { type: String, required: true },
  surname: { type: String, required: true },
  othernames: { type: String },
  gender: { type: String },
  phoneNumber: { type: String },
  residentialAddress: { type: String },
  emergencyContact: {
    name: { type: String },
    phone: { type: String },
    relationship: { type: String },
  },
  encounters: [encounterSchema],
  vitals: [vitalSchema],
});

module.exports = mongoose.model('Patient', patientSchema);
