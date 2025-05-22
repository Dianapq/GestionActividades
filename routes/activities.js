const express = require('express');
const router = express.Router();
const controller = require('../controllers/activityController');

router.get('/', controller.getAllActivities);
router.get('/:id', controller.getActivityById);
router.post('/', controller.createActivity);
router.put('/:id', controller.updateActivity);
router.delete('/:id', controller.deleteActivity);
router.put('/:id/assign-trainer/:trainerId', controller.assignTrainer);
router.get('/:id/attendees', controller.getAttendees);

module.exports = router;