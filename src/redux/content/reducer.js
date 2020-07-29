import {
	SET_SECTION,
	SET_TARIFF,
	SET_HOME_PROPOSAL,
	SET_OFFICE_PROPOSAL,
	SET_VIEW_DEVICE,
	SET_VIEW_MOBILE,
	SHOW_PROPOSAL,
	HIDE_PROPOSAL,
} from '../types'

const initialState = {
	sections: ['домашний интернет', 'интернет и ТВ', 'телевидение'],
	subsections: ['для модема', 'для дачи и дома', 'для смартфона'],
	selectedSection: 'домашний интернет',
	tariff: null,
	isMobile: false,
	isProposalShown: true,
	isHomeProposal: true,
}

export default function navigationReducer(state = initialState, action) {
	switch (action.type) {
		case SET_SECTION: {
			return {
				...state,
				selectedSection: action.payload,
			}
		}
		case SET_TARIFF: {
			return {
				...state,
				tariff: action.payload,
			}
		}
		case SET_HOME_PROPOSAL:
		case SET_OFFICE_PROPOSAL: {
			return {
				...state,
				isHomeProposal: action.payload,
			}
		}

		case SET_VIEW_DEVICE:
		case SET_VIEW_MOBILE: {
			return {
				...state,
				isMobile: action.payload,
			}
		}
		case SHOW_PROPOSAL:
		case HIDE_PROPOSAL: {
			return {
				...state,
				isProposalShown: action.payload,
			}
		}
		default:
			return state
	}
}
