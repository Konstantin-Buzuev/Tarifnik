import {
	SET_SECTION,
	SET_TARIFF,
	SET_HOME_PROPOSAL,
	SET_OFFICE_PROPOSAL,
	SET_VIEW_MOBILE,
	SET_VIEW_DEVICE,
	SHOW_PROPOSAL,
	HIDE_PROPOSAL,
} from '../types'

export const setSection = (section) => ({
	type: SET_SECTION,
	payload: section,
})

export const setTariff = (tariff) => ({
	type: SET_TARIFF,
	payload: tariff,
})

export const setHomeProposal = () => ({
	type: SET_HOME_PROPOSAL,
	payload: true,
})

export const setOfficeProposal = () => ({
	type: SET_OFFICE_PROPOSAL,
	payload: false,
})

export const setViewMobile = () => ({
	type: SET_VIEW_MOBILE,
	payload: true,
})

export const setViewDevice = () => ({
	type: SET_VIEW_DEVICE,
	payload: false,
})

export const showProposal = () => ({
	type: SHOW_PROPOSAL,
	payload: true,
})

export const hideProposal = () => ({
	type: HIDE_PROPOSAL,
	payload: false,
})
