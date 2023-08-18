import {Component, Input} from '@angular/core';
import {StoreService} from "../../../services/store.service";

@Component({
  selector: 'app-day-entries',
  templateUrl: './day-entries.component.html',
  styleUrls: ['./day-entries.component.scss']
})
export class DayEntriesComponent {

  @Input() day: string = '';

  constructor(private storeService: StoreService) {
  }

  times = [
    {
      order: 1,
      from: new Date(),
      to: new Date(),
    }
  ]
  active = false;


  addNew() {
    this.times.push({
      order: this.times.length + 1,
      from: new Date(),
      to: new Date(),
    });
    this.storeService.setDayTimes(this.day, this.times)

    console.log(this.times);
    console.log(this.storeService.getDays())
  }

  remove(item: any) {
    this.times = this.times.filter(time => time.order !== item.order);
  }

  updateStore(day: string) {
    this.storeService.setDayTimes(day, this.times)
  }
}
