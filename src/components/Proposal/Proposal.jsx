import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styles from './Proposal.module.scss'

import { bindActionCreators } from 'redux'
import connect from 'react-redux/es/connect/connect'

import {
	hideProposal,
	setHomeProposal,
	setOfficeProposal,
} from '../../redux/content/actions'
import { addProposal } from '../../redux/proposal/operations'

import validate from './validator'
import RadioButton from '../../controls/RadioButton/RadioButton'
import Input from '../../controls/Input/Input'

const capitalize = (str, lower = false) =>
	(lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
		match.toUpperCase()
	)

class Proposal extends React.Component {
	static propTypes = {
		hideProposal: PropTypes.func.isRequired,
		addProposal: PropTypes.func.isRequired,
		setHomeProposal: PropTypes.func.isRequired,
		setOfficeProposal: PropTypes.func.isRequired,
		tariff: PropTypes.string,
		isProposalShown: PropTypes.bool.isRequired,
		isHomeProposal: PropTypes.bool.isRequired,
		isMobile: PropTypes.bool.isRequired,
	}
	state = {
		phone: '',
		name: '',
		address: '',
		inccorrectPhone: false,
		inccorrectName: false,
		inccorrectAddress: false,
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		})
		let name = 'incorrect' + capitalize(event.target.name)
		this.setState({ [name]: false })
	}
	onClick = async () => {
		const { phone, name, address } = this.state
		await this.setState({ inccorrectPhone: !validate.phone(phone) })
		await this.setState({ inccorrectName: !validate.name(name) })
		await this.setState({ inccorrectAddress: !validate.address(address) })
		if (
			this.state.inccorrectPhone ||
			this.state.inccorrectName ||
			this.state.inccorrectAddress
		) {
			return
		}
		this.props.addProposal({ phone, name, address })
		await this.setState({ phone: '' })
		await this.setState({ name: '' })
		await this.setState({ address: '' })

		this.props.hideProposal()
	}

	render() {
		return (
			<div className={classNames(styles.proposal)}>
				{this.props.isProposalShown && (
					<div className={classNames(styles.proposal__form)}>
						<div className={classNames(styles.proposal__wrapper)}>
							<div className={classNames(styles.proposal__title)}>
								<span>Заявка на подключение</span>
							</div>
							<div
								className={classNames(
									styles.proposal__radiobuttons,
									this.props.isMobile &&
										styles.proposal__radiobuttons_mobile
								)}
							>
								<RadioButton
									text="В&nbsp;квартиру"
									checked={!!this.props.isHomeProposal}
									onClickAction={this.props.setHomeProposal}
								/>
								<RadioButton
									text="В&nbsp;частный&nbsp;дом/офис"
									checked={!this.props.isHomeProposal}
									onClickAction={this.props.setOfficeProposal}
								/>
							</div>
							<Input
								name="phone"
								value={this.state.phone}
								placeholder="Ваш телефон*"
								errPlaceholder="Должно быть ровно 11 цифр"
								isWrong={this.state.inccorrectPhone}
								handleChange={this.handleChange}
							/>
							<Input
								name="name"
								value={this.state.name}
								placeholder="Ваше имя"
								errPlaceholder="Должно быть не более 80 букв"
								isWrong={this.state.inccorrectName}
								handleChange={this.handleChange}
							/>
							<Input
								name="address"
								value={this.state.address}
								placeholder="Ваш адрес"
								errPlaceholder="Должно быть не более 255 символов"
								isWrong={this.state.inccorrectAddress}
								handleChange={this.handleChange}
							/>

							<span
								className={classNames(
									styles.proposal__isRequiredWarning
								)}
							>
								Поля,&nbsp;отмеченные&nbsp;*,&nbsp;обязательны&nbsp;к&nbsp;заполнению
							</span>
							<button
								className={classNames(styles.proposal__button)}
								onClick={this.onClick}
							>
								Отправить заявку
							</button>
						</div>
					</div>
				)}
			</div>
		)
	}
}

const mapStateToProps = ({ contentReducer }) => ({
	tariff: contentReducer.tariff,
	isProposalShown: contentReducer.isProposalShown,
	isHomeProposal: contentReducer.isHomeProposal,
	isMobile: contentReducer.isMobile,
})
const mapDispatchToProps = (dispatch) =>
	bindActionCreators(
		{ hideProposal, setHomeProposal, setOfficeProposal, addProposal },
		dispatch
	)

export default connect(mapStateToProps, mapDispatchToProps)(Proposal)
