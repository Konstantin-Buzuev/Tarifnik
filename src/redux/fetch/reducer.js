import {
	FETCH_ERROR_CLEAR,
	ADD_PROPOSAL_ERROR,
	ADD_PROPOSAL_LOADING,
	ADD_PROPOSAL_SUCCESS,
	GET_PRICING_PLAN_ERROR,
	GET_PRICING_PLAN_LOADING,
	GET_PRICING_PLAN_SUCCESS,
} from '../types'

export default function fetchReducer(state = {}, action) {
	switch (action.type) {
		case GET_PRICING_PLAN_LOADING: {
			return {
				...state,
				pricingPlanError: undefined,
				pricingPlanIsLoading: true,
			}
		}
		case GET_PRICING_PLAN_SUCCESS: {
			return {
				...state,
				pricingPlanError: undefined,
				pricingPlanIsLoading: false,
			}
		}
		case GET_PRICING_PLAN_ERROR: {
			return {
				...state,
				pricingPlanError: action.payload,
				pricingPlanIsLoading: false,
			}
		}

		case ADD_PROPOSAL_LOADING:
		case ADD_PROPOSAL_SUCCESS: {
			return {
				...state,
				proposalError: undefined,
			}
		}
		case ADD_PROPOSAL_ERROR: {
			return {
				...state,
				proposalError: action.payload,
				proposalIsSending: false,
			}
		}

		case FETCH_ERROR_CLEAR: {
			return {
				...state,
				...action.payload,
			}
		}

		default:
			return state
	}
}
