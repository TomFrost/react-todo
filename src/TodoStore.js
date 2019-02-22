import { observable, decorate } from 'mobx';

class TodoList {
  sampleItems = [
    {
      name: 'Item 1',
      complete: false
    }, 
    {
      name: 'Item 2',
      complete: false
    }, {
      name: 'Item 3',
      complete: false
    },
  ];

  items = [];

  constructor(items) {
    if(items) {
      this.items = items;
    } else {
      this.items = this.sampleItems;
    }
  }

  createItem() {
    let item = new TodoItem(this);
    this.items.push(item);
    return item;
  }

  removeItem(item) {
    
  }
}

decorate(TodoList, {
  items: observable
});

export default TodoList;