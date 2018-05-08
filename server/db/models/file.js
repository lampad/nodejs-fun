import { MODELS } from '../constants';

export default {
    name: MODELS.FILE,
    schema: {	
	path: {
	    type: String,
	    required: true,
	},
	patientId: String	
    }
};
