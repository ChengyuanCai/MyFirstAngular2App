import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'vote',
	template: `<div class="vote-wrapper">
			   <i class="glyphicon glyphicon-menu-up hover" [class.highlighted]="myVote == 1" (click)="upvote()"></i>
				<span>{{voteCount}}</span>
			   <i class="glyphicon glyphicon-menu-down hover" [class.highlighted]="myVote == -1" (click)="downvote()"></i>
			   </div>
	`,
	styles: [`
		.vote-wrapper {
			width: 20px;
			text-align: center;
			color: #999;
		}

		.highlighted {
			color: deeppink;
		}

		.hover {
			cursor:pointer;
		}
	`]
})
export class VoteComponent {
	@Input() voteCount = 0
	@Input() myVote = 0

	@Output() vote = new EventEmitter();

	upvote() {
		if (this.myVote <= 0) {
			this.voteCount = this.voteCount + 1;
			this.myVote += 1;
			this.vote.emit({myVote: this.myVote});
		}
		
	}

	downvote() {
		if (this.myVote >= 0) {
			this.voteCount = this.voteCount - 1;
			this.myVote -= 1;
			this.vote.emit({myVote: this.myVote});
		}
	}
}