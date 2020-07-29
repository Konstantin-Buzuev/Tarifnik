import { fetchRequest } from '../fetch/operations'

import {
	getPricingPlanLoading,
	getPricingPlanSuccess,
	getPricingPlanError,
} from './actions'

export const getPricingPlan = () => {
	return fetchRequest.get(`https://tarifnik.ru/rabota/api/data_controller`, [
		getPricingPlanLoading,
		getPricingPlanSuccess,
		getPricingPlanError,
	])
}
