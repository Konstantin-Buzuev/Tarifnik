import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styles from './Content.module.scss'

import { bindActionCreators } from 'redux'
import connect from 'react-redux/es/connect/connect'

import { getPricingPlan } from '../../redux/pricingPlan/operations'

import Card from '../Card/Card'
import Proposal from '../Proposal/Proposal'

class Content extends React.Component {
	static propTypes = {
		getPricingPlan: PropTypes.func.isRequired,
		pricing: PropTypes.array.isRequired,
		selectedSection: PropTypes.string.isRequired,
	}

	mapCardsToRender = () =>
		this.props.pricing.map((rate) => (
			<Card cardContent={rate} key={rate.id} />
		))

	componentDidMount() {
		this.props.getPricingPlan()
	}
	render() {
		return (
			<main className={classNames(styles.content)}>
				<Proposal />
				<div className={classNames(styles.content__title)}>
					Тарифы&nbsp;{this.props.selectedSection}
				</div>

				<div
					className={classNames(styles.content__cardsContainer)}
					children={this.mapCardsToRender()}
				/>
			</main>
		)
	}
}

const mapStateToProps = ({
	pricingPlanReducer,
	proposalReducer,
	contentReducer,
}) => ({
	selectedSection: contentReducer.selectedSection,
	isLoading: pricingPlanReducer.pricingPlanIsLoading,
	isSending: proposalReducer.proposalIsSending,
	pricing: pricingPlanReducer.pricingPlan,
})
const mapDispatchToProps = (dispatch) =>
	bindActionCreators({ getPricingPlan }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Content)
