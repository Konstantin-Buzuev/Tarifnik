import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './MobileMenu.module.scss'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setSection } from '../../redux/content/actions'
import { ReactComponent as IconMenu } from '../../assets/images/icons/menu.svg'

class Menu extends React.Component {
	static propTypes = {
		sections: PropTypes.array.isRequired,
		subsections: PropTypes.array.isRequired,
		setSection: PropTypes.func.isRequired,
	}

	render() {
		return <IconMenu className={classNames(styles.icon)} />
	}
}

const mapStateToProps = ({ contentReducer }) => ({
	sections: contentReducer.sections,
	subsections: contentReducer.subsections,
})

const mapDispatchToProps = (dispatch) =>
	bindActionCreators(
		{
			setSection,
		},
		dispatch
	)

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
