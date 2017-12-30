export const isEmptyObject = (params) => {
	let result
	for (let key in params) {
		if (params[key]) {
			result = true
		}
	}
	return !result
}