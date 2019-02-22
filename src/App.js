import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Container, List, Button, Form, Input, Divider, Label } from 'semantic-ui-react';

import Item from './Item';

const App = observer(class App extends Component {

  render() {

    let itemsList = this.props.todos.visible.map((item, index) => {
      return <Item key={index} item={ item } onComplete={ () => this.props.todos.toggle(item) } onChange={ this.handleItemUpdate } />
    });

    return (
      <Container style={ { marginTop: '3em' } }>
        <Form>
          <Form.Field>
            <Input placeholder="New Item" onKeyPress={ $event => this.handleKeyPress($event) } />
          </Form.Field>
        </Form>  
        <List>
          { itemsList } 
        </List>
        <Button.Group>
          <Button secondary onClick={ () => this.props.todos.markAll(false) }>Clear All</Button>
          <Button primary onClick={ () => this.props.todos.markAll(true) }>Complete All</Button>
        </Button.Group>
        <Divider />
        <Button.Group>
          <Button default onClick={ () => this.props.todos.showOnly('all') }>All</Button>
          <Button.Or />
          <Button default onClick={ () => this.props.todos.showOnly('incomplete') }>Incomplete</Button>
          <Button.Or />
          <Button default onClick={ () => this.props.todos.showOnly('complete') }>Complete</Button>
        </Button.Group>
        <Divider />
        <Label>{ this.props.todos.incompleteCount } Incomplete</Label>
      </Container>
    );
  }

  handleKeyPress($event) {
    console.log('handleKeyPress', $event);
    if($event.charCode === 13) {
      this.props.todos.createItem($event.target.value);
      $event.target.value = null;
    }
  }
});

export default App;
