import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todos.service';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.css',
  providers: [TodoService],
})
export class ObservableComponent implements OnInit {
  // inject dependency which is my Todo service
  constructor(private _data: TodoService) {}

  data: any[] = [];

  ngOnInit() {
    //
  }

  public getTodoData() {
    this._data.todoData().subscribe({
      next: (res) => {
        if (res) {
          this.data = res;
        }
      },

      error: (err) => {
        console.log(err);
      },
    });
  }
}
