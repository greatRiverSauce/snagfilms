import { Directive,OnInit, ElementRef, Renderer2, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Directive({
  selector: '[appSlide]'
})
export class SlideDirective implements OnInit{

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit() {

  }
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement.querySelector('img'), 'filter', 'brightness(50%)');

  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement.querySelector('img'), 'filter', 'brightness(100%)');
  }
}
