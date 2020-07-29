import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styles from './Card.module.scss'

import { bindActionCreators } from 'redux'
import connect from 'react-redux/es/connect/connect'

import { showProposal, setTariff } from '../../redux/content/actions'

import { ReactComponent as IconTV } from '../../assets/images/icons/iconTVGray.svg'
import { ReactComponent as IconWeb } from '../../assets/images/icons/iconWebGray.svg'
import handleChanels from './handleChannel'
import * as Scroll from 'react-scroll'
let scroll = Scroll.animateScroll

class Card extends React.Component {
	static propTypes = {
		cardContent: PropTypes.object.isRequired,
		showProposal: PropTypes.func.isRequired,
		setTariff: PropTypes.func.isRequired,
	}

	handleChanels = handleChanels

	onClick = (tariff) => {
		this.props.setTariff(tariff)
		this.props.showProposal()
		scroll.scrollTo(145, { smooth: true, duration: 500 })
	}

	render() {
		const {
			name,
			speed,
			price,
			channels_count,
			hd_channels_count,
		} = this.props.cardContent
		return (
			<div className={classNames(styles.card)}>
				<div className={classNames(styles.card__title)}>{name}</div>
				<div className={classNames(styles.card__propertyContainer)}>
					<div className={classNames(styles.card__property)}>
						<IconWeb className={classNames(styles.card__icon)} />
						<div className={classNames(styles.card__text)}>
							<span>До&nbsp;{speed}&nbsp;Мбит/с</span>
						</div>
					</div>
					<div className={classNames(styles.card__property)}>
						<IconTV className={classNames(styles.card__icon)} />
						<div className={classNames(styles.card__text)}>
							<span>
								{channels_count}&nbsp;
								{this.handleChanels(channels_count)}
								<br />
								{hd_channels_count}&nbsp;HD
							</span>
						</div>
					</div>
				</div>
				<div className={classNames(styles.card__footer)}>
					<div className={classNames(styles.card__price)}>
						<span>{price}</span>
						<div className={classNames(styles.card__dimension)}>
							<span>руб</span>
							<span>мес</span>
						</div>
					</div>
					<button
						className={classNames(styles.card__button)}
						onClick={() => this.onClick(name)}
					>
						Подключить
					</button>
				</div>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) =>
	bindActionCreators(
		{
			showProposal,
			setTariff,
		},
		dispatch
	)
export default connect(null, mapDispatchToProps)(Card)
