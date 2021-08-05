import { Component, Input } from "@angular/core";

@Component({
  selector: 'event-thumbnail-services',
  template: `
  <div class="well hoverwell thumbnail">
  <h2>Name: {{event?.name}}</h2>
  <div>Date: {{event?.date}}</div>
    <div>
    Time: {{event?.time}}
    </div>
  <div>Price: \${{event?.price}}</div>
    <div>
      <span>Address: {{event?.location?.address}}</span>
      <span class="pad-left">Location: {{event?.location?.country}}, {{ event?.location?.city }}</span>
    </div>
  <div>Online Url: {{event?.onlineUrl}}</div>
</div>
  `,
  styleUrls: ['./events-list.component.css']
})

export class EventThumbnailServicesComponent{
  @Input() event:any

}
