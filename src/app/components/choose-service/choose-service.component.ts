import { Component } from '@angular/core';

@Component({
  selector: 'app-choose-service',
  templateUrl: './choose-service.component.html',
  styleUrls: ['./choose-service.component.scss']
})
export class ChooseServiceComponent {
  selected: string[] = [];
  unselected: string[] = [
    'Service 1',
    'Service 2',
    'Service 3',
    'Service 4',
  ];

  delete(index: string) {
    this.selected.splice(this.selected.indexOf(index), 1);
    this.unselected.push(index);
  }

  add(index: string) {
    this.unselected.splice(this.unselected.indexOf(index), 1);
    this.selected.push(index);
  }
}
