import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Header.module.scss'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setViewDevice, setViewMobile } from '../../redux/content/actions'

import ReactResizeDetector from 'react-resize-detector'

import { ReactComponent as Logo } from '../../assets/images/icons/logo.svg'
import Menu from '../Menu/Menu'
import MobileMenu from '../Menu/MobileMenu'
import Phone from '../Phone/Phone'

class Header extends React.Component {
	static propTypes = {
		isMobile: PropTypes.bool.isRequired,
		setViewMobile: PropTypes.func.isRequired,
		setViewDevice: PropTypes.func.isRequired,
	}

	_onResize = (width) => {
		width < 760 ? this.props.setViewMobile() : this.props.setViewDevice()
	}
	render() {
		return (
			<ReactResizeDetector handleWidth onResize={this._onResize}>
				{this.props.isMobile ? (
					<header className={classNames(styles.header)}>
						<div className={classNames(styles.header__menu)}>
							<MobileMenu />
							<Logo className={classNames(styles.header__logo)} />
							<Phone />
						</div>
					</header>
				) : (
					<header className={classNames(styles.header)}>
						<div className={classNames(styles.header__menu)}>
							<Logo className={classNames(styles.header__logo)} />
							<Menu />
							<Phone />
						</div>
					</header>
				)}
			</ReactResizeDetector>
		)
	}
}
const mapStateToProps = ({ contentReducer }) => ({
	isMobile: contentReducer.isMobile,
})

const mapDispatchToProps = (dispatch) =>
	bindActionCreators(
		{
			setViewDevice,
			setViewMobile,
		},
		dispatch
	)

export default connect(mapStateToProps, mapDispatchToProps)(Header)
