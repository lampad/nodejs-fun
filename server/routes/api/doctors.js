import { Router } from 'express';
import db from '../../db/db';
import { MODELS, ROLES } from '../../db/constants';

export default Router()
    .get('/', (req, res) => {
	res.status(200).send(db
			     .get(MODELS.PERSON)
			     .filter({ role: ROLES.DOCTOR })
			     .value());
    });
