import { STATUSES, MODELS } from '../constants';

export default {
    name: MODELS.APPOINTMENT,
    schema: {
	status: {
	    type: String,
	    enum: [ STATUSES.COMPLETED, STATUSES.PENDING, STATUSES.APPROVED, STATUSES.DENIED ],
	    default: () => STATUSES.PENDING
	},
	datetime: {
	    type: Date,
	    required: true,
	},
	purpose: String,
	message: String,
	patientId: String,
	doctorId: String
    }
};
