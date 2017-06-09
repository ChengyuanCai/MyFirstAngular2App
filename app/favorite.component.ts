import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
	selector: 'favorite',
	template: `<i class="glyphicon" 
			      [ngClass]="{
			      	'glyphicon-star-empty' : !isFavorite,
			      	'glyphicon-star' : isFavorite
			      }"
			      (click)="changeFilling()"> 
  			 </i>`,
})
export class FavoriteComponent {
	@Input() isFavorite = false;

	@Output() change = new EventEmitter();

	changeFilling() {
		this.isFavorite = !this.isFavorite;
		this.change.emit({ newValue: this.isFavorite });
	}
}