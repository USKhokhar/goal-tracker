const express = require('express');
const router = express.Router();

const {
    getGoal,
    setGoal,
    updateGoal,
    deletGoal
} =  require('../controllers/goalControllers');

router.route('/').get(getGoal).post(setGoal);
router.route('/:id').post(updateGoal).delete(deletGoal);

module.exports = router;