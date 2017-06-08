import {Component} from '@angular/core';

@Component({
	selector: 'favorite',
	template: `<i class="glyphicon" [class.glyphicon-star-empty]="!favorited" [class.glyphicon-star]="favorited" (click)="changeFilling()"> 
  			 </i>`
})
export class FavoriteComponent {
	favorited = false;

	changeFilling() {
		this.favorited = !this.favorited;
	}
}