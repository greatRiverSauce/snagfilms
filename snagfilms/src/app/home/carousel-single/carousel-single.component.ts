import { Component, OnInit, Input, ElementRef, Renderer2,HostBinding } from '@angular/core';


@Component({
  selector: 'app-carousel-single',
  templateUrl: './carousel-single.component.html',
  styleUrls: ['./carousel-single.component.css']
})
export class CarouselSingleComponent implements OnInit {
  show: boolean;
  @Input('item') item: any;
  @Input() height;
  @Input() font;
  constructor() { }

  ngOnInit() {
  }

}
