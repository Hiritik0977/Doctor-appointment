import express from 'express';
import {updateDoctor, deleteDoctor, getAllDoctor, getSingleDoctor, registerDoctor} from '../Controllers/doctorController.js';

const router = express.Router()

router.get('/:id', getSingleDoctor);
router.get('/', getAllDoctor);
router.put('/:id', updateDoctor);
router.delete('/:id', deleteDoctor);
router.post('/',registerDoctor);

export default router;