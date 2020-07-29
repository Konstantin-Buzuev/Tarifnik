import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Menu.module.scss'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setSection } from '../../redux/content/actions'

class Menu extends React.Component {
	static propTypes = {
		sections: PropTypes.array.isRequired,
		subsections: PropTypes.array.isRequired,
		setSection: PropTypes.func.isRequired,
	}
	renderSectionItems = () =>
		this.props.subsections.map((sub) => (
			<div className={styles.section__item} key={sub}>
				{sub}
			</div>
		))

	renderSections = () =>
		this.props.sections.map((section) => (
			<div
				className={classNames(styles.section)}
				onClick={() => this.props.setSection(section)}
				key={section}
			>
				<div className={classNames(styles.section__title)}>{section}</div>
				<div className={classNames(styles.section__dropdown)}>
					{this.renderSectionItems()}
				</div>
			</div>
		))

	render() {
		return (
			<div className={classNames(styles.wrapper)}>
				{this.renderSections()}
			</div>
		)
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
