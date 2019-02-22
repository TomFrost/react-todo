import _ from 'lodash';
import { observable, decorate, computed } from 'mobx';

import TodoModel from './TodoModel';

class TodoStore {
  sampleItems = [
    new TodoModel('Item 1'),
    new TodoModel('Item 2'),
    new TodoModel('Item 3'),
  ];

  items = [];

  constructor(items) {
    if(items) {
      this.items = items;
    } else {
      this.items = this.sampleItems;
    }
    this.show = 'all';
  }

  get incompleteCount() {
    let count = this.items.reduce((acc, item) => {
      console.log('reduce', acc, item);
      return item.complete ? acc : acc + 1;
    }, 0);
    console.log('incompleteCount', count);
    return count;
  }

  get visible() {
    console.log('visible');
    return this.items.filter((item) => {
      console.log('visible', this.show);
      switch(this.show) {
        case 'incomplete': return !item.complete;
        case 'complete': return item.complete;
        case 'all':
        default: 
          return true;
      }
    });
  }


  showOnly(type = 'all') {
    console.log('showOnly', type);
    this.show = type;
  }

  createItem(label, complete = false) {
    let item = new TodoModel(label, complete);
    this.items.push(item);
    return item;
  }

  removeItem(item) {
    
  }

  toggle(item) {
    console.log('toggle', item);
    item.complete = !item.complete;
    console.log(this.items);
  }

  markAll(complete = true) {
    _.forEach(this.items, (item) => {
      item.complete = complete;
    });
  }
}

decorate(TodoStore, {
  items: observable,
  show: observable,
  incompleteCount: computed,
  visible: computed
});

export default TodoStore;