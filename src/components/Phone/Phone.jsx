import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Phone.module.scss'

import { connect } from 'react-redux'
import { ReactComponent as PhoneIcon } from '../../assets/images/icons/phone.svg'

class Phone extends React.Component {
	static propTypes = {
		isMobile: PropTypes.bool.isRequired,
	}

	render() {
		return this.props.isMobile ? (
			<div className={classNames(styles.phone__mobile)}>
				<PhoneIcon className={classNames(styles.phone__icon)} />
			</div>
		) : (
			<div className={classNames(styles.phone__device)}>
				8&nbsp;800&nbsp;111&nbsp;11&nbsp;11
			</div>
		)
	}
}
const mapStateToProps = ({ contentReducer }) => ({
	isMobile: contentReducer.isMobile,
})

export default connect(mapStateToProps, null)(Phone)
