import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'event-thumbnail',
  template: `
  <div class="well hoverwell thumbnail">
  <h2>Name: {{event?.name}}</h2>
  <div>Date: {{event?.date}}</div>
    <!--<div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">-->
    <div [ngStyle]="
    {'color': event?.time === '8:00 am' ? '#003300' : '#bbb',
    'font-wheight': event?.time === '8:00 am' ? 'bold': 'normal'
    }" [ngSwitch]="event?.time">
    Time: {{event?.time}}
      <span *ngSwitchCase="'8:00 am'"> (Early Start)</span>
      <span *ngSwitchCase="'10:00 am'"> (Late Start)</span>
      <span *ngSwitchDefault> (Normal Start)</span>
    </div>
  <div>Price: \${{event?.price}}</div>
    <div *ngIf="event?.location">
    <!--<div [hidden]="!event?.location">-->
      <span>Address: {{event?.location?.address}}</span>
      <span class="pad-left">Location: {{event?.location?.country}}, {{ event?.location?.city }}</span>
    </div>
  <div *ngIf="event?.onlineUrl">Online Url: {{event?.onlineUrl}}</div>
  <!--<div [hidden]="!event?.onlineUrl">Online Url: {{event?.onlineUrl}}</div>-->
    <!--<button class="btn btn-primary" (click)="handleClickMe()">Click Me !</button>-->
</div>
  `,
  styleUrls: ['./events-list.component.css']
})

export class EventThumbnailComponent{
  @Input() event:any

  /*
  getStartTimeClass(){
    if(this.event && this.event.time === '8:00 am')
      return ['green', 'bold']
    return []
  }
  */

  /*
  SomeProperty: any = "Some value"

  bonjour(){
    console.log('bonjour', this.event.name)
  }
  */

  //@Output() eventClick = new EventEmitter()

  /*
  handleClickMe(){
    this.eventClick.emit()
  }
  */


}
