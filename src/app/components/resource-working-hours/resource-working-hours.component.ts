import {Component} from '@angular/core';

@Component({
  selector: 'app-resource-working-hours',
  templateUrl: './resource-working-hours.component.html',
  styleUrls: ['./resource-working-hours.component.scss']
})
export class ResourceWorkingHoursComponent {

  days = [
    "السبت",
    "الأحد",
    "الإثنين",
    "الثلاثاء",
    "الأربعاء",
    "الخميس",
    "الجمعة"
  ]

}
