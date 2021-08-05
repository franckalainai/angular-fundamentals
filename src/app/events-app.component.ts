import { Component } from "@angular/core";

@Component({
  selector: 'events-app',
  template: `
    <nav-bar></nav-bar>
    <events-list-services></events-list-services>
  `
})

export class EventsAppComponent{
  title = 'app'
}
