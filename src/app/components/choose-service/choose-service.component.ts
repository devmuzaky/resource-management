import {Component, OnInit} from '@angular/core';
import {ChooseService} from "../../core/models/choose-service";

@Component({
  selector: 'app-choose-service',
  templateUrl: './choose-service.component.html',
  styleUrls: ['./choose-service.component.scss']
})
export class ChooseServiceComponent implements OnInit{
  selected: ChooseService[] = [
    {
      id: 1,
      serviceImage: 'assets/images/serviceImage.png',
      serviceName: 'تنظيف البشرة',
      time: '30 دقيقة',
      price: '50 ريال',
    },
    {
      id: 2,
      serviceImage: 'assets/images/serviceImage.png',
      serviceName: 'تنظيف البشرة',
      time: '30 دقيقة',
      price: '50 ريال',
    },
    {
      id: 3,
      serviceImage: 'assets/images/serviceImage.png',
      serviceName: 'تنظيف البشرة',
      time: '30 دقيقة',
      price: '50 ريال',
    }
  ];
  unselected: ChooseService[] = [
    {
      id: 4,
      serviceImage: 'assets/images/serviceImage.png',
      serviceName: 'تنظيف البشرة',
      time: '30 دقيقة',
      price: '50 ريال',
    },
    {
      id: 5,
      serviceImage: 'assets/images/serviceImage.png',
      serviceName: 'تنظيف البشرة',

      time: '30 دقيقة',
      price: '50 ريال',
    }
  ]
  chooseServiceHeader: string = '';
  overlayVisible: boolean = false;
  delete(index: number) {
    this.selected.splice(index, 1);
    if (this.selected.length === 0) {
      this.overlayVisible = false;
    }
    this.chooseServiceHeader = 'اختر الخدمة' + ' ( ' + this.selected.length + ' )'

  }

  ngOnInit() {
    this.chooseServiceHeader = 'اختر الخدمة' + ' ( ' + this.selected.length + ' )'
  }

  add(index: number) {
    this.selected.push(this.unselected[index]);
    this.unselected.splice(index, 1);
    if (this.unselected.length === 0) {
      this.overlayVisible = false;
    }
    this.chooseServiceHeader = 'اختر الخدمة' + ' ( ' + this.selected.length + ' )'
  }

  toggle() {
    this.overlayVisible = !this.overlayVisible;
  }
}
