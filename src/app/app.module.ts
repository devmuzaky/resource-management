import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ChooseServiceComponent } from './components/choose-service/choose-service.component';
import { ResourceDetailsComponent } from './components/resource-details/resource-details.component';
import { ResourceWorkingHoursComponent } from './components/resource-working-hours/resource-working-hours.component';
import { OptionsComponent } from './components/options/options.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ChooseServiceComponent,
    ResourceDetailsComponent,
    ResourceWorkingHoursComponent,
    OptionsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
