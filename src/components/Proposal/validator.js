const name = (value) => {
	if (!value) return true
	const reg = new RegExp(/^[^-][a-zа-яё -]{0,79}$/gim)
	return reg.test(value)
}

const address = (value) => {
	return value.length < 255
}

const phone = (value) => {
	const reg = new RegExp(/^\d{11}$/)
	return reg.test(value)
}

module.exports = {
	name,
	address,
	phone,
}
