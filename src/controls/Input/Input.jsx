import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styles from './Input.module.scss'

export default class RadioButton extends React.Component {
	static propTypes = {
		name: PropTypes.string.isRequired,
		value: PropTypes.string.isRequired,
		placeholder: PropTypes.string.isRequired,
		errPlaceholder: PropTypes.string.isRequired,
		isWrong: PropTypes.bool,
		handleChange: PropTypes.func.isRequired,
	}

	render() {
		const {
			name,
			value,
			placeholder,
			errPlaceholder,
			isWrong,
			handleChange,
		} = this.props
		return (
			<input
				className={classNames(styles.input, isWrong && styles.input_wrong)}
				placeholder={isWrong ? errPlaceholder : placeholder}
				type="text"
				name={name}
				value={value}
				onChange={handleChange}
				autoComplete="off"
			/>
		)
	}
}
