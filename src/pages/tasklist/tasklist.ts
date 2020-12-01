import { Component } from '@angular/core';
import { NavController, ItemSliding } from 'ionic-angular';
import { Task } from '../Task';

@Component({
  selector: 'page-home',
  templateUrl: 'tasklist.html'
})

export class TaskListPage {

  tasks: Array<Task> = [];

  constructor(public navCtrl: NavController) {
    this.tasks = [
      { title: 'Milk', status: 'open' },
      { title: 'Eggs', status: 'open' },
      { title: 'Syrup', status: 'open' },
      { title: 'Pancake Mix', status: 'open' }
    ];
  }

  addItem() {
    /*For now, we will use the standard prompt method to display a 
    dialog to allow the user to enter a new task title*/
    let theNewTask: string = prompt("New Task");

    //If the dialog text is not empty ...
    if (theNewTask !== '') {
        //This will be included in a generic object that is pushed onto our tasks array
        this.tasks.push({ title: theNewTask, status: 'open' });
    }
  }
  maskAsDone(slidingItem: ItemSliding, task: Task){
    task.status = 'done';
    setTimeout(() => { slidingItem.close(); }, 1);
  }
  removeTask(slidingItem: ItemSliding, task: Task){
    task.status = 'removed';
    let index = this.tasks.indexOf(task);
    if (index > -1) {
        //Removes the task from the array at a specific position
        this.tasks.splice(index, 1);
    }
    setTimeout(() => { slidingItem.close(); }, 1);
  }

}
