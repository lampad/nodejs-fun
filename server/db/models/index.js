import { MODELS } from '../constants';
import Appointment from './appointment';
import File from './file';
import Person from './person';

const GLOBAL_SCHEMA = {
  id: {
    type: String,
    required: false,
  },
};

export default {
  [MODELS.APPOINTMENT]: {
    ...Appointment,
    schema: {
      ...Appointment.schema,
      ...GLOBAL_SCHEMA,
    },
  },
  [MODELS.FILE]: {
    ...File,
    schema: {
      ...File.schema,
      ...GLOBAL_SCHEMA,
    },
  },
  [MODELS.PERSON]: {
    ...Person,
    schema: {
      ...Person.schema,
      ...GLOBAL_SCHEMA,
    },
  },
};
