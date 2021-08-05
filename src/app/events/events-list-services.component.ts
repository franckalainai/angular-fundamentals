import { Component } from "@angular/core";
import { EventService } from "./shared/event.service";
@Component({
  selector: 'events-list-services',
  template: `
  <div>
    <h1>Upcoming Angular Events</h1>
    <hr>
    <div class="row">
      <div *ngFor="let event of events" class="col-md-5" >
        <event-thumbnail [event]="event"></event-thumbnail>
      </div>
    </div>
  </div>
  `
})

export class EventsListServicesComponent{
  events: any[]
  constructor(private eventService: EventService){
    this.events = this.eventService.getEvents()
  }
}
