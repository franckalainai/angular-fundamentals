import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsAppComponent } from './events-app.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventsListServicesComponent } from './events/events-list-services.component';
import { EventsListComponent } from './events/events-list.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/event.service';

@NgModule({
  imports: [
    BrowserModule
  ],
  providers: [EventService],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventsListServicesComponent
  ],

  bootstrap: [EventsAppComponent]
})
export class AppModule { }
