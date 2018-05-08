import _ from 'lodash';
import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';
import { MODELS } from './constants';

const adapter = new FileSync('db.json');
const db = low(adapter);

const defaultValues = _.values(MODELS).reduce((result, model) => ({
  ...result,
  [model]: [],
}), {});

db.defaults(defaultValues).write();

export default db;
