import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'event-thumbnail',
  template: `
  <div class="well hoverwell thumbnail">
  <h2>{{event.name}}</h2>
  <div>{{event.date}}</div>
  <div>{{event.time}}</div>
  <div>Price: \${{event.price}}</div>
    <div>
      <span>{{event.location.address}}</span>
      <span>{{ event.location.city }}</span>
      <span>{{event.location.country}}</span>
    </div>
    <button class="btn btn-primary" (click)="handleClickMe()">Click Me !</button>
</div>
  `
})

export class EventThumbnailComponent{
  @Input() event:any
  @Output() eventClick = new EventEmitter()

  handleClickMe(){
    this.eventClick.emit()
  }


}
