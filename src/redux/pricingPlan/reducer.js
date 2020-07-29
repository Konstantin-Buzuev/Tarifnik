import { GET_PRICING_PLAN_LOADING, GET_PRICING_PLAN_SUCCESS } from '../types'

const initialState = {
	pricingPlan: [],
}

export default function pricingPlanReducer(state = initialState, action) {
	switch (action.type) {
		case GET_PRICING_PLAN_LOADING: {
			return {
				...state,
				pricingPlanIsLoading: true,
			}
		}
		case GET_PRICING_PLAN_SUCCESS: {
			return {
				...state,
				pricingPlan: action.payload,
				pricingPlanIsLoading: false,
			}
		}
		default:
			return state
	}
}
