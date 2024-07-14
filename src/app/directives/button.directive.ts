import { Directive, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { BoxModelDirective } from './boxmodel.directives';

@Directive({
    selector: '[button]'
})
export class ButtonDirective extends BoxModelDirective implements OnChanges {
    constructor(public override element: ElementRef) {
        super(element);

        const style = this.element.nativeElement.style;

        style.border = 'none';
        style.backgroundColor = '#1B4D7A';
        style.height = '44px';
        style.fontSize = '14px';
        style.borderRadius = '8px';
        style.color = 'white';
        style.width = '100%';
        style.cursor = 'pointer';
    }

    override ngOnChanges(changes: SimpleChanges): void {
        super.ngOnChanges(changes);
    }
}