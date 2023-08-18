import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ChooseServiceComponent } from './components/choose-service/choose-service.component';
import { ResourceDetailsComponent } from './components/resource-details/resource-details.component';
import { ResourceWorkingHoursComponent } from './components/resource-working-hours/resource-working-hours.component';
import { OptionsComponent } from './components/options/options.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MenubarModule} from "primeng/menubar";
import {AvatarModule} from "primeng/avatar";
import {InputSwitchModule} from "primeng/inputswitch";
import {FormsModule} from "@angular/forms";
import { DayEntriesComponent } from './components/resource-working-hours/day-entries/day-entries.component';
import {CalendarModule} from "primeng/calendar";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ChooseServiceComponent,
    ResourceDetailsComponent,
    ResourceWorkingHoursComponent,
    OptionsComponent,
    DayEntriesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MenubarModule,
    AvatarModule,
    InputSwitchModule,
    FormsModule,
    CalendarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
