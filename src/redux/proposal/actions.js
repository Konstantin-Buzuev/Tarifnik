import {
	ADD_PROPOSAL_LOADING,
	ADD_PROPOSAL_SUCCESS,
	ADD_PROPOSAL_ERROR,
} from '../types'

export const addProposalLoading = () => ({
	type: ADD_PROPOSAL_LOADING,
})

export const addProposalSuccess = (success) => ({
	type: ADD_PROPOSAL_SUCCESS,
	payload: success,
})

export const addProposalError = (err) => ({
	type: ADD_PROPOSAL_ERROR,
	payload: err,
})
