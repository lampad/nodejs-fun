import _ from 'lodash';
import uuid from 'uuid/v4';
import isvalid from 'isvalid';
import db from './db';
import Models from './models';
import { MODELS } from './constants';

function createApi(model) {
  return {
    create: async (data = {}) => {
      try {
        const validData = await isvalid(data, model.schema);
        const result = db
          .get(model.name)
          .push({ ...validData, id: uuid() })
          .write();
        if (_.isEmpty(result)) return { error: true };
        return result;
      } catch (error) {
        return { error };
      }
    },
    update: async (id, data = {}) => {
      try {
        const currentValue = db.get(model.name).find({ id }).value();
        const validData = await isvalid({ ...currentValue, ...data }, model.schema);
        const result = db
          .get(model.name)
          .find({ id })
          .assign(validData)
          .set('id', id)
          .write();
        if (_.isEmpty(result)) return { error: true };
        return result;
      } catch (error) {
        return { error };
      }
    },
    destroy: (id) => {
      const result = db.get(model.name).remove({ id }).write();
      if (_.isEmpty(result)) return { error: true };
      return result;
    },
    get: (param) => {
      if (_.isString(param) || _.isNumber(param)) {
        return db
          .get(model.name)
          .get(param)
          .value();
      }
      if (_.isObject(param)) {
        return db
          .get(model.name)
          .filter(param)
          .value();
      }
      return db.get(model.name).value();
    },
  };
}

const {
  APPOINTMENT, FILE, PERSON,
} = MODELS;
export default {
  Appointment: createApi(Models[APPOINTMENT]),
  File: createApi(Models[FILE]),
  Person: createApi(Models[PERSON]),
};
