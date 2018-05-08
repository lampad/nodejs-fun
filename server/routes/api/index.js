import { Router } from 'express';

import auth from './auth';
import patients from './patients';
import appointments from './appointments';
import doctors from './doctors';

export default Router()
  .use('/auth', auth)
  .use('/patients', patients)
  .use('/appointments', appointments)
  .use('/doctors', doctors);
