import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { List, Checkbox, Input, Segment } from 'semantic-ui-react';

import './Item.scss';

const Item = observer(class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editting: false
    };
  }
  render() {
    return (
      <List.Item className="todo-item">
        <Checkbox toggle checked={ this.isComplete() } onChange={ () => { this.props.onComplete(this.props.item) } } />
        &nbsp;
        { !this.state.editting ? <span className={ "label " + (this.isComplete() ? 'complete' : '') } onDoubleClick={ () => this.onEditting() } >{ this.props.item.label }</span> : null }
        { this.state.editting ? <Input defaultValue={this.props.item.label} autoFocus onKeyUp={ $event => this.onChange($event) } /> : null }
      </List.Item>
    );
  }

  isComplete() {
    return !!this.props.item.complete;
  }

  onEditting() {
    console.log('onEditting', this.state.editting);
    this.setState({ editting: !this.state.editting });
  }

  onChange($event) {
    if($event.keyCode === 27) {
      this.setState({ editting: false });
      return;
    }
    if($event.keyCode !== 13) return;
    this.props.item.label = $event.target.value
    this.setState({ editting: false });
  }
});

export default Item;
