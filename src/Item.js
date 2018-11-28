import React, { Component } from 'react';
import { observer } from 'mobx-react';
import classNames from 'classnames';

const Item = class Item extends Component {
	render() {
		const item = this.props.item;
		const itemClasses = classNames('item', {
			'is-not-acquired': !item.acquired,
			'is-hidden': !this.props.isVisible,
		});

		return (
			<div key={item.name} className={itemClasses}>
				<img src={item.image} alt={item.longName}/>
			</div>
		);
	}
};

export default observer(Item);