import {
    Directive,
    ElementRef,
    Input,
    OnChanges,
    SimpleChanges,
  } from '@angular/core';
  import { BoxModelDirective } from './boxmodel.directives';
  
  @Directive({
    selector: '[flex]',
  })
  export class FlexDirective extends BoxModelDirective implements OnChanges {
    @Input('flexDirection') flexDirection?: 'row' | 'column';
    @Input('flex') flex?: string;
    @Input('justifyContent') justifyContent?:
      | 'center'
      | 'flex-start'
      | 'flex-end'
      | 'space-between'
      | 'space-around'
      | 'space-evenly';
    @Input('alignItems') alignItems?:
      | 'center'
      | 'flex-start'
      | 'flex-end'
      | 'baseline';
  
    constructor(public override element: ElementRef) {
      super(element);
      const style = this.element.nativeElement.style;
      style.display = 'flex';
      style.flexDirection = 'column';
    }
  
    override ngOnChanges(changes: SimpleChanges): void {
      super.ngOnChanges(changes);
  
      const style = this.element.nativeElement.style;
  
      if (changes['flexDirection']) {
        style.flexDirection = changes['flexDirection'].currentValue;
      }
  
      if (changes['flex']) {
        style.flex = changes['flex'].currentValue;
      }
  
      if (changes['justifyContent']) {
        style.justifyContent = changes['justifyContent'].currentValue;
      }
  
      if (changes['alignItems']) {
        style.alignItems = changes['alignItems'].currentValue;
      }
  
      if (changes['padding']) {
        style.padding = changes['padding'].currentValue;
      }
  
      if (changes['margin']) {
        style.margin = changes['margin'].currentValue;
      }
    }
  }
  