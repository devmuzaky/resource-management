import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-resource-details',
  templateUrl: './resource-details.component.html',
  styleUrls: ['./resource-details.component.scss']
})
export class ResourceDetailsComponent implements OnInit {
  resourceName: string = "محمد زكي";
  resourceType: number = 1;
  resourceTime: number = 1;

  availableTime: number = 20;
  timeUnit: any = 'يوم';
  selectedUnit: string = "يوم";
  fixedTimeValue: number = 1;
  showFixedTime: boolean = false;
  bookingType: number = 1;
  showMultiBooking: boolean = false;

  ngOnInit() {
    this.timeUnit = [
      "يوم",
      "أسبوع",
      "شهر",
      "سنة"
    ];
  }

  onResourceTypeChange(number: number) {
    this.resourceType = number;
  }

  onResourceTimeChange(number: number) {
    this.resourceTime = number;
    this.showFixedTime = this.resourceTime == 2;
  }


  onBookingTypeChange(number: number) {
    this.bookingType = number;
    this.showMultiBooking = this.bookingType == 2;
  }

}
