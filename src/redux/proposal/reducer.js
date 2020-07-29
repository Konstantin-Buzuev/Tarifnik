import { ADD_PROPOSAL_LOADING, ADD_PROPOSAL_SUCCESS } from '../types'

const initialState = {
	proposalIsSending: false,
}

export default function pricingPlanReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_PROPOSAL_LOADING: {
			return {
				...state,
				proposalIsSending: true,
			}
		}
		case ADD_PROPOSAL_SUCCESS: {
			return {
				...state,
				proposalIsSending: false,
			}
		}
		default:
			return state
	}
}
