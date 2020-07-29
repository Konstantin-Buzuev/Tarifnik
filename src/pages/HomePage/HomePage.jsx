import React from 'react'
import classNames from 'classnames'

import Header from '../../components/Header/Header'
import Content from '../../components/Content/Content'
import styles from './HomePage.module.scss'

export default class HomePage extends React.Component {
	render() {
		return (
			<div className={classNames(styles.container)}>
				<Header />
				<Content />
			</div>
		)
	}
}
