import {Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
	selector: '[autoGrow]',
	host: {
		'(focus)' : 'onFocus()',
		'(blur)' : 'onBlur()'
	}
})
export class AutoGrowDirective {
	constructor(el: ElementRef, renderer: Renderer) {

	}

	onFocus() {

	}

	onBlur() {
		
	}
}