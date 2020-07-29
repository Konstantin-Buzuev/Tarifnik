import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styles from './RadioButton.module.scss'

export default class RadioButton extends React.Component {
	static propTypes = {
		text: PropTypes.string.isRequired,
		checked: PropTypes.bool,
		onClickAction: PropTypes.func.isRequired,
	}

	render() {
		return (
			<label
				className={classNames(styles.radio)}
				onClick={this.props.onClickAction}
			>
				<input type="radio" defaultChecked={!!this.props.checked} />
				<div className={classNames(styles.radio__text)}>
					{this.props.text}
				</div>
			</label>
		)
	}
}
