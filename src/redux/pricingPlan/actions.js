import {
	GET_PRICING_PLAN_LOADING,
	GET_PRICING_PLAN_SUCCESS,
	GET_PRICING_PLAN_ERROR,
} from '../types'

export const getPricingPlanLoading = () => ({
	type: GET_PRICING_PLAN_LOADING,
})

export const getPricingPlanSuccess = (pricingPlan) => ({
	type: GET_PRICING_PLAN_SUCCESS,
	payload: pricingPlan,
})

export const getPricingPlanError = (err) => ({
	type: GET_PRICING_PLAN_ERROR,
	payload: err,
})
