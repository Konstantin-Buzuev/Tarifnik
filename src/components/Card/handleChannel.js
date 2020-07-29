const handleChanels = (channel_number) => {
	let units = channel_number % 10
	let dozens = Math.floor(channel_number / 10) % 10
	switch (units) {
		case 1:
			return dozens !== 1 ? 'канал' : 'каналов'
		case 2:
		case 3:
		case 4:
			return dozens !== 1 ? 'канала' : 'каналов'
		case 5:
		case 6:
		case 7:
		case 8:
		case 9:
		case 0:
			return 'каналов'
		default:
			return 'каналов'
	}
}
export default handleChanels
