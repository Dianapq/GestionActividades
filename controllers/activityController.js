const Activity = require('../models/activity');

//Accion pata listar todas las actividades
exports.getAllActivities = async (req, res) => {
  const activities = await Activity.find();
  res.json(activities);
};

//Accion para obtener actividad por ID
exports.getActivityById = async (req, res) => {
  const activity = await Activity.findById(req.params.id);
  if (activity) res.json(activity);
  else res.status(404).json({ message: 'Actividad no encontrada' });
};

//Creacion de una nueva actividad
exports.createActivity = async (req, res) => {
  const activity = new Activity(req.body);
  await activity.save();
  res.status(201).json(activity);
};

//Actualizacion de actividad
exports.updateActivity = async (req, res) => {
  const updated = await Activity.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

//Eliminar actividad
exports.deleteActivity = async (req, res) => {
  await Activity.findByIdAndDelete(req.params.id);
  res.status(204).send();
};

//Asignar entrenador
exports.assignTrainer = async (req, res) => {
  const updated = await Activity.findByIdAndUpdate(req.params.id, { trainer_id: req.params.trainerId }, { new: true });
  res.json(updated);
};

//Listar usuarios asistentes
exports.getAttendees = async (req, res) => {
  res.json({ attendees: ['user1', 'user2', 'user3'] });
};