import { fetchRequest } from '../fetch/operations'

import {
	addProposalLoading,
	addProposalSuccess,
	addProposalError,
} from './actions'

export const addProposal = (proposal) =>
	fetchRequest.post(
		`https://tarifnik.ru/rabota/api/order_controller`,
		[addProposalLoading, addProposalSuccess, addProposalError],
		proposal
	)
