import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { detach } from 'mobx-state-tree';
import ItemList from 'ItemList';
import classNames from 'classnames';
import { DragDropContext } from 'react-beautiful-dnd';
import { find } from 'lodash';

class EditItemListModal extends Component {
	constructor() {
		super();
		this.onDirectionChangeHandler = this.onDirectionChangeHandler.bind(this);
		this.onDragEndHandler = this.onDragEndHandler.bind(this);
	}
	onDirectionChangeHandler(event) {
		this.props.store.itemList.setDirection(event.target.value)
	}
	onDragEndHandler(result) {
		if (!result.destination) {
			return;
		}
		const sourceStore = this.props.store.getItemListStoreByDroppableId(result.source.droppableId);
		const destStore = this.props.store.getItemListStoreByDroppableId(result.destination.droppableId);
		const sourceItems = sourceStore.sortedItems;
		const destItems = destStore.sortedItems;
		const sourceItem = find(sourceItems, { index: result.source.index });
		const destItem = find(destItems, { index: result.destination.index });
		if (result.source.droppableId === result.destination.droppableId) {
			// DnD within its own droppable area.
			destStore.updateOrder(sourceItem, destItem);
		} else {
			// DnD is being dropped into a droppable different than its own.
			destStore.moveItem(sourceItem, result.destination.index);
		}
	}
	render() {
		const store = this.props.store;
		const itemListStore = store.itemList;
		const ilgContainerClasses = classNames('item-list-group-container', {
			'is-vertical': itemListStore.direction === 'vertical',
			'is-horizontal': itemListStore.direction === 'horizontal',
		});
		return (
			<div className="modal-card edit-item-list-modal">
				<header className="modal-card-head">
					<p className="modal-card-title">Customize Item Panel</p>
					<button className="delete" aria-label="close" onClick={store.closeModal} />
				</header>
				<section className="modal-card-body">
					<div className="content">
						<div className="edit-item-list-controls columns">
							<div className="column">
								<div className="field">
									<div className="control">
										<label className="radio">
											<input onChange={this.onDirectionChangeHandler} checked={itemListStore.direction === 'horizontal'} type="radio" name="direction" value="horizontal" /> Horizontal
										</label>
									</div>
									<div className="control">
										<label className="radio">
											<input onChange={this.onDirectionChangeHandler} checked={itemListStore.direction === 'vertical'} type="radio" name="direction" value="vertical" /> Vertical
										</label>
									</div>
								</div>
							</div>
						</div>
						<div className={ilgContainerClasses}>
							<DragDropContext onDragEnd={this.onDragEndHandler}>
								<div className="item-list-group active-item-list-group">
									<h5>Active Set</h5>
									<ItemList
										itemListStore={itemListStore}
										items={itemListStore.sortedItems}
										direction={itemListStore.direction}
										draggableEnabled={true}
									/>
								</div>
								<div className="item-list-group inactive-item-list-group">
									<h5>Available Items</h5>
									<ItemList
										itemListStore={store.inactiveItemList}
										items={store.inactiveItemList.sortedItems}
										direction={itemListStore.direction}
										draggableEnabled={true}
									/>
								</div>
							</DragDropContext>
						</div>
					</div>
				</section>
				<footer className="modal-card-foot">
					<button className="button" onClick={store.closeModal}>Discard Changes</button>
				</footer>
			</div>
		);
	}
}

export default inject('store')(observer(EditItemListModal));