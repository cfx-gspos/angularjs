import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  public keyword: string;
  public todolist: any[] = [];

  constructor(public storage: StorageService) {
    
  }

  ngOnInit(): void {
  }

  doAdd(e) {
    if (e.keyCode == 13) {
      if (!this.todolistHasKeyword(this.todolist, this.keyword)) {
        this.todolist.push({
          title: this.keyword,
          status: 0,
        });
      }
      else {
        alert('existed');
      }
    }
    this.keyword = '';
  }
  deleteData(key) {
    this.todolist.splice(key, 1);
  }

  todolistHasKeyword(todolist, keyword) {

    for (let index = 0; index < todolist.length; index++) {
      if (todolist[index].title == keyword) {
        return true;
      }

    }
    return false;
  }

}
