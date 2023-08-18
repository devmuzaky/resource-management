import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  items: MenuItem[] | undefined;

  ngOnInit(): void {
    this.items = [
      {label: ' إدارة مواعيد العملاء'},
      {
        icon: 'pi pi-fw pi-search',
        styleClass: 'search-icon',
        id: 'search-icon'
      },
      {
        icon: 'pi pi-fw pi-bell',
      },
      {
        icon: 'pi pi-fw pi-calendar',
      }
    ];
  }


}
