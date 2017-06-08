import {Component, Input} from '@angular/core';

@Component({
	selector :'like',
	template : `<i class="glyphicon glyphicon-heart" [class.highlighted]="isLike" (click)="Like()"></i>
				<span> {{ totalLikes }} </span>`,
	styles: [`
	.glyphicon-heart {
		color: #ccc;
		cursor: pointer;
	}

	.highlighted {
		color: deeppink;
	}
	`
	] 
})
export class LikeComponent {
	@Input() isLike = false;
	@Input() totalLikes = 0;

	Like() {
		this.isLike = !this.isLike;
		this.totalLikes += this.isLike ? 1 : -1;
	}
}