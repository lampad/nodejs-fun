import { Router } from 'express';
import bcrypt from 'bcryptjs';
import _ from 'lodash';
import Db from '../../db/api';

export default Router()

  .post('/', async (req, res) => {
    const user = Db.Person.get({ email: req.body.email })[0];
    if (!user || user.error) {
      return res.status(404).send('Unknown email');
    }
    const result = await bcrypt.compare(req.body.password, user.passwordHash);
    if (result) {
      return res.status(200).send(_.omit(user, ['passwordHash']));
    }
    return res.status(401).send('Incorrect password');
  });
