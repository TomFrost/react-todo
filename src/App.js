import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Container, List, Button, Form, Input } from 'semantic-ui-react';

import Item from './Item';

const App = observer(class App extends Component {

  render() {

    let itemsList = this.props.list.items.map((item, index) => {
      return <Item key={index} item={ item } onComplete={ this.handleItemComplete } onChange={ this.handleItemUpdate } />
    });

    return (
      <Container style={ { marginTop: '3em' } }>
        <Form onSubmit={ $event => this.handleItemCreate($event) }>
          <Form.Field>
            <Input placeholder="New Item" />
          </Form.Field>
        </Form>  
        <List>
          { itemsList } 
        </List>
        <Button secondary onClick={ () => { this.handleMarkAll(false) } }>Clear All</Button>
        <Button primary onClick={ () => { this.handleMarkAll(true) } }>Complete All</Button>
      </Container>
    );
  }

  handleMarkAll(complete = false) {
    this.props.list.items.map((item) => {
      item.complete = complete;
      return item;
    });
  }

  handleItemCreate($event) {
    let item = {
      name: $event.target.value,
      complete: false
    };

    this.props.list.items.push(item);
  }

  handleItemComplete(item) {
    console.log('handleItemComplete', item);
    item.complete = !item.complete;
  }

  handleItemUpdate(item, value) {
    console.log('handleItemUpdate', item, value);

  }
});

export default App;
