import { observable, decorate } from 'mobx';

class TodoModel {
    constructor(label, complete = false) {
        this.label = label;
        this.complete = false;
    }
}

decorate(TodoModel, {
  label: observable,
  complete: observable
});

export default TodoModel;