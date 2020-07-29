import { hadError } from '../fetch/actions'

export const fetchRequest = {
	get: (url, actions) => fetchData(url, actions, undefined, 'GET'),
	post: (url, actions, body) =>
		fetchData(url, actions, JSON.stringify(body), 'POST'),
	// put: (url, actions, body) =>
	// 	fetchData(url, actions, JSON.stringify(body), 'PUT'),

	// delete: (url, actions, body) =>
	// 	fetchData(url, actions, JSON.stringify(body), 'DELETE'),
}

export const fetchData = (url, actions, body, method, headers) => async (
	dispatch
) => {
	const [loadingAction, successAction, errorAction] = actions

	if (loadingAction) {
		dispatch(loadingAction())
	}
	try {
		const res = await fetch(url, {
			method,
			// headers: {
			// 	Accept: 'application/json',
			// 	'Content-Type': 'application/json',
			// },
			body,
		})
		if (!res.ok) {
			if (res.status === 405) {
				let errData = await res.json()
				const err = {
					...errData,
					type: 'error',
				}
				throw err
			} else {
				const error = await res.json()
				throw error
			}
		}
		const data = await res.json()
		dispatch(successAction(data))
	} catch (error) {
		error.argsForRequest = {
			url,
			actions,
			body,
			method,
			headers,
		}
		errorAction ? dispatch(errorAction(error)) : dispatch(hadError(error))
	}
}
