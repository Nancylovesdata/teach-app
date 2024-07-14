import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[boxModel]',
})
export class BoxModelDirective implements OnChanges {
  @Input('padding') padding?: string;
  @Input('margin') margin?: string;

  constructor(public element: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    const style = this.element.nativeElement.style;

    if (changes['padding']) {
      style.padding = changes['padding'].currentValue;
    }

    if (changes['margin']) {
        style.margin = changes['margin'].currentValue;
      }
    }
  }
