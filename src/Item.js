import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { List, Checkbox, Input } from 'semantic-ui-react';

const Item = observer(class Item extends Component {
  render() {
    return (
      <List.Item>
        <Checkbox toggle checked={ !!this.props.item.complete } onChange={ () => { this.props.onComplete(this.props.item) } } />
        <Input defaultValue={this.props.item.name} onChange={ () => this.onChange } />
      </List.Item>
    );
  }

  onChange($event) {
      if(!this.props.onChange) return;

      this.props.OnChange(this.props.item, $event.target.value);
  }
});

export default Item;
