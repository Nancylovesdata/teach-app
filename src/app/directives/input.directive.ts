import { Directive, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { BoxModelDirective } from './boxmodel.directives';

@Directive({
    selector: '[input]'
})
export class InputDirective extends BoxModelDirective implements OnChanges {
    constructor(public override element: ElementRef) {
        super(element);
        const style = this.element.nativeElement.style;

        style.border = '3px solid #D9D9D9';
        style.height = '40px';
        style.width = '280px';
        style.padding = '0 16px';
        style.fontSize = '14px';
        style.borderRadius = '8px';
        style.marginTop = '16px';
        style.marginBottom = '16px';
    }

    override ngOnChanges(changes: SimpleChanges): void {
        super.ngOnChanges(changes);
    }
}