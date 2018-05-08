import { ROLES, MODELS } from '../constants';

export default {
    name: MODELS.PERSON,
    schema: {
	firstName: {
	    type: String,
	    required: true,
	},
	lastName: {
	    type: String,
	    required: true,
	},
	passwordHash: {
	    type: String,
	    required: true,
	},
	role: {
	    type: String,
	    required: true,
	    enum: [ ROLES.DOCTOR, ROLES.PATIENT ],
	},
	age: {
	    type: String,
	    required: false,
	},
	email: {
	    type: String,
	    required: true,
	},
	streetAddress: {
	    type: String,
	    required: false,
	},
	city: {
	    type: String,
	    required: false,
	},
	state: {
	    type: String,
	    required: false,
	},
	zip: {
	    type: String,
	    required: false,
	},
	phoneNumber: {
	    type: String,
	    required: false,
	}
    }
};
