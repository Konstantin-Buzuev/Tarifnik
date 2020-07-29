import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import fetchReducer from './fetch/reducer'
import pricingPlanReducer from './pricingPlan/reducer'
import proposalReducer from './proposal/reducer'
import contentReducer from './content/reducer'

const createRootReducer = (history) =>
	combineReducers({
		router: connectRouter(history),
		fetchReducer,
		pricingPlanReducer,
		proposalReducer,
		contentReducer,
	})

export default createRootReducer
