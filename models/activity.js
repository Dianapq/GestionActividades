const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  categoria: { type: String, required: true },
  nivel: { type: String, enum: ['básico', 'intermedio', 'avanzado'], required: true },
  requisitos: { type: String },
  duracion_min: { type: Number, required: true },
  profesor: { type: String, required: true },
  cupos_maximos: { type: Number, required: true },
  trainer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

//Configuracion para mostrar "id" y no "_id" automatico de base de datos 
activitySchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    ret.id = ret._id;
    delete ret._id;
  }
});

module.exports = mongoose.model('Activity', activitySchema);
