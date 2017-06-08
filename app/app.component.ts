import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: 'app/favorite.template.html'
})
export class AppComponent {
	title = "My First Angular App";

	onFavoriteChange($event) {
		console.log($event);
	}

	onVote($event) {
		console.log($event);
	}

	post = {
		title: 'title',
		isFavorite: true
	}

	tweet = {
		totalLikes: 10,
		isLike: false
	}

	votes = {
		voteCount: 10,
		myVote: 0
	}
}
