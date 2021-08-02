import { Component } from "@angular/core";
@Component({
  selector: '<events-list></events-list>',
  template: `
  <div>
    <h1>Upcoming Angular Events</h1>
    <hr>
    <event-thumbnail (eventClick)="handleEventCliked($event)" [event]="event1"></event-thumbnail>
  </div>
  `
})

export class EventsListComponent{
  event1 = {
    id: 1,
    name: 'Angular Connect',
    date: '02/08/2021',
    time: '14:40 pm',
    price: 1000,
    imageUrl: '/assets/images/angularconnect-shield/png/',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'ENGLAND'
    }
  }

  handleEventCliked(data){
    console.log('received: ', this.event1.location.address)
  }
}
